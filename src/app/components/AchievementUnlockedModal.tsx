/**
 * AchievementUnlockedModal — full-screen celebration overlay.
 * Shown the moment a new achievement is earned.
 */

import { useEffect, useState } from "react";
import { ACHIEVEMENTS, AchievementId } from "../context/AchievementsContext";

// ─── Confetti particle ────────────────────────────────────────────────────────

const CONFETTI_COLORS = [
  "#FF6B21", "#FFB121", "#5EDD60", "#5B9BD5",
  "#A855F7", "#FF4488", "#FFD700", "#06B6D4",
];

interface ParticleProps {
  x: number;
  y: number;
  color: string;
  delay: number;
  size: number;
  rotation: number;
  isRect: boolean;
}

function Particle({ x, y, color, delay, size, rotation, isRect }: ParticleProps) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: isRect ? size * 0.6 : size,
        height: size,
        borderRadius: isRect ? 2 : "50%",
        background: color,
        animationDelay: `${delay}ms`,
        animation: "confettiFall 2.8s ease-in forwards",
        opacity: 0,
        transform: `rotate(${rotation}deg)`,
        willChange: "transform, opacity",
      }}
    />
  );
}

// ─── Stars ring (decorative) ──────────────────────────────────────────────────

function StarsRing({ color }: { color: string }) {
  const stars = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * 360;
    const rad = (angle * Math.PI) / 180;
    const r = 84;
    const x = 50 + r * Math.cos(rad);
    const y = 50 + r * Math.sin(rad);
    return { x, y, angle };
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        animation: "spinSlow 8s linear infinite",
        willChange: "transform",
      }}
    >
      {stars.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            transform: "translate(-50%, -50%)",
            fontSize: i % 2 === 0 ? 14 : 10,
            opacity: 0.4,
            color,
          }}
        >
          ✦
        </div>
      ))}
    </div>
  );
}

// ─── Main modal ───────────────────────────────────────────────────────────────

interface Props {
  achievementId: AchievementId;
  onDismiss: () => void;
}

export function AchievementUnlockedModal({ achievementId, onDismiss }: Props) {
  const achievement = ACHIEVEMENTS[achievementId];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Tiny delay so CSS transition has a starting state
    const t = requestAnimationFrame(() => setVisible(true));

    // Victory jingle: ascending 4-note fanfare
    const audioCtx = new AudioContext();
    const isMobile = window.innerWidth < 768;
    const vol = isMobile ? 0.07 : 0.14;
    const notes = [523, 659, 784, 1047]; // C5 E5 G5 C6
    const dur = 0.18;
    const gap = 0.13;
    audioCtx.resume().then(() => {
      const now = audioCtx.currentTime + 0.05;
      notes.forEach((freq, i) => {
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(freq, now + i * gap);
        g.gain.setValueAtTime(0, now + i * gap);
        g.gain.linearRampToValueAtTime(vol, now + i * gap + 0.03);
        g.gain.exponentialRampToValueAtTime(0.001, now + i * gap + dur);
        o.connect(g); g.connect(audioCtx.destination);
        o.start(now + i * gap);
        o.stop(now + i * gap + dur + 0.05);
      });
      setTimeout(() => audioCtx.close(), 1500);
    }).catch(() => {});

    return () => cancelAnimationFrame(t);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    setTimeout(onDismiss, 280);
  };

  // Deterministic confetti (seeded by achievementId)
  const seed = achievementId.split("").reduce((s, c) => s + c.charCodeAt(0), 0);
  const rng = (i: number) => ((seed * 9301 + i * 49297 + 233) % 1000) / 1000;

  const particles: ParticleProps[] = Array.from({ length: 36 }, (_, i) => ({
    x: rng(i * 7) * 100,
    y: -8 + rng(i * 11) * 25,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    delay: rng(i * 3) * 1200,
    size: 6 + rng(i * 5) * 9,
    rotation: rng(i * 13) * 360,
    isRect: i % 3 === 0,
  }));

  return (
    <>
      <style>{`
        @keyframes confettiFall {
          0%   { opacity: 1; transform: translateY(0)    rotate(0deg);   }
          100% { opacity: 0; transform: translateY(90vh) rotate(540deg); }
        }
        @keyframes popIn {
          0%   { transform: scale(0.45); opacity: 0; }
          65%  { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1);   opacity: 1; }
        }
        @keyframes pulseGlow {
          0%,100% { filter: drop-shadow(0 0 18px currentColor); }
          50%     { filter: drop-shadow(0 0 36px currentColor); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes floatUp {
          0%,100% { transform: translateY(0px);  }
          50%     { transform: translateY(-8px); }
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={handleDismiss}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          background: "rgba(0,0,0,0.88)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.28s ease",
          opacity: visible ? 1 : 0,
        }}
      >
        {/* Confetti layer */}
        <div
          style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}
        >
          {visible && particles.map((p, i) => <Particle key={i} {...p} />)}
        </div>

        {/* Card */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            padding: "44px 36px 36px",
            background: "linear-gradient(160deg, #2A3136 0%, #343E42 100%)",
            borderRadius: 28,
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
            maxWidth: 360,
            width: "88vw",
            transform: visible ? "scale(1) translateY(0)" : "scale(0.82) translateY(48px)",
            opacity: visible ? 1 : 0,
            transition:
              "transform 0.42s cubic-bezier(0.34,1.56,0.64,1), opacity 0.28s ease",
          }}
        >
          {/* "Новое достижение" badge */}
          <div
            style={{
              padding: "5px 14px",
              borderRadius: 99,
              background: `${achievement.color}22`,
              border: `1px solid ${achievement.color}44`,
            }}
          >
            <p
              style={{
                fontFamily: "Roboto Condensed, sans-serif",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: achievement.color,
              }}
            >
              Новое достижение
            </p>
          </div>

          {/* Emoji circle with decorative ring */}
          <div
            style={{
              position: "relative",
              width: 148,
              height: 148,
              flexShrink: 0,
              animation: "floatUp 3s ease-in-out 0.6s infinite",
            }}
          >
            {/* Stars ring */}
            <StarsRing color={achievement.color} />

            {/* Outer glow ring */}
            <div
              style={{
                position: "absolute",
                inset: 8,
                borderRadius: "50%",
                border: `2px solid ${achievement.color}40`,
                boxShadow: `0 0 24px 4px ${achievement.color}30`,
              }}
            />

            {/* Main circle */}
            <div
              style={{
                position: "absolute",
                inset: 16,
                borderRadius: "50%",
                background: `radial-gradient(circle at 35% 35%, ${achievement.color}55, ${achievement.colorEnd}22)`,
                border: `2px solid ${achievement.color}66`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 56,
                animation: "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
                boxShadow: `inset 0 2px 12px rgba(255,255,255,0.08), 0 8px 32px ${achievement.color}33`,
                color: achievement.color,
              }}
            >
              {achievement.emoji}
            </div>
          </div>

          {/* Title + desc */}
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 8 }}>
            <p
              style={{
                fontFamily: "Roboto Condensed, sans-serif",
                fontWeight: 800,
                fontSize: 32,
                color: "#F4F5FC",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              {achievement.title}
            </p>
            <p
              style={{
                fontFamily: "Roboto Condensed, sans-serif",
                fontWeight: 500,
                fontSize: 15,
                color: "#798589",
                lineHeight: 1.4,
              }}
            >
              {achievement.desc}
            </p>
          </div>

          {/* Continue button */}
          <button
            onClick={handleDismiss}
            style={{
              marginTop: 8,
              width: "100%",
              height: 52,
              borderRadius: 14,
              border: "none",
              background: `linear-gradient(135deg, ${achievement.color} 0%, ${achievement.colorEnd} 100%)`,
              color: "#fff",
              fontFamily: "Roboto Condensed, sans-serif",
              fontWeight: 700,
              fontSize: 17,
              cursor: "pointer",
              letterSpacing: "0.02em",
              transition: "opacity 0.15s",
              boxShadow: `0 4px 20px ${achievement.color}44`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Продолжить 🎉
          </button>
        </div>
      </div>
    </>
  );
}

// ─── Overlay bridge: reads from AchievementsContext, renders modal ─────────────

import { useAchievementsSafe } from "../context/AchievementsContext";

export function AchievementOverlay() {
  const ctx = useAchievementsSafe();
  if (!ctx || !ctx.pendingAchievement) return null;

  return (
    <AchievementUnlockedModal
      achievementId={ctx.pendingAchievement}
      onDismiss={ctx.dismissPending}
    />
  );
}
