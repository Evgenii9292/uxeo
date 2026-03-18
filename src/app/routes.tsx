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
import { UserProvider, useUserSafe } from "./context/UserContext";
import { LessonProvider } from "./context/LessonContext";

// ── HomeRedirect: если уже есть прогресс → /lessons, иначе → /courses ──────────

function HomeRedirect() {
  const userCtx = useUserSafe();
  const hasProgress =
    userCtx !== null &&
    Object.keys(userCtx.user.lessonProgress).length > 0;

  return <Navigate to={hasProgress ? "/lessons" : "/courses"} replace />;
}

// Root component that provides UserContext to all routes
function Root() {
  return (
    <UserProvider>
      <LessonProvider>
        <Outlet />
      </LessonProvider>
    </UserProvider>
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
      background: "linear-gradient(163.733deg, rgb(44, 52, 56) 14.367%, rgb(46, 57, 62) 147.74%)",
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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        // Main entry: redirect based on user progress
        index: true,
        Component: HomeRedirect,
      },
      {
        // Courses catalog — choose a course
        path: "courses",
        Component: CoursesPage,
      },
      {
        // Welcome / onboarding screen
        path: "welcome",
        Component: WelcomePage,
      },
      {
        // Experience level selection — between welcome and first quiz
        path: "level",
        Component: LevelSelectPage,
      },
      {
        // Quiz screen — after level selection
        path: "quiz",
        Component: QuizPage,
      },
      {
        // Lesson quiz screen — first quiz in lessons
        path: "lesson-quiz",
        Component: LessonQuizPage,
      },
      {
        // Modules page — list of modules within a course
        path: "modules",
        Component: ModulesPage,
      },
      {
        // Lesson / Roadmap — main learning screen
        path: "lessons",
        Component: LessonPage,
      },
      {
        // Theory page — generic template for all theory lessons
        path: "theory",
        Component: TheoryPage,
      },
      {
        // Contrast lesson — uses same generic TheoryPage template with contrast-lesson data
        path: "contrast",
        Component: TheoryPage,
      },
      {
        // Profile page
        path: "profile",
        Component: ProfilePage,
      },
      {
        // Weekly challenges page
        path: "challenges",
        Component: ChallengesPage,
      },
      {
        // Challenge detail page
        path: "challenge-detail",
        Component: ChallengeDetailPage,
      },
      {
        // Homework page — for lesson homeworks
        path: "homework",
        Component: HomeworkPage,
      },
      {
        // Notifications page
        path: "notifications",
        Component: NotificationsPage,
      },
      {
        // Admin homeworks management page
        path: "admin-homeworks",
        Component: AdminHomeworksPage,
      },
      {
        // Catch-all — redirect to home
        path: "*",
        Component: HomeRedirect,
      },
    ],
  },
]);
