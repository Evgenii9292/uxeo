/** Only phone-sized touch screens need the portrait learning layout. */
export function needsPortraitGuard(viewportWidth: number, viewportHeight: number, screenWidth: number, screenHeight: number, touchPrimary: boolean): boolean {
  return touchPrimary && Math.min(screenWidth, screenHeight) < 600 && viewportWidth > viewportHeight;
}
