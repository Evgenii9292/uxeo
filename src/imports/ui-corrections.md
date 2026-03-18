Apply the following UI corrections.

Important rule:

Do NOT change the global layout system.

Sidebar, header and right widgets are global components and must remain fixed.

Only adjust the specific behaviors described below.

---

1. CENTER CONTENT SCROLL (COURSES / MODULES / LESSONS)

Currently the entire page scrolls.

This is incorrect.

Correct behavior:

• Sidebar stays fixed  
• Header stays fixed  
• Right widgets stay fixed  
• ONLY the center content column scrolls

The center content should scroll under the header.

Use the same scroll behavior already implemented on the Theory page.

Add the same visual fade effect:

• soft gradient fade at the top  
• soft gradient fade at the bottom

The fade should slightly darken the content when it passes under the header.

---

2. MODULE CARD LEVEL ICON

Currently module cards show the wrong icon for level (Новичок).

Replace the icon.

Use the same level staircase icon used on the Course cards.

Apply this icon consistently across all module cards.

---

3. LESSON PAGE HEADER

Currently the Lessons screen has an extra subtitle above the lesson card.

This is incorrect.

Remove that extra subtitle.

Correct structure:

The header must display:

Module Name   |   Уроки

Example:

Основы UX/UI   Уроки

The module name should appear in the header title area.

"Уроки" should appear to the right in the same header.

---

4. THEORY PAGE HEADER

When the user opens Theory, the header should not say "Теория".

Instead:

Display the current lesson name.

Header format:

Lesson Name   |   Теория

Example:

Цвет   Теория

The lesson name should be pulled dynamically from the lesson data.

---

5. ONBOARDING QUIZ XP INDICATOR STYLE

The XP indicator in the onboarding quiz currently looks different.

Update it so it matches the style used in the main quiz screens.

Match exactly:

• icon style  
• size  
• spacing  
• alignment  
• padding from screen edges

Do not invent a new design.

Reuse the same component style used in the regular quiz UI.

---

Important rule:

Do NOT modify:

• sidebar  
• global header layout  
• right widgets  
• grid system

Only apply the fixes described above.