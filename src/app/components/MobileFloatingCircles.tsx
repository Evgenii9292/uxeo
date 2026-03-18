/**
 * MobileFloatingCircles — single floating gift/feedback circle.
 * Shared across all mobile pages.
 */

import React, { useState } from "react";
import FreeIconGift from "../../imports/FreeIconGift81465531";
import { FloatingCircle } from "./FloatingCircle";
import { FeedbackModal } from "./FeedbackModal";

const TABBAR_H   = 52;   // height of BottomTabBar
const STICKY_H   = 72;   // height of sticky continue-button slot
const BOTTOM_GAP = 20;   // gap from the lowest fixed element

// ── MobileFloatingCircles ─────────────────────────────────────────────────────

export function MobileFloatingCircles({
  tabBarVisible = true,
  hasStickyButton = false,
}: {
  tabBarVisible?: boolean;
  hasStickyButton?: boolean;
}) {
  const [showFeedback, setShowFeedback] = useState(false);

  const bottomOffset = hasStickyButton
    ? (tabBarVisible ? TABBAR_H + STICKY_H + BOTTOM_GAP : STICKY_H + BOTTOM_GAP)
    : (tabBarVisible ? TABBAR_H + BOTTOM_GAP : BOTTOM_GAP);

  return (
    <>
      <div
        className="fixed right-[16px] z-40 transition-[bottom] duration-300"
        style={{ bottom: bottomOffset }}
      >
        <FloatingCircle
          size={56}
          noArc
          onClick={() => setShowFeedback(true)}
          title="Написать отзыв"
        >
          <div style={{ width: 28, height: 28, position: "relative", flexShrink: 0 }}>
            <FreeIconGift />
          </div>
        </FloatingCircle>
      </div>

      {showFeedback && <FeedbackModal onClose={() => setShowFeedback(false)} />}
    </>
  );
}
