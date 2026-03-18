export type LessonStatus = "completed" | "current" | "locked";

export interface Lesson {
  id: number;
  lessonId: string;
  quizId?: string;
  title: string;
  description: string;
  status: LessonStatus;
  progress: number;
  totalQuestions: number;
  xpReward: number;
  moduleId: number;
  moduleName: string;
}

// ─── Static lesson data ───────────────────────────────────────────────────────
// NOTE: `status` and `progress` values here are TEMPLATE ONLY.
// Actual runtime values are computed dynamically in LessonPage.tsx based on
// UserContext data. These static values should represent the initial state
// (first lesson = current, rest = locked, all progress = 0).
//
// CRITICAL: Each lesson MUST have a unique `lessonId`.
// Quiz progress is stored per lessonId in UserContext.
// If two lessons share the same lessonId, they will share quiz progress!

export const LESSONS: Lesson[] = [
  // ─── MODULE 1 — Основы UX (4 урока) ───────────────────────────────────────────
  {
    id: 1,
    lessonId: "contrast-lesson",
    quizId: "quiz_contrast",
    title: "Контраст",
    description: "Как визуальные различия помогают выделять элементы интерфейса.",
    status: "current",
    progress: 0,
    totalQuestions: 12,
    xpReward: 300,
    moduleId: 1,
    moduleName: "Основы UX",
  },
  {
    id: 2,
    lessonId: "color-lesson",
    quizId: "quiz_color",
    title: "Цвет",
    description: "Базовые принципы цвета в интерфейсах: контраст, акцентные и нейтральные цвета.",
    status: "locked",
    progress: 0,
    totalQuestions: 12,
    xpReward: 300,
    moduleId: 1,
    moduleName: "Основы UX",
  },
  {
    id: 3,
    lessonId: "hierarchy-lesson",
    quizId: "quiz_hierarchy",
    title: "Иерархия",
    description: "Как размер, положение и контраст формируют порядок восприятия.",
    status: "locked",
    progress: 0,
    totalQuestions: 12,
    xpReward: 300,
    moduleId: 1,
    moduleName: "Основы UX",
  },
  {
    id: 4,
    lessonId: "homework-1",
    title: "Домашнее задание",
    description: "Практическое задание на применение принципов UX.",
    status: "locked",
    progress: 0,
    totalQuestions: 0,
    xpReward: 0,
    moduleId: 1,
    moduleName: "Основы UX",
  },
  
  // ─── MODULE 2 — UX интерфейсов (6 уроков) ─────────────────────────────────────
  {
    id: 5,
    lessonId: "what-is-ux-lesson",
    quizId: "quiz_what_is_ux",
    title: "Что такое UX",
    description: "Основы пользовательского опыта и его роль в дизайне.",
    status: "locked",
    progress: 0,
    totalQuestions: 12,
    xpReward: 300,
    moduleId: 2,
    moduleName: "UX интерфейсов",
  },
  {
    id: 6,
    lessonId: "user-flow-lesson",
    quizId: "quiz_user_flow",
    title: "User Flow",
    description: "Проектирование пользовательских сценариев и потоков.",
    status: "locked",
    progress: 0,
    totalQuestions: 12,
    xpReward: 300,
    moduleId: 2,
    moduleName: "UX интерфейсов",
  },
  {
    id: 7,
    lessonId: "interface-structure-lesson",
    quizId: "quiz_interface_structure",
    title: "Структура интерфейса",
    description: "Организация элементов и блоков интерфейса.",
    status: "locked",
    progress: 0,
    totalQuestions: 12,
    xpReward: 300,
    moduleId: 2,
    moduleName: "UX интерфейсов",
  },
  {
    id: 8,
    lessonId: "interface-elements-lesson",
    quizId: "quiz_interface_elements",
    title: "Основные элементы интерфейса",
    description: "Кнопки, поля ввода, карточки и другие базовые элементы.",
    status: "locked",
    progress: 0,
    totalQuestions: 12,
    xpReward: 300,
    moduleId: 2,
    moduleName: "UX интерфейсов",
  },
  {
    id: 9,
    lessonId: "ux-errors-lesson",
    quizId: "quiz_ux_errors",
    title: "Ошибки UX",
    description: "Распространенные ошибки в проектировании пользовательского опыта.",
    status: "locked",
    progress: 0,
    totalQuestions: 12,
    xpReward: 300,
    moduleId: 2,
    moduleName: "UX интерфейсов",
  },
  {
    id: 10,
    lessonId: "homework-2",
    title: "Домашнее задание",
    description: "Практическое задание на UX интерфейсов.",
    status: "locked",
    progress: 0,
    totalQuestions: 0,
    xpReward: 0,
    moduleId: 2,
    moduleName: "UX интерфейсов",
  },

  // ─── MODULE 3 — UI Kit (6 уроков) ─────────────────────────────────────────────
  {
    id: 11,
    lessonId: "what-is-ui-kit-lesson",
    quizId: "quiz_what_is_ui_kit",
    title: "Что такое UI Kit",
    description: "Основы создания библиотек UI компонентов.",
    status: "locked",
    progress: 0,
    totalQuestions: 12,
    xpReward: 300,
    moduleId: 3,
    moduleName: "UI Kit",
  },
  {
    id: 12,
    lessonId: "ui-elements-lesson",
    quizId: "quiz_ui_elements",
    title: "Основные UI элементы",
    description: "Типографика, иконки, кнопки и поля форм.",
    status: "locked",
    progress: 0,
    totalQuestions: 12,
    xpReward: 300,
    moduleId: 3,
    moduleName: "UI Kit",
  },
  {
    id: 13,
    lessonId: "element-states-lesson",
    quizId: "quiz_element_states",
    title: "Состояния элементов",
    description: "Default, hover, active, disabled и другие состояния.",
    status: "locked",
    progress: 0,
    totalQuestions: 12,
    xpReward: 300,
    moduleId: 3,
    moduleName: "UI Kit",
  },
  {
    id: 14,
    lessonId: "figma-components-lesson",
    quizId: "quiz_figma_components",
    title: "Компоненты в Figma",
    description: "Работа с компонентами, вариантами и автолейаутом.",
    status: "locked",
    progress: 0,
    totalQuestions: 12,
    xpReward: 300,
    moduleId: 3,
    moduleName: "UI Kit",
  },
  {
    id: 15,
    lessonId: "creating-ui-kit-lesson",
    quizId: "quiz_creating_ui_kit",
    title: "Создание UI Kit",
    description: "Практическое создание полноценного UI Kit в Figma.",
    status: "locked",
    progress: 0,
    totalQuestions: 12,
    xpReward: 300,
    moduleId: 3,
    moduleName: "UI Kit",
  },
  {
    id: 16,
    lessonId: "homework-3",
    title: "Домашнее задание",
    description: "Финальное практическое задание по UI Kit.",
    status: "locked",
    progress: 0,
    totalQuestions: 0,
    xpReward: 0,
    moduleId: 3,
    moduleName: "UI Kit",
  },
];