import React, { useId } from "react";

/**
 * Canonical circle widget — matches Group481510 Figma reference exactly.
 *
 * Spec:
 *   background : #394144
 *   border     : 1px (1.3365) solid #444E52
 *   shape      : perfect circle (width === height)
 *   progress   : orange gradient arc ON the border path — #FF6B21 → #994014
 *   SVG        : extends ~0.98% outside container (matches Group481510 inset-[-0.98%])
 *
 * The progress ring sits ON the border stroke, not inset from it.
 * No overflow:hidden — the arc "wraps around the outer border" exactly.
 */

interface FloatingCircleProps {
  /** Diameter in px — width and height are ALWAYS equal. Default 68. */
  size?: number;
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
  /** Small orange dot indicator (top-right corner). */
  dot?: boolean;
  /** Drop-shadow behind the circle. */
  shadow?: boolean;
  className?: string;
  /** Circle fill colour — default #394144. Pass a custom value for tablet sidebar. */
  bg?: string;
  /** Hide the orange progress arc (e.g. for the gift/feedback circle). */
  noArc?: boolean;
  /** Progress 0–1 for the arc fill. Default 0.33. */
  progress?: number;
}

export function FloatingCircle({
  size = 68,
  children,
  onClick,
  title,
  dot = false,
  shadow = false,
  className = "",
  bg = "#394144",
  noArc = false,
  progress,
}: FloatingCircleProps) {
  const rawId = useId();
  const uid = rawId.replace(/:/g, "");

  // Increased overflow to prevent stroke clipping
  const overflowPct = 0.1;
  const overflow = size * overflowPct;
  const svgSize = size + overflow * 2;
  const cx = svgSize / 2;
  const cy = svgSize / 2;

  // Border stroke — matches Group481510 strokeWidth="1.3365"
  const borderStroke = 1.3365;
  // Circle radius: cx minus half-stroke so stroke sits exactly on the edge
  const r = cx - borderStroke / 2;

  // Progress arc — ON the same radius as the border (strokeWidth larger so it's visible)
  const circ = 2 * Math.PI * r;
  const progressVal = noArc ? 0 : Math.max(0, Math.min(1, progress ?? 0.33));
  const arc = circ * progressVal;
  const arcStroke = 3; // wide enough to overlay the border cleanly

  return (
    <div
      title={title}
      onClick={onClick}
      className={`relative shrink-0 flex items-center justify-center ${
        onClick ? "cursor-pointer active:scale-90 transition-transform duration-75" : ""
      } ${className}`}
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        // The circle shape is defined by the SVG itself (fill #394144).
        // borderRadius:50% here just helps with tap highlight shapes.
        borderRadius: "50%",
        boxShadow: shadow ? "0px 8px 32px rgba(0,0,0,0.32)" : undefined,
      }}
    >
      {/*
        SVG is sized to overflow slightly (matching Group481510 inset-[-0.98%]).
        It draws: dark circle fill + border stroke + orange arc on the border path.
        No overflow:hidden — arc wraps the outer border visibly.
      */}
      <div
        style={{
          position: "absolute",
          // Negative inset = SVG extends beyond container bounds
          top: -overflow,
          left: -overflow,
          pointerEvents: "none",
        }}
      >
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          fill="none"
          overflow="visible"
        >
          {/* 1. Dark background circle + border stroke */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill={bg}
            stroke="#444E52"
            strokeWidth={borderStroke}
          />
          {/* 2. Orange gradient progress arc — wraps the border path */}
          {!noArc && (
          <g transform={`rotate(-90 ${cx} ${cy})`}>
            <circle
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={`url(#fc_${uid})`}
              strokeWidth={arcStroke}
              strokeDasharray={`${arc} ${circ}`}
              strokeLinecap="round"
            />
          </g>
          )}
          <defs>
            <linearGradient id={`fc_${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B21" />
              <stop offset="100%" stopColor="#994014" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Icon slot — centred, above the SVG */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>

      {/* Optional status dot - removed */}
    </div>
  );
}