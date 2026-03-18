STRICT PATCH — FIX POPUP PROGRESS BAR + FAIL ICON + FIGMA ANNOTATION

Apply the fixes exactly as described.

CRITICAL RULES

• DO NOT modify roadmap layout
• DO NOT move lesson nodes
• DO NOT change design system
• only fix the issues listed below



FIX 1 — REMOVE CONGRATULATIONS ICON FROM FAIL SCREEN

Component: LessonResultScreen.tsx

When the user FAILS a lesson (score < 50%) the screen currently shows a "congratulations" icon.

Remove this icon completely.

FAIL SCREEN must contain only:

• result text
• progress information (X / Y)
• buttons

No celebration icon.



FAIL example:

"Вы выполнили 2 из 5 заданий"

"Чтобы пройти урок нужно хотя бы 3 из 5"



Buttons:

Попробовать ещё раз
Вернуться на Roadmap



FIX 2 — POPUP PROGRESS BAR

Component: LessonPopup.tsx

The progress bar inside the popup is not filling.

The bar must represent lesson progress.

Use:

progress = lessonProgress.correctAnswers / totalQuestions

Example:

2 / 5 → 40%

Implementation example:

const progress =
lessonProgress.correctAnswers / totalQuestions

<div className="progress-bar-fill"
style={{ width: `${progress * 100}%` }}
/>



IMPORTANT

Even when progress = 0 the bar container must still render.



FIX 3 — FIGMA ICON SIZE AND POSITION

Component: RoadmapPath.tsx

The Figma annotation icon is too small and incorrectly positioned.

Adjust:

scale = 2x current size

Position rule:

The icon must appear LEFT of the "Домашнее задание" node.

Distance:

20px from the left edge of the node.

Example:

x = homeworkNode.x - 20 - iconWidth
y = homeworkNode.y

Do NOT use absolute hardcoded coordinates.
Position relative to the homework node.



EXPECTED RESULT

• fail screen has no celebration icon
• popup progress bar fills correctly
• figma icon is twice as large
• figma icon sits 20px left of the homework node