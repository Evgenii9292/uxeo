import { useState, useEffect } from 'react';

const STORAGE_KEY = '__dev_preview_width__';

function getStoredWidth(): number | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v ? parseInt(v, 10) : null;
  } catch {
    return null;
  }
}

/**
 * Returns the current viewport width and re-renders on resize.
 * In dev mode, can be overridden via setDevPreviewWidth().
 * Defaults to 1440 (desktop) during SSR / before hydration.
 */
export function useWindowWidth(): number {
  const [width, setWidth] = useState<number>(() => {
    const stored = getStoredWidth();
    if (stored !== null) return stored;
    return typeof window !== 'undefined' ? window.innerWidth : 1440;
  });

  useEffect(() => {
    const onResize = () => {
      const stored = getStoredWidth();
      if (stored !== null) return; // preview override active — ignore real resize
      setWidth(window.innerWidth);
    };

    const onDevChange = (e: Event) => {
      const val = (e as CustomEvent<number | null>).detail;
      setWidth(val ?? window.innerWidth);
    };

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('__dev_preview_change__', onDevChange);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('__dev_preview_change__', onDevChange);
    };
  }, []);

  return width;
}

/** Call from DevToolbar to simulate a specific viewport width across all components */
export function setDevPreviewWidth(w: number | null) {
  try {
    if (w === null) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, String(w));
  } catch { /* ignore */ }

  window.dispatchEvent(
    new CustomEvent('__dev_preview_change__', { detail: w })
  );
}
