Apply the following UI consistency fixes.

Important rule:

Do NOT change the global layout structure.  
Sidebar, header, grid system and right widgets layout must remain the same.

Only adjust spacing, styling and component behavior described below.

---

1. CARD WIDTH CONSISTENCY

Course cards and Module cards currently have different widths.

They must use the same width.

Make the width identical so that both screens use the same card container size.

---

2. CARD SPACING CONSISTENCY

Vertical spacing between cards on the Modules screen is different from the Courses screen.

Fix this so that the spacing between cards is identical on both screens.

Use the same vertical spacing value.

---

3. RIGHT WIDGET SPACING

The spacing between widgets on the right panel is inconsistent.

Vertical spacing must equal horizontal spacing.

Example rule:

If horizontal spacing = X  
Vertical spacing must also = X.

Ensure all widgets follow the same spacing grid.

---

4. SIDEBAR ACTIVE STATE

The sidebar item "Обучение" should represent the entire learning section.

It must stay active on all learning-related screens:

• Courses  
• Modules  
• Lessons  
• Theory  
• Quiz

The highlight must remain active throughout the entire learning flow.

---

5. "В РАЗРАБОТКЕ" BUTTON RADIUS

Buttons that say "В разработке" have a different border radius than the main button.

Fix this.

They must use the same border radius as the main button in the first course card.

---

6. FIRST COURSE CARD BACKGROUND

The first course card should visually stand out.

Its background must match the highlighted module card style.

Use the same light grey background used for the first module card.

Other course cards remain darker.

---

7. MODULE XP BADGE LOCATION

Currently modules show:

+375 XP outside the button.

Move this XP value into the button.

The module button should match the course button structure:

Button text + XP badge inside the button.

Use the same size, color and layout as the Courses screen.

---

8. SIDEBAR "ОБУЧЕНИЕ" CLICK BEHAVIOR

When the user is already inside the learning section, clicking "Обучение" should NOT navigate anywhere.

The button should behave like an already-active section.

It should simply remain highlighted.

---

9. WIDGET COLOR CONSISTENCY

In the right widgets panel remove the green color for completion states.

Even if a task is completed, use the orange accent color.

Apply this rule to:

• "Задание дня — Выполнено"  
• "До открытия лиги" progress state

All completion states must use the same orange accent color used in the rest of the UI.

Do not use green for completion states.