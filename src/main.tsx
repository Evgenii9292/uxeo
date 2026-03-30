
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(<App />);

  // Hide splash screen: wait for app-ready event + minimum 1.8s display time
  const splash = document.getElementById("splash");
  if (splash) {
    const MIN_MS = 1800;
    const splashStart = Date.now();
    let hidden = false;

    const hideSplash = () => {
      if (hidden) return;
      hidden = true;
      const elapsed = Date.now() - splashStart;
      const remaining = Math.max(0, MIN_MS - elapsed);
      setTimeout(() => {
        splash.classList.add("hidden");
        setTimeout(() => splash.remove(), 600);
      }, remaining);
    };

    window.addEventListener("app-ready", hideSplash, { once: true });
    // Fallback: hide after 5s if app-ready never fires
    setTimeout(hideSplash, 5000);
  }
