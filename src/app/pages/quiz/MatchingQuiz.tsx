/**
 * MatchingQuiz — click-or-drag to connect pairs.
 *
 * Interaction model:
 *  1. Click (or mousedown) a top card  → select it; a gray line follows the cursor.
 *  2. Click a bottom card              → connection is made (gray line, no correctness shown yet).
 *  3. Clicking another top card while one is selected → switches selection.
 *  4. Clicking empty space during drag → cancels drag; click mode keeps selection.
 *  5. When ALL pairs are connected     → "Продолжить" button becomes active.
 *  6. Click "Продолжить"               → check answers, color lines, award XP.
 *  7. Click "Продолжить" again         → navigate to next question.
 *
 * Lines start/end at the connector dots, not the card centres.
 */

import { useState, useRef, useEffect, useMemo } from "react";
import type { MatchingPair } from "../../data/quiz-bank";
import { ContinueDisabled, ContinueActive, ContinueCorrect } from "./ContinueButtons";
import { CorrectFeedback } from "./QuizFeedback";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { FlagReportButton } from "./FlagReportButton";

// ─── Icons ────────────────────────────────────────────────────────────────────

function ToggleIcon() {
  return (
    <div className="relative flex items-center justify-center w-[78px] h-[42px] bg-[#22c55e] rounded-full shadow-inner">
      <div className="absolute right-[4px] w-[34px] h-[34px] bg-white rounded-full shadow-md" />
    </div>
  );
}

function CheckboxIcon() {
  return (
    <div className="w-[54px] h-[54px] bg-[#22c55e] rounded-[14px] flex items-center justify-center">
      <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
        <path d="M3 11L11 19L25 3" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function TooltipIcon() {
  return (
    <div className="w-[54px] h-[54px] bg-[#2d3c44] rounded-full flex items-center justify-center border-[2px] border-[#4a5c66]">
      <span
        className="font-['Georgia',serif] font-medium text-[#8a9ba5] text-[28px] select-none"
        style={{ lineHeight: 1, marginTop: 2 }}
      >
        i
      </span>
    </div>
  );
}

function renderIcon(iconType?: string) {
  if (iconType === "toggle")   return <ToggleIcon />;
  if (iconType === "checkbox") return <CheckboxIcon />;
  if (iconType === "tooltip")  return <TooltipIcon />;
  return null;
}

// ─── Sounds ───────────────────────────────────────────────────────────────────

function playConnectSound() {
  try {
    const ctx = new AudioContext();
    const o = ctx.createOscillator();
    o.type = "sine";
    const g = ctx.createGain();
    o.frequency.setValueAtTime(440, ctx.currentTime);
    o.frequency.setValueAtTime(550, ctx.currentTime + 0.07);
    g.gain.setValueAtTime(0.08, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.12);
  } catch (_) {}
}

function playCheckSound(correct: boolean) {
  try {
    const ctx = new AudioContext();
    const o = ctx.createOscillator();
    o.type = "sine";
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    if (correct) {
      o.frequency.setValueAtTime(523, ctx.currentTime);
      o.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
      o.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
      o.frequency.setValueAtTime(1047, ctx.currentTime + 0.3);
      g.gain.setValueAtTime(0.15, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
      o.start(); o.stop(ctx.currentTime + 0.5);
    } else {
      o.frequency.setValueAtTime(300, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.2);
      g.gain.setValueAtTime(0.1, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      o.start(); o.stop(ctx.currentTime + 0.22);
    }
  } catch (_) {}
}

// ─── Component ────────────────────────────────────────────────────────────────

export function MatchingQuiz({
  question,
  pairs,
  explanation,
  onAnswer,
  onContinue,
  earnedXP,
}: {
  question: string;
  pairs: MatchingPair[];
  explanation: string;
  onAnswer: (isCorrect: boolean) => void;
  onContinue: () => void;
  earnedXP: number;
}) {
  // Shuffle bottom row once on mount (rotate by 1)
  const shuffledPairs = useMemo(() => {
    const n = pairs.length;
    return pairs.map((_, i) => pairs[(i + 1) % n]);
  }, []);

  // topId → bottomId. All shown as gray until checked.
  const [connections, setConnections] = useState<Record<string, string>>({});

  // The currently "active" top card (selected for connection)
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // The currently "active" bottom card (selected for reverse connection)
  const [selectedBottomId, setSelectedBottomId] = useState<string | null>(null);

  // Which top card is hovered during bottom→top drag
  const [hoveredTopId, setHoveredTopId] = useState<string | null>(null);

  // Live cursor position in client coords (used to draw the live line)
  // null = cursor not yet moved since selection — prevents jump-to-corner bug
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  // Which bottom card is currently hovered during active selection
  const [hoveredBottomId, setHoveredBottomId] = useState<string | null>(null);

  // Whether the user has pressed "Продолжить" to check answers
  const [checked, setChecked] = useState(false);

  // Position where mousedown happened (to detect click vs drag)
  const mouseDownPos = useRef({ x: 0, y: 0 });

  const containerRef   = useRef<HTMLDivElement>(null);
  const topCardRefs    = useRef<Record<string, HTMLDivElement | null>>({});
  const topDotRefs     = useRef<Record<string, HTMLDivElement | null>>({});
  const bottomCardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const bottomDotRefs  = useRef<Record<string, HTMLDivElement | null>>({});

  // ── Derived ────────────────────────────────────────────────────────────────

  const allConnected = pairs.every((p) => connections[p.id] !== undefined);
  const allCorrect   = pairs.every((p) => connections[p.id] === p.id);
  const vw = useWindowWidth();
  const isMobile = vw < 1024; // mobile + tablet both use the compact tap-to-connect layout
  const quizW = Math.min(1042, vw - 48);

  // ── Helpers ────────────────────────────────────────────────────────────────

  /** Centre of an element relative to the container */
  const elCenter = (el: HTMLElement): { x: number; y: number } => {
    const c = containerRef.current;
    if (!c) return { x: 0, y: 0 };
    const cr = c.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    return { x: er.left + er.width / 2 - cr.left, y: er.top + er.height / 2 - cr.top };
  };

  /** Convert client coords → container-relative */
  const toRel = (cx: number, cy: number) => {
    const c = containerRef.current;
    if (!c) return { x: cx, y: cy };
    const cr = c.getBoundingClientRect();
    return { x: cx - cr.left, y: cy - cr.top };
  };

  /** Which bottom card rect contains the client point? */
  const findBottomAt = (cx: number, cy: number): string | null => {
    for (const [id, el] of Object.entries(bottomCardRefs.current)) {
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom) return id;
    }
    return null;
  };

  /** Which top card rect contains the client point? */
  const findTopAt = (cx: number, cy: number): string | null => {
    for (const [id, el] of Object.entries(topCardRefs.current)) {
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom) return id;
    }
    return null;
  };

  // ── Interaction handlers ───────────────────────────────────────────────────

  const handleTopMouseDown = (e: React.MouseEvent, id: string) => {
    if (checked) return;
    e.preventDefault();

    // Remove existing connection for this source so it can be reconnected
    setConnections(prev => { const n = { ...prev }; delete n[id]; return n; });

    setSelectedId(id);
    setCursor(null); // reset: don't draw line until mouse moves
    setHoveredBottomId(null);
    mouseDownPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleOverlayMove = (e: React.MouseEvent) => {
    setCursor({ x: e.clientX, y: e.clientY });
    setHoveredBottomId(findBottomAt(e.clientX, e.clientY));
  };

  const handleOverlayUp = (e: React.MouseEvent) => {
    if (!selectedId) return;

    const bottomId = findBottomAt(e.clientX, e.clientY);
    const topId    = findTopAt(e.clientX, e.clientY);
    const dx = e.clientX - mouseDownPos.current.x;
    const dy = e.clientY - mouseDownPos.current.y;
    const wasDrag = Math.sqrt(dx * dx + dy * dy) > 8;

    if (bottomId) {
      // Connect top → bottom
      setConnections(prev => {
        const n = { ...prev };
        for (const [k, v] of Object.entries(n)) {
          if (v === bottomId && k !== selectedId) delete n[k];
        }
        n[selectedId] = bottomId;
        return n;
      });
      playConnectSound();
      setSelectedId(null);
      setCursor(null);
      setHoveredBottomId(null);
    } else if (topId && topId !== selectedId) {
      // Switch selection to another top card
      setConnections(prev => { const n = { ...prev }; delete n[topId]; return n; });
      setSelectedId(topId);
      setCursor(null); // reset cursor until mouse moves again
      mouseDownPos.current = { x: e.clientX, y: e.clientY };
    } else if (wasDrag) {
      // Drag missed a target → cancel
      setSelectedId(null);
      setCursor(null);
      setHoveredBottomId(null);
    }
    // else: click that missed → keep selection (user will click bottom card next)
  };

  const handleBottomMouseDown = (e: React.MouseEvent, id: string) => {
    if (checked) return;
    e.preventDefault();

    // Remove any existing connection pointing TO this bottom card
    setConnections(prev => {
      const n = { ...prev };
      for (const [k, v] of Object.entries(n)) {
        if (v === id) delete n[k];
      }
      return n;
    });

    setSelectedBottomId(id);
    setCursor(null); // reset: don't draw line until mouse moves
    setHoveredTopId(null);
    mouseDownPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleBottomOverlayMove = (e: React.MouseEvent) => {
    setCursor({ x: e.clientX, y: e.clientY });
    setHoveredTopId(findTopAt(e.clientX, e.clientY));
  };

  const handleBottomOverlayUp = (e: React.MouseEvent) => {
    if (!selectedBottomId) return;

    const topId    = findTopAt(e.clientX, e.clientY);
    const dx = e.clientX - mouseDownPos.current.x;
    const dy = e.clientY - mouseDownPos.current.y;
    const wasDrag = Math.sqrt(dx * dx + dy * dy) > 8;

    if (topId) {
      setConnections(prev => {
        const n = { ...prev };
        delete n[topId];
        n[topId] = selectedBottomId;
        return n;
      });
      playConnectSound();
      setSelectedBottomId(null);
      setCursor(null);
      setHoveredTopId(null);
    } else if (wasDrag) {
      setSelectedBottomId(null);
      setCursor(null);
      setHoveredTopId(null);
    }
  };

  // ── Check answers (on Continue press) ────────────────────────────────────

  const handleCheck = () => {
    setChecked(true);
    setSelectedId(null);
    const correct = pairs.every((p) => connections[p.id] === p.id);
    playCheckSound(correct);
    onAnswer(correct);
  };

  // ── SVG lines ──────────────────────────────────────────────────────────────

  const renderLines = () => {
    const lines: JSX.Element[] = [];

    // Established connections — from top dot to bottom dot
    for (const [fromId, toId] of Object.entries(connections)) {
      const topDotEl    = topDotRefs.current[fromId];
      const bottomDotEl = bottomDotRefs.current[toId];
      if (!topDotEl || !bottomDotEl) continue;

      const from = elCenter(topDotEl);
      const to   = elCenter(bottomDotEl);
      const cp1y = from.y + (to.y - from.y) * 0.4;
      const cp2y = to.y   - (to.y - from.y) * 0.4;

      let color = "#798589";
      if (checked) {
        color = fromId === toId ? "#00d043" : "#ff4040";
      }

      lines.push(
        <path
          key={fromId}
          d={`M ${from.x} ${from.y} C ${from.x} ${cp1y}, ${to.x} ${cp2y}, ${to.x} ${to.y}`}
          stroke={color}
          strokeWidth="2.5"
          strokeDasharray="8 5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
          style={{ transition: "stroke 0.35s" }}
        />
      );
    }

    // Active line — only draw if cursor is known (not null = user has moved mouse)
    if (selectedId && cursor) {
      const topDotEl = topDotRefs.current[selectedId];
      if (topDotEl) {
        const from = elCenter(topDotEl);
        const rel  = toRel(cursor.x, cursor.y);
        const cp1y = from.y + (rel.y - from.y) * 0.4;
        const cp2y = rel.y   - (rel.y - from.y) * 0.4;
        lines.push(
          <path
            key="__active__"
            d={`M ${from.x} ${from.y} C ${from.x} ${cp1y}, ${rel.x} ${cp2y}, ${rel.x} ${rel.y}`}
            stroke={hoveredBottomId ? "#9aa5aa" : "#798589"}
            strokeWidth="2.5"
            strokeDasharray="7 5"
            strokeLinecap="round"
            fill="none"
            opacity="0.75"
          />
        );
      }
    }

    // Active line from bottom — only if cursor known
    if (selectedBottomId && cursor) {
      const bottomDotEl = bottomDotRefs.current[selectedBottomId];
      if (bottomDotEl) {
        const from = elCenter(bottomDotEl);
        const rel  = toRel(cursor.x, cursor.y);
        const cp1y = from.y + (rel.y - from.y) * 0.4;
        const cp2y = rel.y   - (rel.y - from.y) * 0.4;
        lines.push(
          <path
            key="__active__"
            d={`M ${from.x} ${from.y} C ${from.x} ${cp1y}, ${rel.x} ${cp2y}, ${rel.x} ${rel.y}`}
            stroke={hoveredTopId ? "#9aa5aa" : "#798589"}
            strokeWidth="2.5"
            strokeDasharray="7 5"
            strokeLinecap="round"
            fill="none"
            opacity="0.75"
          />
        );
      }
    }

    return lines;
  };

  // ── Card & dot visual helpers ──────────────────────────────────────────────

  /** Color of a top card's connector dot */
  const topDotStyle = (id: string) => {
    if (!checked) {
      if (id === selectedId) return { bg: "#9aa5aa", border: "#798589" };
      if (id === hoveredTopId && selectedBottomId) return { bg: "#9aa5aa", border: "#798589" };
      if (connections[id])   return { bg: "#9aa5aa", border: "#798589" };
      return { bg: "#798589", border: "#5a6368" };
    }
    // after check
    return connections[id] === id
      ? { bg: "#00d043", border: "#00a030" }
      : connections[id]
        ? { bg: "#ff4040", border: "#cc2020" }
        : { bg: "#798589", border: "#5a6368" };
  };

  /** Ring color of a top card border */
  const topCardRing = (id: string): string | null => {
    if (id === selectedId) return "rgba(150,158,165,0.7)";
    if (id === hoveredTopId && selectedBottomId) return "rgba(150,158,165,0.7)";
    if (checked) {
      if (connections[id] === id) return "rgba(0, 147, 47, 0.6)";
      if (connections[id])        return "#9f3500";
    }
    return null;
  };

  /** Color of a bottom card's connector dot */
  const bottomDotStyle = (id: string) => {
    const fromId = Object.entries(connections).find(([, v]) => v === id)?.[0];
    if (id === selectedBottomId) return { bg: "#9aa5aa", border: "#798589" };
    if (hoveredBottomId === id && selectedId) return { bg: "#9aa5aa", border: "#798589" };
    if (!fromId) return { bg: "#798589", border: "#5a6368" };
    if (!checked) return { bg: "#9aa5aa", border: "#798589" };
    return fromId === id
      ? { bg: "#00d043", border: "#00a030" }
      : { bg: "#ff4040", border: "#cc2020" };
  };

  /** Ring color of a bottom card border */
  const bottomCardRing = (id: string): string | null => {
    if (id === selectedBottomId) return "rgba(150,158,165,0.7)";
    if (hoveredBottomId === id && selectedId) return "rgba(150,158,165,0.7)";
    const fromId = Object.entries(connections).find(([, v]) => v === id)?.[0];
    if (!fromId || !checked) return null;
    return fromId === id ? "rgba(0, 147, 47, 0.6)" : "#9f3500";
  };

  const topCardBg = "linear-gradient(146.493deg, rgb(44,53,56) 2.42%, rgb(56,67,72) 98.53%, rgb(44,53,56) 116.25%)";
  const bottomCardBg = "linear-gradient(172.482deg, rgb(44,53,56) 2.42%, rgb(56,67,72) 98.53%, rgb(44,53,56) 116.25%)";

  // ── Render ────────────────────────────────────────────────────────────────

  // ── Mobile render — vertical tap-to-connect ────────────────────────────────
  if (isMobile) {
    const topCardW = Math.floor((vw - 48) / pairs.length) - 8;
    const topCardH = Math.max(72, Math.min(110, topCardW));

    return (
      <>
        {/* Question */}
        <div className="w-full px-[16px] flex justify-center">
          <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[1.25] text-[#f4f5fc] text-[22px] text-center" style={{ userSelect: "none" }}>
            {question}
          </p>
        </div>

        {/* Matching container */}
        <div
          ref={containerRef}
          className="relative w-full px-[16px]"
          style={{ userSelect: "none", minHeight: 340, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 10 }}
        >
          {/* SVG lines */}
          <svg
            className="absolute inset-0 pointer-events-none"
            style={{ width: "100%", height: "100%", overflow: "visible", zIndex: 5, left: 0, top: 0 }}
          >
            {renderLines()}
          </svg>

          {/* TOP ROW */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, paddingTop: 8, position: "relative", zIndex: 10 }}>
            {pairs.map((pair) => {
              const ring = topCardRing(pair.id);
              const dot = topDotStyle(pair.id);
              const isSelected = pair.id === selectedId;
              const hasNode = !!pair.node;
              const nodeScale = topCardW / 260;
              const nodeCardH = Math.round(180 * nodeScale);
              return (
                <div key={pair.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    ref={(el) => { topCardRefs.current[pair.id] = el; }}
                    onClick={() => {
                      if (checked) return;
                      if (selectedBottomId) {
                        setConnections(prev => {
                          const n = { ...prev };
                          delete n[pair.id];
                          for (const [k, v] of Object.entries(n)) { if (v === selectedBottomId) delete n[k]; }
                          n[pair.id] = selectedBottomId;
                          return n;
                        });
                        playConnectSound();
                        setSelectedBottomId(null);
                      } else if (selectedId === pair.id) {
                        setSelectedId(null);
                      } else {
                        setConnections(prev => { const n = { ...prev }; delete n[pair.id]; return n; });
                        setSelectedId(pair.id);
                      }
                    }}
                    style={{
                      width: topCardW,
                      height: hasNode ? nodeCardH : topCardH,
                      borderRadius: 15,
                      backgroundImage: topCardBg,
                      overflow: "hidden",
                      boxShadow: ring ? `0 0 0 3px ${ring}` : undefined,
                      cursor: checked ? "default" : "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, position: "relative", transition: "box-shadow 0.2s",
                      transform: isSelected ? "translateY(-3px)" : "translateY(0)",
                    }}
                  >
                    {hasNode ? (
                      <div style={{ position: "absolute", top: 0, left: 0, transformOrigin: "top left", transform: `scale(${nodeScale})`, pointerEvents: "none" }}>
                        {pair.node}
                      </div>
                    ) : (
                      <p style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 400, color: "#f4f5fc", fontSize: 14, textAlign: "center", lineHeight: 1.3, padding: "0 8px", pointerEvents: "none", wordBreak: "break-word", overflowWrap: "break-word" }}>
                        {pair.term}
                      </p>
                    )}
                    <div
                      ref={(el) => { topDotRefs.current[pair.id] = el; }}
                      style={{ position: "absolute", bottom: 0, left: "50%", transform: "translate(-50%, 50%)", width: 12, height: 12, borderRadius: "50%", background: dot.bg, border: `2px solid ${dot.border}`, zIndex: 2 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM ROW */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, paddingBottom: 8, position: "relative", zIndex: 10 }}>
            {shuffledPairs.map((pair) => {
              const ring = bottomCardRing(pair.id);
              const dot = bottomDotStyle(pair.id);
              return (
                <div key={pair.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    ref={(el) => { bottomCardRefs.current[pair.id] = el; }}
                    onClick={() => {
                      if (checked) return;
                      if (selectedId) {
                        // Complete: top → bottom connection
                        setConnections(prev => {
                          const n = { ...prev };
                          for (const [k, v] of Object.entries(n)) { if (v === pair.id && k !== selectedId) delete n[k]; }
                          n[selectedId] = pair.id;
                          return n;
                        });
                        playConnectSound();
                        setSelectedId(null);
                      } else if (selectedBottomId === pair.id) {
                        // Deselect
                        setSelectedBottomId(null);
                      } else {
                        // Select this bottom card — clear connections TO it first
                        setConnections(prev => {
                          const n = { ...prev };
                          for (const [k, v] of Object.entries(n)) { if (v === pair.id) delete n[k]; }
                          return n;
                        });
                        setSelectedBottomId(pair.id);
                      }
                    }}
                    style={{
                      width: topCardW,
                      minHeight: 56,
                      borderRadius: 15,
                      backgroundImage: bottomCardBg,
                      boxShadow: ring ? `0 0 0 3px ${ring}` : undefined,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, position: "relative", transition: "box-shadow 0.2s",
                      cursor: "pointer", paddingTop: 10, paddingBottom: 10,
                    }}
                  >
                    <div ref={(el) => { bottomDotRefs.current[pair.id] = el; }} style={{ position: "absolute", top: 0, left: "50%", transform: "translate(-50%, -50%)", width: 12, height: 12, borderRadius: "50%", background: dot.bg, border: `2px solid ${dot.border}`, zIndex: 2 }} />
                    <p style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 400, color: "#f4f5fc", fontSize: 14, textAlign: "center", lineHeight: 1.3, padding: "0 6px", pointerEvents: "none", wordBreak: "break-word", hyphens: "auto", overflowWrap: "break-word" }}>
                      {pair.translation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hint */}
        {!checked && (
          <p className="text-center text-[#798589] text-[13px] font-['Roboto_Condensed:Regular',sans-serif] px-4">
            Нажми или перетащи карточки, чтобы соединить
          </p>
        )}

        {/* Fixed bottom bar */}
        <div
          className="fixed left-0 right-0 z-10 px-[16px] pt-[12px]"
          style={{ bottom: "max(40px, env(safe-area-inset-bottom, 40px))", paddingBottom: 12 }}
        >
          {checked && (
            <div className="mb-[10px]">
              {allCorrect ? (
                <CorrectFeedback explanation={explanation} showXp={earnedXP > 0} />
              ) : (
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4, flexShrink: 0 }}>
                    <p style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 700, color: "#ffbaaa", fontSize: 16, lineHeight: 1.2, whiteSpace: "nowrap" }}>Попробуй ещё</p>
                  </div>
                  <p style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 400, color: "#f4f5fc", fontSize: 14, lineHeight: 1.2, flex: 1, minWidth: 0 }}>
                    {explanation}
                  </p>
                </div>
              )}
            </div>
          )}
          <div className="flex items-center gap-[20px]">
            <FlagReportButton />
            <div className="flex-1">
              {!allConnected && !checked && <ContinueDisabled fullWidth />}
              {allConnected && !checked && <ContinueActive onClick={handleCheck} fullWidth />}
              {checked && allCorrect && <ContinueCorrect onClick={onContinue} fullWidth />}
              {checked && !allCorrect && <ContinueActive onClick={onContinue} fullWidth />}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Glass-pane overlay: captures all mouse events while a top card is selected */}
      {selectedId && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 9999, cursor: "crosshair" }}
          onMouseMove={handleOverlayMove}
          onMouseUp={handleOverlayUp}
        />
      )}

      {/* Glass-pane overlay: captures all mouse events while a bottom card is selected */}
      {selectedBottomId && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 9999, cursor: "crosshair" }}
          onMouseMove={handleBottomOverlayMove}
          onMouseUp={handleBottomOverlayUp}
        />
      )}

      {/* Question */}
      <div className="flex justify-center" style={{ width: quizW }}>
        <p
          className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[35px] text-[#f4f5fc] text-[32px] text-center"
          style={{ userSelect: "none" }}
        >
          {question}
        </p>
      </div>

      {/* Matching container */}
      <div
        ref={containerRef}
        className="relative"
        style={{
          width: quizW,
          minHeight: 500,
          userSelect: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* SVG lines — pointer-events-none so cards stay interactive */}
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ width: "100%", height: "100%", overflow: "visible", zIndex: 5 }}
        >
          {renderLines()}
        </svg>

        {/* ── TOP ROW ─────────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            paddingTop: 10,
            position: "relative",
            zIndex: 10,
          }}
        >
          {pairs.map((pair) => {
            const ring = topCardRing(pair.id);
            const dot  = topDotStyle(pair.id);
            const isSelected = pair.id === selectedId;
            const hasNode = !!pair.node;
            const desktopNodeW = 260;
            const desktopNodeH = 180;
            return (
              <div
                key={pair.id}
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                {/* Card with dot on bottom border */}
                <div
                  ref={(el) => { topCardRefs.current[pair.id] = el; }}
                  onMouseDown={(e) => handleTopMouseDown(e, pair.id)}
                  style={{
                    width: hasNode ? desktopNodeW : 300,
                    height: hasNode ? desktopNodeH : undefined,
                    minHeight: hasNode ? undefined : 90,
                    borderRadius: 15,
                    backgroundImage: topCardBg,
                    overflow: "hidden",
                    boxShadow: ring
                      ? `0 0 0 3px ${ring}, inset -4px 0px 4px 0px #384348, inset 4px 0px 4px 0px #384348, inset 0px -4px 4px 0px rgba(0,0,0,0.2), inset 0px 4px 4px 0px rgba(0,0,0,0.2)`
                      : "inset -4px 0px 4px 0px #384348, inset 4px 0px 4px 0px #384348, inset 0px -4px 4px 0px rgba(0,0,0,0.2), inset 0px 4px 4px 0px rgba(0,0,0,0.2)",
                    cursor: checked ? "default" : isSelected ? "crosshair" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    position: "relative",
                    transition: "box-shadow 0.2s",
                    transform: isSelected ? "translateY(-2px)" : "translateY(0)",
                  }}
                >
                  {hasNode ? (
                    <div style={{ pointerEvents: "none" }}>{pair.node}</div>
                  ) : (
                    <p
                      style={{
                        fontFamily: "'Roboto Condensed', sans-serif",
                        fontWeight: 400,
                        color: "#f4f5fc",
                        fontSize: 18,
                        textAlign: "center",
                        lineHeight: 1.3,
                        padding: "12px 20px",
                        pointerEvents: "none",
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {pair.term}
                    </p>
                  )}
                  {/* Connector dot — centered on bottom border */}
                  <div
                    ref={(el) => { topDotRefs.current[pair.id] = el; }}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translate(-50%, 50%)",
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: dot.bg,
                      border: `2px solid ${dot.border}`,
                      transition: "background 0.15s",
                      zIndex: 2,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM ROW ──────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            paddingBottom: 10,
            position: "relative",
            zIndex: 10,
          }}
        >
          {shuffledPairs.map((pair) => {
            const ring = bottomCardRing(pair.id);
            const dot  = bottomDotStyle(pair.id);
            const isHovered = hoveredBottomId === pair.id && !!selectedId;

            return (
              <div
                key={pair.id}
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                {/* Card with dot on top border */}
                <div
                  ref={(el) => { bottomCardRefs.current[pair.id] = el; }}
                  onMouseDown={(e) => handleBottomMouseDown(e, pair.id)}
                  style={{
                    width: 290,
                    height: 72,
                    borderRadius: 15,
                    backgroundImage: bottomCardBg,
                    boxShadow: ring
                      ? `0 0 0 3px ${ring}, inset -4px 0px 4px 0px #384348`
                      : "inset -4px 0px 4px 0px #384348",
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                    position: "relative",
                    transition: "box-shadow 0.2s, transform 0.12s",
                    transform: isHovered ? "scale(1.04)" : "scale(1)",
                    cursor: "default",
                  }}
                >
                  {/* Connector dot — centered on top border */}
                  <div
                    ref={(el) => { bottomDotRefs.current[pair.id] = el; }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: dot.bg,
                      border: `2px solid ${dot.border}`,
                      transition: "background 0.15s",
                      zIndex: 2,
                    }}
                  />

                  <div style={{ display: "flex", alignItems: "center", justifyContent: pair.iconType ? "space-between" : "center", width: "100%", padding: "0 20px" }}>
                    {pair.iconType ? (
                      <>
                        <p style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 400, color: "#f4f5fc", fontSize: 17, whiteSpace: "nowrap", pointerEvents: "none" }}>
                          {pair.term}
                        </p>
                        <p style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 500, color: "#798589", fontSize: 16, whiteSpace: "nowrap", pointerEvents: "none" }}>
                          {pair.translation}
                        </p>
                      </>
                    ) : (
                      <p style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 400, color: "#f4f5fc", fontSize: 16, textAlign: "center", lineHeight: 1.3, pointerEvents: "none" }}>
                        {pair.translation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Fixed bottom bar ──────────────────────────────────────────────── */}
      <div className="fixed bottom-[20px] left-0 right-0 flex justify-center" style={{ zIndex: 20 }}>
        <div className="flex gap-[32px] items-center mb-[20px]" style={{ width: quizW }}>
          {/* Left: feedback */}
          <div className="flex-1 flex items-center">
            {checked && allCorrect && (
              <CorrectFeedback explanation={explanation} showXp={earnedXP > 0} />
            )}
            {checked && !allCorrect && (
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontSize: 28, lineHeight: 1 }}>✊</span>
                <p style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 400, color: "#f4f5fc", fontSize: 18, lineHeight: 1.3 }}>
                  <span style={{ color: "#ffbaaa", fontWeight: 700 }}>Попробуй ещё раз. </span>
                  {explanation}
                </p>
              </div>
            )}
          </div>

          {/* Right: button */}
          <div className="flex-none flex items-center justify-end gap-[20px]">
            <FlagReportButton />
            {!allConnected && !checked && <ContinueDisabled />}
            {allConnected && !checked && <ContinueActive onClick={handleCheck} />}
            {checked && <ContinueCorrect onClick={onContinue} />}
          </div>
        </div>
      </div>
    </>
  );
}