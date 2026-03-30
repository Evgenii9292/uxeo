import { useState, useEffect, useRef } from "react";

const STORAGE_KEY = "pwa-banner-dismissed";

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as any).MSStream;
}

function isInStandaloneMode() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (navigator as any).standalone === true
  );
}

export function PWAInstallBanner({ tabBarBottom: _tabBarBottom }: { tabBarBottom: string }) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showIOSHint, setShowIOSHint] = useState(false);
  const deferredPromptRef = useRef<any>(null);

  useEffect(() => {
    // Don't show if already installed or dismissed
    if (isInStandaloneMode()) return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const ios = isIOS();

    if (ios) {
      // iOS: show after 4s delay
      const t = setTimeout(() => {
        setMounted(true);
        requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      }, 4000);
      return () => clearTimeout(t);
    } else {
      // Android/Chrome: wait for beforeinstallprompt
      const handler = (e: Event) => {
        e.preventDefault();
        deferredPromptRef.current = e;
        setMounted(true);
        requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      };
      window.addEventListener("beforeinstallprompt", handler);
      return () => window.removeEventListener("beforeinstallprompt", handler);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
    setTimeout(() => setMounted(false), 400);
  };

  const install = async () => {
    if (isIOS()) {
      setShowIOSHint(true);
      return;
    }
    if (deferredPromptRef.current) {
      deferredPromptRef.current.prompt();
      const { outcome } = await deferredPromptRef.current.userChoice;
      deferredPromptRef.current = null;
      if (outcome === "accepted") {
        dismiss();
      }
    }
  };

  if (!mounted) return null;

  return (
    <div
      className="fixed left-0 right-0 z-[25] px-[12px]"
      style={{
        top: "calc(env(safe-area-inset-top, 0px) + 60px)",
      }}
    >
      <div
        style={{
          background: "#2C3538",
          borderRadius: 18,
          boxShadow: "0 -2px 24px rgba(0,0,0,0.45)",
          border: "1px solid rgba(255,255,255,0.07)",
          transform: visible ? "translateY(0)" : "translateY(calc(-100% - 20px))",
          opacity: visible ? 1 : 0,
          transition: "transform 0.38s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.38s ease",
          willChange: "transform, opacity",
        }}
      >
        {showIOSHint ? (
          /* iOS instructions */
          <div className="flex flex-col gap-[12px] p-[16px]">
            <div className="flex items-center justify-between">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[16px] leading-[1.2]">
                Как установить
              </p>
              <button onClick={dismiss} className="flex items-center justify-center w-[28px] h-[28px] rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 1L9 9M9 1L1 9" stroke="#798589" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-[8px]">
              {[
                { n: 1, text: "Нажми иконку «Поделиться» " },
                { n: 2, text: "Выбери «На экран Домой»" },
                { n: 3, text: "Нажми «Добавить» — готово!" },
              ].map(({ n, text }) => (
                <div key={n} className="flex items-center gap-[10px]">
                  <div className="shrink-0 w-[22px] h-[22px] rounded-full bg-[#ff6b21] flex items-center justify-center">
                    <span className="font-['Roboto_Condensed:Medium',sans-serif] text-white text-[12px] font-medium">{n}</span>
                  </div>
                  <span className="font-['Roboto_Condensed:Regular',sans-serif] text-[#f1f2fb] text-[14px] leading-[1.3]">{text}
                    {n === 1 && (
                      <svg style={{ display: "inline", verticalAlign: "middle", marginLeft: 4 }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" stroke="#ff6b21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Main banner */
          <div className="flex items-center gap-[12px] px-[14px] py-[13px]">
            {/* App icon */}
            <div className="shrink-0 w-[44px] h-[44px] rounded-[12px] overflow-hidden bg-[#343e42] flex items-center justify-center">
              <img src="/app-icon.svg" alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-[2px] flex-1 min-w-0">
              <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-[#f4f5fc] text-[15px] leading-[1.2] whitespace-nowrap overflow-hidden" style={{ textOverflow: "ellipsis" }}>
                Добавь на главный экран
              </p>
              <p className="font-['Roboto_Condensed:Regular',sans-serif] text-[#798589] text-[12px] leading-[1.3]">
                Без браузера — быстрее и удобнее
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-[8px] shrink-0">
              <button
                onClick={install}
                className="flex items-center justify-center h-[34px] px-[14px] rounded-[10px] bg-[#ff6b21] active:opacity-80 transition-opacity"
              >
                <span className="font-['Roboto_Condensed:Medium',sans-serif] font-medium text-white text-[14px] whitespace-nowrap">
                  Установить
                </span>
              </button>
              <button
                onClick={dismiss}
                className="flex items-center justify-center w-[30px] h-[30px] rounded-full active:opacity-70 transition-opacity"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 1L9 9M9 1L1 9" stroke="#798589" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
