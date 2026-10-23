import { useEffect } from "react";
import { Navigate } from "react-router";
import { useAuthSafe } from "../context/AuthContext";
import { useUserSafe } from "../context/UserContext";

function HomeRedirect() {
  const auth = useAuthSafe();
  const userCtx = useUserSafe();
  const isLoading = auth?.loading || userCtx?.userLoading;

  useEffect(() => {
    if (!isLoading) {
      window.dispatchEvent(new CustomEvent("app-ready"));
    }
  }, [isLoading]);

  if (isLoading) return <div role="status" className="min-h-screen flex items-center justify-center text-[#9aa8ad] text-[18px]">Загружаем ваш прогресс…</div>;
  if (!auth?.isAuthenticated) return <Navigate to="/welcome" replace />;
  if (!userCtx?.level) return <Navigate to="/level" replace />;
  return <Navigate to="/lessons" replace />;
}

export default function AppHomeRoute() {
  return (
    <HomeRedirect />
  );
}
