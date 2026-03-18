STRICT PATCH — ROADMAP NODE + LOGIC FIX

Apply the following fixes to the roadmap interface.

CRITICAL RULES

• DO NOT redesign the UI
• DO NOT move roadmap nodes
• DO NOT change layout structure
• DO NOT modify the design system
• only fix the issues listed below



FIX 1 — ORANGE NODE SHADOW SYSTEM

Component: LessonNode.tsx

The orange CURRENT lesson node ("Иерархия") lost its correct shadow.

Restore the same press interaction system used by other nodes.

Default
box-shadow: 0 6px 0 rgba(160,70,10,0.45)

Hover
transform: translateY(3px)
box-shadow: 0 3px 0 rgba(160,70,10,0.45)

Active
transform: translateY(6px)
box-shadow: 0 0 0 rgba(160,70,10,0)

IMPORTANT
• shadow must be dark orange
• no TOP shadows allowed



FIX 2 — MODULE TITLE VISIBILITY

"Модуль 1"
"Модуль 2"

Gradient width is too small and barely visible.

Increase gradient width so the titles are easier to read.

Rules:

• keep same color palette
• keep same typography
• only increase gradient width / opacity slightly



FIX 3 — FIX PROGRESS LOGIC

The lesson progress ring and % label became desynchronized.

Restore the original logic:

progress = lesson.pointsEarned / lesson.pointsTotal

Example:

0 / 10 → 0%
6 / 10 → 60%
10 / 10 → 100%

The progress ring must use the SAME value as the % label.



FIX 4 — FIX "ТЫ ЗДЕСЬ" LABEL POSITION

The "Ты здесь" label is attached to the wrong node.

It must always attach to the CURRENT lesson node.

Rules:

• label appears above the orange node
• arrow points to the orange node
• remove label from the green node



FIX 5 — POPUP BUTTON SPACING

LessonPopup.tsx

Buttons inside the popup are too close to the bottom.

Add padding so the spacing from bottom edge = 20px.



GOAL

Restore correct roadmap logic and node behavior without altering the layout.