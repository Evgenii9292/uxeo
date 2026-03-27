/**
 * MobileFloatingCircles — single floating gift/feedback circle.
 * Shared across all mobile pages.
 */

import React, { useState } from "react";
import { useLocation } from "react-router";
import FreeIconGift from "../../imports/FreeIconGift81465531";
import { FloatingCircle } from "./FloatingCircle";
import { FeedbackModal } from "./FeedbackModal";

const HEADER_H   = 50;   // height of MobileHeader
const TOP_GAP    = 10;   // gap below the header

// ── MobileFloatingCircles ─────────────────────────────────────────────────────

export function MobileFloatingCircles({
  tabBarVisible = true,
  hasStickyButton = false,
}: {
  tabBarVisible?: boolean;
  hasStickyButton?: boolean;
}) {
  const [showFeedback, setShowFeedback] = useState(false);
  const { pathname } = useLocation();
  const hideGift = pathname === "/notifications";

  return (
    <>
      {!hideGift && <div
        className="fixed right-[16px] z-40"
        style={{ top: HEADER_H + TOP_GAP }}
      >
        <FloatingCircle
          size={38}
          noArc
          bg="#282F33"
          onClick={() => setShowFeedback(true)}
          title="Написать отзыв"
        >
          <div style={{ width: 18, height: 18, position: "relative", flexShrink: 0 }}>
            <FreeIconGift />
          </div>
        </FloatingCircle>
      </div>}

      {showFeedback && <FeedbackModal onClose={() => setShowFeedback(false)} />}
    </>
  );
}
