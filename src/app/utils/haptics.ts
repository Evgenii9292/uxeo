/**
 * haptics.ts — micro-vibration helpers via Vibration API
 * Works on Android Chrome/Firefox. iOS Safari silently ignores calls.
 */

function vibe(pattern: number | number[]) {
  try {
    if ("vibrate" in navigator) navigator.vibrate(pattern);
  } catch {
    // ignore — some browsers throw in certain contexts
  }
}

/** Barely-perceptible tap for tab switches and minor interactions */
export const hapticTap = () => vibe(8);

/** Light click for primary button presses */
export const hapticClick = () => vibe(12);

/** Satisfying pulse for correct answers */
export const hapticCorrect = () => vibe(15);

/** Double buzz for wrong answers */
export const hapticWrong = () => vibe([40, 30, 40]);

/** Celebration pattern for achievements / lesson completion */
export const hapticSuccess = () => vibe([10, 40, 15, 50, 20]);
