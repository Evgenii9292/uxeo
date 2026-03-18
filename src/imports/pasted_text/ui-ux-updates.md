Apply the following UI/UX updates across the theory pages, widgets and notifications.

These updates include a structural change to how quizzes are displayed.

Do not redesign visual style — only restructure layout and fix spacing.

---

# 1. CREATE A SEPARATE QUIZ BLOCK

Quizzes should no longer sit directly inside the theory flow.

Instead create a separate container block for quizzes.

Structure:

Outer quiz container  
→ Inner quiz container  
→ Quiz content

Layout example matches the provided screenshot.

---

# 2. QUIZ CONTAINER SPACING

Use consistent padding rules.

Outer container → Inner container  
30px

Inner container padding (all sides):  
30px

Inside the inner container:

• quiz title  
• label ("Проверим" / "Закрепим")  
• answer cards  
• explanation text  
• continue button

Everything must respect the 30px padding rule.

---

# 3. QUIZ HEADER LAYOUT

The quiz header should stretch across the container.

Layout:

Left side  
Quiz title

Right side  
Label (example: "Закрепим")

Exactly like in the screenshot.

---

# 4. QUIZ CARD SPACING

Distance from answer cards to the inner container edges:

30px on all sides

Maintain consistent spacing.

---

# 5. QUIZ CONTAINER HEIGHT

Reduce the height of the quiz container slightly.

Decrease by 10px total, then keep the cards vertically centered.

---

# 6. CORRECT ANSWER EXPLANATION WIDTH

Explanation block width should be:

50% of the inner quiz container width

Not full width.

This improves readability.

---

# 7. THEORY HEADER BLOCK

In theory pages:

The first block should follow this layout:

Left side  
Image (approx 400px width)

Right side  
Title + meta labels

Example:

Цвет в UX/UI  
7 мин  
Новичок

Match the layout from the screenshot.

---

# 8. TYPOGRAPHY FIX

Replace all Bold (700) with Semi-Bold (600) across the product.

Apply to:

• lessons  
• profile  
• challenges  
• notifications  
• widgets

---

# 9. SPELLING FIX

Replace the word:

Новичок

with

Новичёк

Use the ё spelling everywhere on the site.

---

# 10. THEORY DIVIDER LINES

All divider lines inside theory sections should use:

50% opacity

Apply consistently in both lessons:

• Контраст  
• Цвет

---

# 11. WIDGET FIX (FIGMA ICON)

In widgets (example: "Недельные вызовы"):

The Figma icon container became distorted.

Fix:

• container must remain square  
• center the icon inside  
• adjust width if needed

---

# 12. REMOVE ARROW IN NARROW WIDGET

In narrow widget layout (right column in theory):

Remove the arrow icon.

It visually does not fit in the narrow layout.

---

# 13. NOTIFICATIONS FIX

Status dots must appear next to the title, not vertically centered.

Correct layout:

dot → title → message text.

---

# 14. NOTIFICATION CLICK RULE

Notification cards should only be clickable if they contain an action link.

Examples:

"Смотреть фидбек"  
"Смотреть задания"

Cards without links must NOT be clickable.

---

# 15. NOTIFICATION TYPOGRAPHY

Replace Bold with Semi-Bold in notifications.

---

# 16. PROFILE PAGE FIX

In the Current Course block:

The button currently stretches across the full width.

Change layout:

Left side  
Course image (slightly larger)

Right side  
Title + button aligned with the title

The button should become narrower and cleaner.

The image can be slightly taller if needed.

---

# 17. CHALLENGES PAGE FIX

The main challenge card (active one) is currently too tall.

Reduce its height so it matches the proportions of the other cards.

This will naturally reduce the spacing between the badge and the button.

That spacing reduction is acceptable.

---

Apply all changes consistently across the interface.