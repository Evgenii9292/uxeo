import React from "react";
import { createBrowserRouter, Outlet, Navigate } from "react-router";
import CoursesPage from "./pages/CoursesPage";
import ModulesPage from "./pages/ModulesPage";
import LessonPage from "./pages/LessonPage";
import WelcomePage from "./pages/WelcomePage";
import QuizPage from "./pages/QuizPage";
import LessonQuizPage from "./pages/LessonQuizPage";
import TheoryPage from "./pages/TheoryPage";
import LevelSelectPage from "./pages/LevelSelectPage";
import ProfilePage from "./pages/ProfilePage";
import ChallengesPage from "./pages/ChallengesPage";
import ChallengeDetailPage from "./pages/ChallengeDetailPage";
import HomeworkPage from "./pages/HomeworkPage";
import NotificationsPage from "./pages/NotificationsPage";
import AdminHomeworksPage from "./pages/AdminHomeworksPage";
import AboutPage from "./pages/AboutPage";
import EmailCapturePage from "./pages/EmailCapturePage";
import LeaguePage from "./pages/LeaguePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import OnboardingGoalPage from "./pages/OnboardingGoalPage";
import OnboardingTimePage from "./pages/OnboardingTimePage";
import OnboardingNamePage from "./pages/OnboardingNamePage";
import { UserProvider, useUserSafe } from "./context/UserContext";
import { LessonProvider } from "./context/LessonContext";
import { HomeworkProvider } from "./context/HomeworkContext";
import { AuthProvider, useAuthSafe } from "./context/AuthContext";
import { AchievementsProvider } from "./context/AchievementsContext";
import { AchievementOverlay } from "./components/AchievementUnlockedModal";
import { useNotificationWatcher } from "./hooks/useNotificationWatcher";

// ── HomeRedirect: нет auth → /welcome, нет level → /level (онбординг), иначе → courses/lessons ──

function HomeRedirect() {
  const auth = useAuthSafe();
  const userCtx = useUserSafe();

  // Ждём загрузку auth и user data
  if (auth?.loading || userCtx?.userLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "linear-gradient(163.733deg, #282F33 14.367%, rgb(46, 57, 62) 147.74%)",
          color: "#f4f5fc",
          fontFamily: "Roboto Condensed, sans-serif",
          fontSize: "22px",
          padding: "24px",
        }}
      >
        Загружаем Skillum...
      </div>
    );
  }

  // Не авторизован → страница входа
  if (!auth?.isAuthenticated) {
    return <Navigate to="/welcome" replace />;
  }

  // Авторизован, но не прошёл онбординг → выбор уровня
  if (!userCtx?.level) {
    return <Navigate to="/level" replace />;
  }

  const hasProgress =
    userCtx !== null &&
    Object.keys(userCtx.user.lessonProgress).length > 0;

  return <Navigate to={hasProgress ? "/lessons" : "/courses"} replace />;
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

// Root component that provides UserContext to all routes
function Root() {
  return (
    <AuthProvider>
      <UserProvider>
        <AchievementsProvider>
          <LessonProvider>
            <HomeworkProvider>
              <NotificationWatcher />
              <Outlet />
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
