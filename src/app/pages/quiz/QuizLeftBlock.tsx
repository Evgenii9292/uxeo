/**
 * QuizLeftBlock — unified left image/card block for all quiz types.
 *
 * type="static"      → single non-clickable card (single_choice, multiple_select)
 * type="interactive" → two clickable compare cards (compare_ui)
 *
 * LAYOUT CONTRACT:
 *   - flexShrink: 0  — never squishes inside parent flex row
 *   - overflow: hidden on every card container — prevents inline-grid bleed
 *   - NO absolute positioning at this level
 *   - NO margin hacks / transforms
 */

import React from "react";
import type { CompareUIOption } from "../../data/quiz-bank";
import { CardAMockup, CardBMockup, QuizCard } from "../../components/quiz/QuizCardMockups";
import { ScaledPreview } from "../../components/quiz/ScaledPreview";
import type { CardState } from "../../components/quiz/QuizCardMockups";

export type CompareCardState = CardState;

// Natural pixel dimensions of CardAMockup / CardBMockup
const CARD_W = 333;
const CARD_H = 415;

// Natural pixel dimensions of Figma contrast-quiz cards
const FIGMA_COMPARE_W = 207;
const FIGMA_COMPARE_H = 231;
const FIGMA_SINGLE_W  = 186;
const FIGMA_SINGLE_H  = 231;

// ── Compare card (interactive mode only) ────────────────────────────────────────

function CompareCard({
  option,
  state,
  onClick,
  cardMinHeight,
  figmaMaxScale,
  cardWidth,
}: {
  option: CompareUIOption;
  state: CompareCardState;
  onClick?: () => void;
  cardMinHeight?: number;
  figmaMaxScale?: number;
  cardWidth?: number;
}) {
  return (
    <QuizCard
      state={state}
      onClick={onClick}
      className="self-stretch"
      style={{ width: cardWidth ?? 506, ...(cardMinHeight ? { minHeight: cardMinHeight } : {}) }}
    >
      {option.content ? (
        <ScaledPreview naturalWidth={FIGMA_COMPARE_W} naturalHeight={FIGMA_COMPARE_H} paddingY={40} maxScale={figmaMaxScale ?? 1.15}>
          {option.content}
        </ScaledPreview>
      ) : (
        <ScaledPreview naturalWidth={CARD_W} naturalHeight={CARD_H} paddingY={40}>
          {option.previewType === "good" ? <CardAMockup /> : <CardBMockup />}
        </ScaledPreview>
      )}
    </QuizCard>
  );
}

// ── Static card container (single_choice, multiple_select) ──────────────────────

function StaticCard({
  content,
  maxScale,
  cardMinHeight,
}: {
  content?: React.ReactNode | null;
  maxScale?: number;
  cardMinHeight?: number;
}) {
  return (
    <div className="self-stretch w-[496px]" style={cardMinHeight ? { minHeight: cardMinHeight } : undefined}>
      <QuizCard state="idle" className="h-full w-full">
        {content ? (
          <ScaledPreview naturalWidth={FIGMA_SINGLE_W} naturalHeight={FIGMA_SINGLE_H} paddingY={24} maxScale={maxScale ?? 1.15}>
            {content}
          </ScaledPreview>
        ) : (
          <ScaledPreview naturalWidth={CARD_W} naturalHeight={CARD_H} paddingY={40}>
            <CardAMockup />
          </ScaledPreview>
        )}
      </QuizCard>
    </div>
  );
}

// ── Public component ────────────────────────────────────────────────────────────

type QuizLeftBlockProps =
  | {
      type: "static";
      content?: React.ReactNode | null;
      /** Max scale for Figma content — allows upscaling beyond default 1.15 */
      singleMaxScale?: number;
      /** Min height (px) of the card — forces card taller so content can scale more */
      singleCardMinHeight?: number;
    }
  | {
      type: "interactive";
      compareOptions: CompareUIOption[];
      getCardState: (label: string) => CompareCardState;
      onCardClick: (label: string) => void;
      /** Optional minimum height (px) for each compare card — used to make Figma-content cards taller */
      compareCardMinHeight?: number;
      /** Optional max scale for Figma content ScaledPreview — allows upscaling beyond default 1.15 */
      compareMaxScale?: number;
      /** Explicit card width — for responsive tablet/laptop layouts */
      cardWidth?: number;
    };

export function QuizLeftBlock(props: QuizLeftBlockProps) {
  if (props.type === "interactive") {
    return (
      <div className="flex gap-[18px] items-stretch shrink-0">
        {props.compareOptions.map((option) => (
          <CompareCard
            key={option.label}
            option={option}
            state={props.getCardState(option.label)}
            onClick={() => props.onCardClick(option.label)}
            cardMinHeight={props.compareCardMinHeight}
            figmaMaxScale={props.compareMaxScale}
            cardWidth={props.cardWidth}
          />
        ))}
      </div>
    );
  }

  return (
    <StaticCard
      content={props.content}
      maxScale={props.singleMaxScale}
      cardMinHeight={props.singleCardMinHeight}
    />
  );
}