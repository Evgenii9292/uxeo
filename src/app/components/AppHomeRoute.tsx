import { useEffect } from "react";
import { Navigate } from "react-router";
import { useAuthSafe } from "../context/AuthContext";
import { useUserSafe } from "../context/UserContext";
import AppProviders from "./AppProviders";

function HomeRedirect() {
  const auth = useAuthSafe();
  const userCtx = useUserSafe();
  const isLoading = auth?.loading || userCtx?.userLoading;

  useEffect(() => {
    if (!isLoading) {
      window.dispatchEvent(new CustomEvent("app-ready"));
    }
  }, [isLoading]);

  if (isLoading) return null;
  if (!auth?.isAuthenticated) return <Navigate to="/welcome" replace />;
  if (!userCtx?.level) return <Navigate to="/level" replace />;
  return <Navigate to="/lessons" replace />;
}

export default function AppHomeRoute() {
  return (
    <AppProviders>
      <HomeRedirect />
    </AppProviders>
  );
}
