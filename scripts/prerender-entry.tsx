import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AuthProvider } from "../src/app/context/AuthContext";
import WelcomePage from "../src/app/pages/WelcomePage";
import NotFoundPage from "../src/app/pages/NotFoundPage";

// Render the actual public UI. Effects/auth requests never run during this build step.
export function render(path: string) {
  return renderToString(
    <StaticRouter location={path}>
      <AuthProvider>
        {path === "/404" ? <NotFoundPage /> : <WelcomePage />}
      </AuthProvider>
    </StaticRouter>,
  );
}
