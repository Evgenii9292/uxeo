import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

// Main application entry point
export default function App() {
  useEffect(() => {
    ["/fire-icon-active.png", "/fire-icon-inactive.png", "/zap-icon-active.png", "/zap-icon-inactive.png"].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return <RouterProvider router={router} />;
}
