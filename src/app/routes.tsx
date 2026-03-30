import React, { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, Outlet, Navigate } from "react-router";

// ── Eager: нужны сразу на первом экране ───────────────────────────────────────
import WelcomePage from "./pages/WelcomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";

// ── Lazy: грузятся только при переходе на страницу ────────────────────────────
const CoursesPage        = lazy(() => import("./pages/CoursesPage"));
const ModulesPage        = lazy(() => import("./pages/ModulesPage"));
const LessonPage         = lazy(() => import("./pages/LessonPage"));
const QuizPage           = lazy(() => import("./pages/QuizPage"));
const LessonQuizPage     = lazy(() => import("./pages/LessonQuizPage"));
const TheoryPage         = lazy(() => import("./pages/TheoryPage"));
const LevelSelectPage    = lazy(() => import("./pages/LevelSelectPage"));
const ProfilePage        = lazy(() => import("./pages/ProfilePage"));
const ChallengesPage     = lazy(() => import("./pages/ChallengesPage"));
const ChallengeDetailPage = lazy(() => import("./pages/ChallengeDetailPage"));
const HomeworkPage       = lazy(() => import("./pages/HomeworkPage"));
const NotificationsPage  = lazy(() => import("./pages/NotificationsPage"));
const AdminHomeworksPage = lazy(() => import("./pages/AdminHomeworksPage"));
const AboutPage          = lazy(() => import("./pages/AboutPage"));
const EmailCapturePage   = lazy(() => import("./pages/EmailCapturePage"));
const LeaguePage         = lazy(() => import("./pages/LeaguePage"));
const OnboardingGoalPage = lazy(() => import("./pages/OnboardingGoalPage"));
const OnboardingTimePage = lazy(() => import("./pages/OnboardingTimePage"));
const OnboardingNamePage = lazy(() => import("./pages/OnboardingNamePage"));

import { UserProvider, useUserSafe } from "./context/UserContext";
import { LessonProvider } from "./context/LessonContext";
import { HomeworkProvider } from "./context/HomeworkContext";
import { AuthProvider, useAuthSafe } from "./context/AuthContext";
import { AchievementsProvider } from "./context/AchievementsContext";
import { AchievementOverlay } from "./components/AchievementUnlockedModal";
import { useNotificationWatcher } from "./hooks/useNotificationWatcher";
import { usePushPermission } from "./hooks/usePushPermission";
import { registerSW } from "./utils/pushSubscription";

// Register SW as early as possible (no permission needed)
registerSW();

// ── Заглушка во время загрузки страницы ───────────────────────────────────────
function PageLoader() {
  return <div style={{ height: "100%", background: "#282F33" }} />;
}

// ── HomeRedirect: нет auth → /welcome, нет level → /level (онбординг), иначе → /lessons ──

function HomeRedirect() {
  const auth = useAuthSafe();
  const userCtx = useUserSafe();

  const isLoading = auth?.loading || userCtx?.userLoading;

  // Signal splash to hide once loading is done
  useEffect(() => {
    if (!isLoading) {
      window.dispatchEvent(new CustomEvent("app-ready"));
    }
  }, [isLoading]);

  // While loading — render nothing (native splash covers everything)
  if (isLoading) return null;

  if (!auth?.isAuthenticated) return <Navigate to="/welcome" replace />;
  if (!userCtx?.level) return <Navigate to="/level" replace />;

  return <Navigate to="/lessons" replace />;
}

// ── RequireAuth: редирект на /welcome если не авторизован ─────────────────────
function RequireAuth({ children }: { children: React.ReactNode }) {
  const auth = useAuthSafe();
  if (auth?.loading) return null; // ждём загрузку
  if (!auth?.isAuthenticated) return <Navigate to="/welcome" replace />;
  return <>{children}</>;
}

// Inner watcher — must be inside all context providers
function NotificationWatcher() {
  useNotificationWatcher();
  return null;
}

// Push permission — delayed request after login
function PushInit() {
  usePushPermission();
  return null;
}

// Root component that provides UserContext to all routes
function Root() {
  return (
    <AuthProvider>
      <UserProvider>
        <AchievementsProvider>
          <LessonProvider>
            <HomeworkProvider>
              <NotificationWatcher />
              <PushInit />
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
              <AchievementOverlay />
            </HomeworkProvider>
          </LessonProvider>
        </AchievementsProvider>
      </UserProvider>
    </AuthProvider>
  );
}

// Simple error boundary component
function ErrorPage() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(163.733deg, #282F33 14.367%, rgb(46, 57, 62) 147.74%)",
      color: "#f4f5fc",
      fontFamily: "Roboto Condensed, sans-serif",
      fontSize: "24px",
      padding: "40px",
    }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Что-то пошло не так</h1>
        <p>Пожалуйста, перезагрузите страницу</p>
      </div>
    </div>
  );
}

// Layout-обёртка для защищённых маршрутов
function ProtectedLayout() {
  return (
    <RequireAuth>
      <Outlet />
    </RequireAuth>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: HomeRedirect,
      },
      // ── Публичные маршруты (без авторизации) ──────────────────────────────
      { path: "welcome",        Component: WelcomePage },
      { path: "auth/callback",  Component: AuthCallbackPage },
      // ── Онбординг (требует авторизации, но не level) ──────────────────────
      {
        Component: ProtectedLayout,
        children: [
          { path: "level",           Component: LevelSelectPage },
          { path: "onboarding-goal", Component: OnboardingGoalPage },
          { path: "onboarding-time", Component: OnboardingTimePage },
          { path: "onboarding-name", Component: OnboardingNamePage },
          { path: "quiz",            Component: QuizPage },
          { path: "email",           Component: EmailCapturePage },
        ],
      },
      // ── Основные страницы (требуют авторизации) ───────────────────────────
      {
        Component: ProtectedLayout,
        children: [
          { path: "courses",          Component: CoursesPage },
          { path: "modules",          Component: ModulesPage },
          { path: "lessons",          Component: LessonPage },
          { path: "lesson-quiz",      Component: LessonQuizPage },
          { path: "theory",           Component: TheoryPage },
          { path: "contrast",         Component: TheoryPage },
          { path: "profile",          Component: ProfilePage },
          { path: "challenges",       Component: ChallengesPage },
          { path: "challenge-detail", Component: ChallengeDetailPage },
          { path: "homework",         Component: HomeworkPage },
          { path: "notifications",    Component: NotificationsPage },
          { path: "admin-homeworks",  Component: AdminHomeworksPage },
          { path: "about",            Component: AboutPage },
          { path: "league",           Component: LeaguePage },
        ],
      },
      { path: "*", Component: HomeRedirect },
    ],
  },
]);
