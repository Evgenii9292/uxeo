PROJECT REFACTOR TASK

You are working on the UXEO learning interface.

The project already contains a working roadmap UI that visually resembles Duolingo-style learning paths.

Your task is NOT to redesign the UI.

Your task is to refactor the roadmap architecture so it becomes scalable and maintainable.


CRITICAL RULES

1. DO NOT change the layout.
2. DO NOT change styling.
3. DO NOT change design tokens.
4. DO NOT change spacing, typography or colors.
5. DO NOT change the sidebar, widget column, or page layout.
6. DO NOT redesign the roadmap visually.

The goal is ONLY architecture refactoring.


CURRENT PROBLEM

Currently the roadmap nodes are positioned manually.

The roadmap logic is scattered across multiple files.

There are files such as:

- roadmap-node-button-fixes
- roadmap-ui-polish
- roadmap-fixes

This indicates the roadmap system is evolving without a clean structure.

This must be replaced with a feature-based architecture.


TARGET ARCHITECTURE

Create a new feature module:

src/features/roadmap/


The structure must become:


src/features/roadmap

Roadmap.tsx
RoadmapPath.tsx
LessonNode.tsx
LessonPopup.tsx
roadmap-data.ts
roadmap-layout.ts
roadmap-types.ts



RESPONSIBILITIES

Roadmap.tsx

Main roadmap container.

Responsibilities:
- render roadmap path
- render lesson nodes
- manage popup state
- pass progress state to nodes



LessonNode.tsx

Responsible ONLY for rendering a lesson node.

Node states:

Completed
- green fill
- checkmark
- gradient border ring

Partial
- progress ring with percentage

Current
- orange node with glow

Locked
- grey node
- no shadow
- no interaction



RoadmapPath.tsx

Responsible ONLY for rendering the roadmap path.

Requirements:

- must be SVG
- must render a smooth vertical path
- minimal curves
- no zigzag chaos



LessonPopup.tsx

Responsible ONLY for rendering lesson popup.

Rules:

- popup is anchored to the node
- popup center aligns with node center
- popup must feel visually attached to the node
- popup must render via React Portal



roadmap-data.ts

Contains lesson data only.

Example:

const roadmapLessons = [
  { id: 1, title: "UX Basics", progress: 100 },
  { id: 2, title: "Hierarchy", progress: 60 },
  { id: 3, title: "Spacing", progress: 0 }
]

No UI logic in this file.



roadmap-layout.ts

Responsible for generating node positions.

Nodes must NOT have manual coordinates.

Implement:

generateRoadmapLayout(lessons)

The function returns:

[
  { id: 1, x: 0, y: 0 },
  { id: 2, x: 40, y: 120 },
  { id: 3, x: -40, y: 240 }
]

Rules:

- mostly vertical progression
- small horizontal offsets
- consistent vertical spacing
- smooth flow



roadmap-types.ts

Contains TypeScript types for:

Lesson
NodeState
RoadmapLayoutNode



IMPLEMENTATION RULES

1. The roadmap UI must look identical after refactoring.
2. Existing components must not visually change.
3. Do not introduce new design ideas.
4. Remove temporary "fix" files related to roadmap once logic is centralized.



GOAL

Transform the roadmap into a clean feature module that can scale to 200+ lessons without manual positioning.

The UI must remain visually identical.