import svgPaths from "../../imports/svg-mfoan0qzpw";

export function difficultyBars(level: string): 1 | 2 | 3 {
  if (/продвинут|мидл\+|senior|сеньор/i.test(level)) return 3;
  if (/средн|мидл|middle/i.test(level)) return 2;
  return 1;
}

/** Preserve the existing filled staircase; fill one, two, or three bars by difficulty. */
export function DifficultyIcon({ level, color = "#F1F2FB" }: { level: string; color?: string }) {
  const bars = difficultyBars(level);
  return (
    <svg aria-hidden="true" width="17" height="15" viewBox="0 -3 17 15" fill="none" className="shrink-0" data-difficulty-bars={bars}>
      {[svgPaths.p1dcc7b80, svgPaths.p1f3ddd00, svgPaths.p36483400].map((d, index) => (
        <path key={index} d={d} fill={color} opacity={index < bars ? 1 : 0.25} />
      ))}
    </svg>
  );
}

/** Filled book, distinct from the stacked module layers. */
export function LessonCountIcon({ color = "#F1F2FB" }: { color?: string }) {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" className="shrink-0" fill={color}>
      <path d="M1 2.2C3.2 1.3 5.4 1.7 7.3 3V14C5.4 12.7 3.2 12.3 1 13.2V2.2ZM15 2.2C12.8 1.3 10.6 1.7 8.7 3V14C10.6 12.7 12.8 12.3 15 13.2V2.2Z" />
    </svg>
  );
}
