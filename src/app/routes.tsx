import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, Navigate } from "react-router";

// ── Eager: нужны сразу на первом экране ───────────────────────────────────────
import WelcomePage from "./pages/WelcomePage";

// ── Lazy: грузятся только при переходе на страницу ────────────────────────────
const AuthCallbackPage   = lazy(() => import("./pages/AuthCallbackPage"));
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

import { AuthProvider, useAuthSafe } from "./context/AuthContext";

const AppProviders = lazy(() => import("./components/AppProviders"));
const AppHomeRoute = lazy(() => import("./components/AppHomeRoute"));

// ── Заглушка во время загрузки страницы ───────────────────────────────────────
function PageLoader() {
  return <div style={{ height: "100%", background: "#282F33" }} />;
}

// ── RequireAuth: редирект на /welcome если не авторизован ─────────────────────
function RequireAuth({ children }: { children: React.ReactNode }) {
  const auth = useAuthSafe();
  if (auth?.loading && !auth?.isDemo) return null; // ждём загрузку
  if (!auth?.isAuthenticated) return <Navigate to="/welcome" replace />;
  return <>{children}</>;
}

function Root() {
  return (
    <AuthProvider>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
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
      minHeight: "100%",
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
      <AppProviders>
        <Outlet />
      </AppProviders>
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
        Component: AppHomeRoute,
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
      { path: "*", Component: AppHomeRoute },
    ],
  },
]);
