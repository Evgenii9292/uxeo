import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

// ── Portrait-only guard — shows overlay in landscape on mobile ─────────────────
function PortraitGuard() {
  const [isLandscape, setIsLandscape] = useState(
    () => typeof window !== "undefined" && window.innerWidth > window.innerHeight && window.innerWidth < 1024
  );

  useEffect(() => {
    const check = () => {
      setIsLandscape(window.innerWidth > window.innerHeight && window.innerWidth < 1024);
    };
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  if (!isLandscape) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        background: "#282F33",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="rgba(244,245,252,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 18h.01" stroke="rgba(244,245,252,0.4)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 7l4-4 4 4" stroke="#FF6B21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <p style={{ fontFamily: "sans-serif", fontSize: 17, color: "rgba(244,245,252,0.6)", textAlign: "center", lineHeight: 1.4, maxWidth: 240 }}>
        Поверните телефон вертикально
      </p>
    </div>
  );
}

// Main application entry point
export default function App() {
  useEffect(() => {
    ["/fire-icon-active.png", "/fire-icon-inactive.png", "/zap-icon-active.png", "/zap-icon-inactive.png"].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <PortraitGuard />
    </>
  );
}
