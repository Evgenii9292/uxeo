// Course and lesson data structure

export interface Lesson {
  id: string;
  title: string;
  totalTasks: number;
  xp: number;
  durationMinutes: number; // Lesson duration in minutes (fix 2)
}

export interface Course {
  id: string;
  title: string;
  level: string;
  lessons: Lesson[];
  unlockThreshold: number;
}

// ─── Course Data ──────────────────────────────────────────────────────────────

export const COURSES: Course[] = [
  {
    id: "ux-ui-basics",
    title: "UX/UI Основы",
    level: "Новичек",
    unlockThreshold: 0.5,
    lessons: [
      {
        id: "lesson-1",
        title: "Урок 1 - Цвет",
        totalTasks: 4,
        xp: 125,
        durationMinutes: 7, // Theory page shows 7 мин for this lesson
      },
      {
        id: "lesson-2",
        title: "Урок 2 - Система цветов",
        totalTasks: 3,
        xp: 125,
        durationMinutes: 0, // not yet implemented
      },
      {
        id: "lesson-3",
        title: "Урок 3 - Типографика",
        totalTasks: 5,
        xp: 125,
        durationMinutes: 0, // not yet implemented
      },
    ],
  },
  {
    id: "figma-pro",
    title: "Figma Pro",
    level: "Мидл",
    unlockThreshold: 0.5,
    lessons: [
      { id: "figma-lesson-1", title: "Продвинутые компоненты", totalTasks: 6, xp: 150, durationMinutes: 0 },
      { id: "figma-lesson-2", title: "Auto Layout мастер-класс",  totalTasks: 5, xp: 150, durationMinutes: 0 },
    ],
  },
  {
    id: "rombot",
    title: "Ромбот",
    level: "Мидл",
    unlockThreshold: 0.5,
    lessons: [
      { id: "rombot-lesson-1", title: "Основы UI Kit", totalTasks: 4, xp: 175, durationMinutes: 0 },
    ],
  },
];

// ─── Helper Functions ─────────────────────────────────────────────────────────

export function getTotalCourseTasks(courseId: string): number {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return 0;
  return course.lessons.reduce((sum, lesson) => sum + lesson.totalTasks, 0);
}

export function getTotalCourseXP(courseId: string): number {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return 0;
  return course.lessons.reduce((sum, lesson) => sum + lesson.xp, 0);
}

/**
 * Sum of durationMinutes across all lessons in a course. (fix 2)
 * Returns 0 if the course doesn't exist or has no duration data yet.
 */
export function getCourseDuration(courseId: string): number {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return 0;
  return course.lessons.reduce((sum, lesson) => sum + lesson.durationMinutes, 0);
}

export function getCompletedCourseTasks(
  courseId: string,
  lessonProgress: Record<string, { questions: Record<string, { correct: boolean }> }>
): number {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return 0;
  let completedTasks = 0;
  course.lessons.forEach(lesson => {
    const progress = lessonProgress[lesson.id];
    if (progress && progress.questions) {
      // Only count quiz questions, not theory mini-quizzes (mini-quiz-*)
      completedTasks += Object.entries(progress.questions)
        .filter(([key]) => !key.startsWith('mini-quiz-'))
        .filter(([, q]) => q.correct).length;
    }
  });
  return completedTasks;
}

export function getCourseProgress(
  courseId: string,
  lessonProgress: Record<string, { questions: Record<string, { correct: boolean }> }>
): number {
  const totalTasks = getTotalCourseTasks(courseId);
  if (totalTasks === 0) return 0;
  const completedTasks = getCompletedCourseTasks(courseId, lessonProgress);
  return completedTasks / totalTasks;
}

export function isCourseUnlocked(
  courseIndex: number,
  lessonProgress: Record<string, { questions: Record<string, { correct: boolean }> }>
): boolean {
  if (courseIndex === 0) return true;
  const previousCourse = COURSES[courseIndex - 1];
  if (!previousCourse) return false;
  const previousProgress = getCourseProgress(previousCourse.id, lessonProgress);
  return previousProgress >= previousCourse.unlockThreshold;
}