import { useRef } from "react";
import Layout from "../components/Layout";
import CoursesContent from "../components/CoursesContent";

/**
 * CoursesScrollColumn wrapper
 *
 * The scroll-with-fades pattern is no longer needed — Layout now manages scroll.
 * Cards render directly without a custom scroll container.
 */
function CoursesScrollColumn({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}

/**
 * Layout Type A — Courses list
 * Left: course cards (scrollable)   Right: RightWidgets (fixed)
 */
export default function CoursesPage() {
  return (
    <div className="courses-page size-full">
      <Layout title="Курсы" rightWidth="320px">
        <CoursesContent />
      </Layout>
    </div>
  );
}