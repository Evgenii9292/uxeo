We must fix the layout architecture.

IMPORTANT  
Do NOT create new sidebars, headers or widget panels.

We must reuse existing components.

---

GLOBAL COMPONENTS

These components must exist only once and be reused on all pages:

Sidebar  
Header  
RightWidgets

---

LAYOUT STRUCTURE

Create a global Layout component.

Layout
 ├ Sidebar
 ├ Header
 ├ MainContent (changes per page)
 └ RightWidgets

The layout container must remain the same width on all pages.

---

SIDEBAR

Use the existing Sidebar component.

Do NOT recreate it.

Sidebar must be identical across all screens.

---

HEADER

Header must be reused.

Only the title or back button may change.

Header width must always match the central container.

---

RIGHT WIDGETS

Reuse the existing widgets panel.

Widgets:

WeeklyChallenge  
LeagueProgress  
DailyChallenge

Do not create new versions.

---

PAGE CONTAINER

The central container must have fixed width and must not change between pages.

This container must control spacing for all pages.

---

GOAL

All screens must share the same layout and spacing.

Only the main content area should change.

Do not duplicate layout code.