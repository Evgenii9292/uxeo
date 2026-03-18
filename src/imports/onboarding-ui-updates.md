Apply the following UI and logic updates.  
Do NOT change the existing layout structure.

Sidebar, header and right widgets remain unchanged.

---

1. ONBOARDING QUIZ — XP INDICATOR

After the Welcome page the user enters the onboarding quiz.

Add a dynamic XP indicator to this screen.

Requirements:

• Do NOT add the full header here  
• Only show the XP indicator

Placement:

Top-right corner of the screen.

Position:

40px from the top  
40px from the right edge

This XP indicator should look the same as the XP counter used in the main header.

Behavior:

The value must update dynamically as the user earns XP in the onboarding quiz.

Example:

User answers correctly  
→ +25 XP  
→ indicator updates immediately

---

2. LESSONS PAGE LABEL

On the Lessons screen add a label above the lesson cards.

The label text:

Уроки

Style:

Use the same style used for section labels in the Modules screen.

Same color  
Same typography  
Same spacing.

---

3. MODULE CARDS — LESSON COUNT BADGE

Add a badge to each module card that shows the number of lessons.

Placement:

Same area where the information appears in the first module card.

Example:

0 уроков  
5 уроков  
10 уроков

For modules that currently have no lessons, display:

0 уроков

---

4. MODULE LOCK STATE

For module cards that previously showed:

"В разработке"

Remove this label.

Instead introduce a LOCKED state.

Locked modules:

• appear visually disabled  
• cannot be opened yet  
• unlock progressively as the user completes previous modules

---

5. MODULE PROGRESS BAR

Add a progress bar to module cards similar to the progress bar used on course cards.

Rules:

If the module has NOT been started  
→ progress bar should NOT be visible.

If the module HAS been started  
→ show the progress bar.

Style:

Grey base line  
Orange fill

Placement:

Top of the module card in the image/shape area, same as the course cards.

---

6. MODULE PROGRESS CALCULATION

Module progress is based on lesson completion.

Progress = completed lessons / total lessons in the module.

Example:

Module has 5 lessons  
User completed 2

Progress bar fill = 2 / 5

---

Important rule:

Do NOT modify:

• sidebar  
• global header  
• right widgets  
• layout grid

Only update the specific components described above.