// ─── Roadmap Data ─────────────────────────────────────────────────────────────
// Single source of truth for lesson content.
// No UI logic here.

import type { Lesson } from "./roadmap-types";

export const ROADMAP_LESSONS: Lesson[] = [
  {
    id: 1,
    lessonId: "contrast-lesson",
    quizId: "quiz_contrast",
    title: "Контраст",
    description: "Как визуальные различия помогают выделять элементы интерфейса.",
    status: "completed",
    progress: 5,
    totalQuestions: 5,
    xpReward: 125,
    moduleId: 1,
    moduleName: "MODULE 1 — Основы UX",
  },
  {
    id: 2,
    lessonId: "color-lesson",
    quizId: "quiz_color",
    title: "Цвет",
    description: "Базовые принципы цвета в интерфейсах: контраст, акцентные и нейтральные цвета.",
    status: "completed",
    progress: 3,
    totalQuestions: 5,
    xpReward: 125,
    moduleId: 1,
    moduleName: "MODULE 1 — Основы UX",
  },
  {
    id: 3,
    lessonId: "hierarchy-lesson",
    quizId: "quiz_hierarchy",
    title: "Иерархия",
    description: "Как размер, положение и контраст формируют порядок восприятия.",
    status: "current",
    progress: 2,
    totalQuestions: 5,
    xpReward: 125,
    moduleId: 1,
    moduleName: "MODULE 1 — Основы UX",
  },
  {
    id: 4,
    lessonId: "homework",
    title: "Домашнее задание",
    description: "Практическое задание на применение принципов UX.",
    status: "locked",
    progress: 0,
    totalQuestions: 0,
    xpReward: 0,
    moduleId: 1,
    moduleName: "MODULE 1 — Основы UX",
  },
  {
    id: 5,
    lessonId: "navigation-lesson",
    quizId: "quiz_navigation",
    title: "Навигация",
    description: "Принципы организации навигации в интерфейсах.",
    status: "locked",
    progress: 0,
    totalQuestions: 5,
    xpReward: 125,
    moduleId: 1,
    moduleName: "MODULE 1 — Основы UX",
  },
  {
    id: 6,
    lessonId: "what-is-ux-lesson",
    quizId: "quiz_what_is_ux",
    title: "Что такое UX",
    description: "Основы пользовательского опыта и его роль в дизайне.",
    status: "locked",
    progress: 0,
    totalQuestions: 5,
    xpReward: 125,
    moduleId: 2,
    moduleName: "MODULE 2 — UX интерфейсов",
  },
  {
    id: 7,
    lessonId: "user-flow-lesson",
    quizId: "quiz_user_flow",
    title: "User Flow",
    description: "Проектирование пользовательских сценариев и потоков.",
    status: "locked",
    progress: 0,
    totalQuestions: 5,
    xpReward: 125,
    moduleId: 2,
    moduleName: "MODULE 2 — UX интерфейсов",
  },
  {
    id: 8,
    lessonId: "interface-structure-lesson",
    quizId: "quiz_interface_structure",
    title: "Структура интерфейса",
    description: "Организация элементов и блоков интерфейса.",
    status: "locked",
    progress: 0,
    totalQuestions: 5,
    xpReward: 125,
    moduleId: 2,
    moduleName: "MODULE 2 — UX интерфейсов",
  },
  {
    id: 9,
    lessonId: "interface-elements-lesson",
    quizId: "quiz_interface_elements",
    title: "Основные элементы интерфейса",
    description: "Кнопки, поля ввода, карточки и другие базовые элементы.",
    status: "locked",
    progress: 0,
    totalQuestions: 5,
    xpReward: 125,
    moduleId: 2,
    moduleName: "MODULE 2 — UX интерфейсов",
  },
  {
    id: 10,
    lessonId: "ux-errors-lesson",
    quizId: "quiz_ux_errors",
    title: "Ошибки UX",
    description: "Распространенные ошибки в проектировании пользовательского опыта.",
    status: "locked",
    progress: 0,
    totalQuestions: 5,
    xpReward: 125,
    moduleId: 2,
    moduleName: "MODULE 2 — UX интерфейсов",
  },
  {
    id: 11,
    lessonId: "what-is-ui-kit-lesson",
    quizId: "quiz_what_is_ui_kit",
    title: "Что такое UI Kit",
    description: "Основы создания библиотек UI компонентов.",
    status: "locked",
    progress: 0,
    totalQuestions: 5,
    xpReward: 125,
    moduleId: 3,
    moduleName: "MODULE 3 — UI Kit",
  },
  {
    id: 12,
    lessonId: "ui-elements-lesson",
    quizId: "quiz_ui_elements",
    title: "Основные UI элементы",
    description: "Типографика, иконки, кнопки и поля форм.",
    status: "locked",
    progress: 0,
    totalQuestions: 5,
    xpReward: 125,
    moduleId: 3,
    moduleName: "MODULE 3 — UI Kit",
  },
  {
    id: 13,
    lessonId: "element-states-lesson",
    quizId: "quiz_element_states",
    title: "Состояния элементов",
    description: "Default, hover, active, disabled и другие состояния.",
    status: "locked",
    progress: 0,
    totalQuestions: 5,
    xpReward: 125,
    moduleId: 3,
    moduleName: "MODULE 3 — UI Kit",
  },
  {
    id: 14,
    lessonId: "figma-components-lesson",
    quizId: "quiz_figma_components",
    title: "Компоненты в Figma",
    description: "Работа с компонентами, вариантами и автолейаутом.",
    status: "locked",
    progress: 0,
    totalQuestions: 5,
    xpReward: 125,
    moduleId: 3,
    moduleName: "MODULE 3 — UI Kit",
  },
  {
    id: 15,
    lessonId: "creating-ui-kit-lesson",
    quizId: "quiz_creating_ui_kit",
    title: "Создание UI Kit",
    description: "Практическое создание полноценного UI Kit в Figma.",
    status: "locked",
    progress: 0,
    totalQuestions: 5,
    xpReward: 125,
    moduleId: 3,
    moduleName: "MODULE 3 — UI Kit",
  },
];

/**
 * Calculate course progress based on completed lessons from roadmap.
 * Excludes homework lessons (those without quizId).
 * Returns progress as a fraction (0.0 to 1.0).
 */
export function getCourseProgressFromRoadmap(
  lessonProgress: Record<string, { isCompleted: boolean }>
): number {
  // Count only lessons with quizId (exclude homework)
  const quizLessons = ROADMAP_LESSONS.filter(lesson => lesson.quizId);
  const totalLessons = quizLessons.length;
  
  if (totalLessons === 0) return 0;
  
  // Count completed quiz lessons
  const completedLessons = quizLessons.filter(lesson => {
    const progress = lessonProgress[lesson.lessonId];
    return progress && progress.isCompleted;
  }).length;
  
  return completedLessons / totalLessons;
}