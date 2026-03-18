Apply the following fixes across the lessons, theory blocks, widgets and notifications.

Do NOT redesign anything. Only fix logic, spacing, hierarchy and consistency.

---

# 1. LESSON PROGRESS BUG

The progress system is calculating tasks incorrectly.

Example currently shown:

"8 из 5 заданий выполнено"

This is wrong.

Rules:

• Only quiz tasks should be counted.  
• Theory blocks must NOT be counted as tasks.  
• Replaying the lesson must NOT increase the task count again.

Fix this in:

• the lesson completion screen  
• the lesson card on the lessons screen (progress bar).

The maximum number must always equal the number of quizzes.

---

# 2. THEORY DIVIDER SPACING

Currently spacing around divider lines is inconsistent.

Use the spacing that appears before quiz blocks as the correct standard.

Apply this rule everywhere:

• spacing above divider  
• spacing below divider

Both must match that spacing.

---

# 3. QUIZ INTRO SPACING

Before each quiz block there should be more vertical spacing.

Specifically:

From the last divider line → to the quiz title ("Закрепим / Проверим")

This distance should be about 2× larger than the standard divider spacing.

This creates a clearer separation between theory and quiz.

---

# 4. ACCORDION DOT COLOR

In locked accordions the dot indicator is currently light grey.

This is incorrect.

The dot color should be the same dark color used in unlocked accordions.

Apply this in both lessons:

• Контраст  
• Цвет

---

# 5. UNIFY LESSON STYLES

The Контраст lesson currently has the correct structure.

Use it as the visual reference.

Apply the same rules to the Цвет lesson:

• card height  
• spacing  
• divider distances  
• quiz layout  
• typography  
• "Закрепим" label position

All lessons must follow the same system.

---

# 6. COLOR LESSON QUIZ FIXES

In the Цвет lesson:

• quiz cards are taller than in Контраст  
• explanation block under answers is also too tall

Fix:

• card height must match Контраст lesson  
• explanation text should only take half the card height, not the full height

---

# 7. "ЗАКРЕПИМ" LABEL POSITION

In Контраст lesson the label:

icon + "Закрепим"

is positioned correctly.

Use that exact layout in Цвет lesson as well.

---

# 8. WEEKLY CHALLENGES WIDGET (VERTICAL VERSION)

When the widget appears in a narrow vertical layout, the checkmark icon should be removed.

It does not fit visually.

Also fix the Figma icon container:

• spacing on the top and left should be equal  
• align the icon visually with the progress circle on the right.

Apply this rule to all vertical widget layouts.

---

# 9. NOTIFICATIONS – REMOVE TRASH ICONS

Trash icons were added to each notification card.

Remove them.

We do NOT need per-notification deletion for MVP.

Notifications should stay simple.

---

# 10. NOTIFICATION HEADER LAYOUT

Because of the trash icons, the time labels shifted left.

Fix layout:

• time should be 20px from the right edge  
• restore original alignment.

---

# 11. NOTIFICATION CLICK BEHAVIOR

Currently every notification card opens.

This is wrong.

Only notifications that contain a link/action should open.

Example:

"Смотреть фидбек"  
"Смотреть задания"

Cards without actions should NOT open.

---

# 12. STATUS DOT HOVER BEHAVIOR

When hovering the status dot (orange/black), its color currently changes.

Remove this behavior.

Correct behavior:

• dot color does NOT change  
• only cursor changes to pointer

---

# 13. DOT ALIGNMENT

The clickable status dot area appears slightly shifted vertically.

Fix:

The dot must be perfectly vertically centered within the card.

---

# 14. GLOBAL DELETE BUTTON (OPTIONAL)

If deletion functionality is needed, do NOT add trash icons to each card.

Instead:

Add one global delete icon near the filter tabs:

Все / Непрочитанные / Требуют действия

Place the icon on the right side of this row.

Style:

• same dark color as other icons  
• subtle internal icon (not bright)

This icon would clear notifications.

---

Apply these changes carefully and keep the design consistent with the current system.