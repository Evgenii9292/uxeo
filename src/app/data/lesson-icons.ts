export const LESSON_ICON: Record<string, string> = {
  "color-lesson":               "/lesson-icons/color.svg",
  "contrast-lesson":            "/lesson-icons/contrast.svg",
  "hierarchy-lesson":           "/lesson-icons/hierarchy.svg",
  "what-is-ux-lesson":          "/lesson-icons/what-is-ux.svg",
  "user-flow-lesson":           "/lesson-icons/user-flow.svg",
  "interface-structure-lesson": "/lesson-icons/structure.svg",
  "interface-elements-lesson":  "/lesson-icons/interface-elements.svg",
  "ux-errors-lesson":           "/lesson-icons/ux-errors.svg",
  "what-is-ui-kit-lesson":      "/lesson-icons/what-is-ui-kit.svg",
  "ui-elements-lesson":         "/lesson-icons/ui-elements.svg",
  "element-states-lesson":      "/lesson-icons/element-states.svg",
  "figma-components-lesson":    "/lesson-icons/figma-components.svg",
  "creating-ui-kit-lesson":     "/lesson-icons/creating-ui-kit.svg",
};

export function getLessonIcon(lessonId: string, isHomework = false): string {
  if (isHomework) return "/lesson-icons/homework.svg";
  return LESSON_ICON[lessonId] ?? "/lesson-icons/homework.svg";
}
