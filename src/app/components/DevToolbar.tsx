import { useState, useEffect } from "react";
import { Monitor, Tablet, Smartphone, ChevronDown, ChevronUp } from "lucide-react";
import { setDevPreviewWidth } from "../hooks/useWindowWidth";

const STORAGE_KEY = "__dev_preview_width__";

const PRESETS = [
  { label: "Mobile", icon: Smartphone, width: 390, color: "#4ade80" },
  { label: "Tablet", icon: Tablet,     width: 834, color: "#60a5fa" },
  { label: "Desktop", icon: Monitor,  width: null,  color: "#f4f5fc" },
] as const;

function getStoredWidth(): number | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v ? parseInt(v, 10) : null;
  } catch {
    return null;
  }
}

function getStoredCollapsed(): boolean {
  try {
    return localStorage.getItem("__dev_toolbar_collapsed__") === "1";
  } catch {
    return false;
  }
}

export default function DevToolbar() {
  const [active, setActive] = useState<number | null>(() => getStoredWidth());
  const [collapsed, setCollapsed] = useState<boolean>(() => getStoredCollapsed());

  const handlePreset = (width: number | null) => {
    setActive(width);
    setDevPreviewWidth(width);
  };

  const toggleCollapsed = () => {
    const next = !collapsed;
    setCollapsed(next);
    try { localStorage.setItem("__dev_toolbar_collapsed__", next ? "1" : "0"); } catch {}
  };

  // Sync if another tab/component changed it
  useEffect(() => {
    const onDevChange = (e: Event) => {
      const val = (e as CustomEvent<number | null>).detail;
      setActive(val);
    };
    window.addEventListener("__dev_preview_change__", onDevChange);
    return () => window.removeEventListener("__dev_preview_change__", onDevChange);
  }, []);

  const activePreset = PRESETS.find(p => p.width === active);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 8,
        right: 8,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: 4,
        background: "#1a2024cc",
        backdropFilter: "blur(8px)",
        border: "1px solid #3a4449",
        borderRadius: 10,
        padding: collapsed ? "4px 6px" : "5px 8px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
        userSelect: "none",
        transition: "padding 0.15s",
      }}
    >
      {collapsed ? (
        /* Collapsed: show active indicator + expand button */
        <button
          onClick={toggleCollapsed}
          title="Развернуть DevToolbar"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "2px 4px",
            borderRadius: 6,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: activePreset?.color ?? "#8a9ba3",
          }}
        >
          {activePreset
            ? <activePreset.icon size={13} />
            : <Monitor size={13} />
          }
          <span style={{ fontSize: 10, fontFamily: "monospace", color: "#8a9ba3" }}>
            {activePreset ? activePreset.label : "Dev"}
          </span>
          <ChevronDown size={11} color="#8a9ba3" />
        </button>
      ) : (
        /* Expanded: full toolbar */
        <>
          <span
            style={{
              fontSize: 9,
              fontFamily: "monospace",
              color: "#8a9ba3",
              letterSpacing: "0.05em",
              marginRight: 2,
              textTransform: "uppercase",
            }}
          >
            Preview
          </span>

          {PRESETS.map((p) => {
            const Icon = p.icon;
            const isActive = active === p.width;
            return (
              <button
                key={p.label}
                onClick={() => handlePreset(p.width)}
                title={p.width ? `${p.label} (${p.width}px)` : `${p.label} (реальный размер)`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  padding: "3px 6px",
                  borderRadius: 7,
                  border: "none",
                  cursor: "pointer",
                  background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                  color: isActive ? p.color : "#8a9ba3",
                  fontSize: 11,
                  fontFamily: "sans-serif",
                  fontWeight: isActive ? 600 : 400,
                  transition: "all 0.15s",
                  outline: isActive ? `1px solid ${p.color}40` : "none",
                }}
              >
                <Icon size={12} />
                <span>{p.label}</span>
                {p.width && (
                  <span style={{ fontSize: 9, opacity: 0.6 }}>{p.width}</span>
                )}
              </button>
            );
          })}

          {/* Collapse button */}
          <button
            onClick={toggleCollapsed}
            title="Свернуть"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 20,
              height: 20,
              borderRadius: 5,
              border: "none",
              background: "rgba(255,255,255,0.05)",
              color: "#8a9ba3",
              cursor: "pointer",
              marginLeft: 2,
            }}
          >
            <ChevronUp size={11} />
          </button>
        </>
      )}
    </div>
  );
}