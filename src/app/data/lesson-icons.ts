export const LESSON_ICON: Record<string, string> = {
  "color-lesson":               "/lesson-icons-png/color.png",
  "contrast-lesson":            "/lesson-icons-png/contrast.png",
  "hierarchy-lesson":           "/lesson-icons-png/hierarchy.png",
  "what-is-ux-lesson":          "/lesson-icons-png/what-is-ux.png",
  "user-flow-lesson":           "/lesson-icons-png/user-flow.png",
  "interface-structure-lesson": "/lesson-icons-png/structure.png",
  "interface-elements-lesson":  "/lesson-icons-png/interface-elements.png",
  "ux-errors-lesson":           "/lesson-icons-png/ux-errors.png",
  "what-is-ui-kit-lesson":      "/lesson-icons-png/what-is-ui-kit.png",
  "ui-elements-lesson":         "/lesson-icons-png/ui-elements.png",
  "element-states-lesson":      "/lesson-icons-png/element-states.png",
  "figma-components-lesson":    "/lesson-icons-png/figma-components.png",
  "creating-ui-kit-lesson":     "/lesson-icons-png/creating-ui-kit.png",
};

export function getLessonIcon(lessonId: string, isHomework = false): string {
  if (isHomework) return "/lesson-icons-png/homework.png";
  return LESSON_ICON[lessonId] ?? "/lesson-icons-png/homework.png";
}
