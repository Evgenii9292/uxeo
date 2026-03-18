import Layout from "../components/Layout";
import ModulesContent from "../components/ModulesContent";

/**
 * Modules page — shows modules within a specific course.
 * Header: "UX/UI" (white) + "Модули курса" (gray)
 * Navigation: back → Courses page (/)
 */
export default function ModulesPage() {
  return (
    <Layout
      title="UX/UI"
      showBack
      backPath="/"
    >
      <ModulesContent />
    </Layout>
  );
}