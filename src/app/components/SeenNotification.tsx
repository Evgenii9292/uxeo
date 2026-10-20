import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

/** Read only items actually viewed; items below the fold remain unread. */
export function SeenNotification({ isRead, onRead, children }: { isRead: boolean; onRead: () => void; children: ReactNode }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const onReadRef = useRef(onRead);
  onReadRef.current = onRead;

  useEffect(() => {
    const element = elementRef.current;
    if (isRead || !element) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let visible = false;
    let finished = false;
    const cancel = () => { clearTimeout(timer); timer = undefined; };
    const schedule = () => {
      cancel();
      if (!visible || document.hidden || finished) return;
      timer = setTimeout(() => {
        if (document.hidden || !visible) return;
        finished = true;
        onReadRef.current();
        observer.disconnect();
      }, 1200);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.5;
      schedule();
    }, { threshold: [0, 0.5] });
    observer.observe(element);
    document.addEventListener("visibilitychange", schedule);
    return () => { cancel(); observer.disconnect(); document.removeEventListener("visibilitychange", schedule); };
  }, [isRead]);

  return <div ref={elementRef}>{children}</div>;
}
