Apply the following fixes.

Important:
Do NOT modify global layouts or other pages.
Only update lesson quiz behavior and accordion structure.

---

1. Incorrect answer message

Replace the current "Неверно" message.

Instead show a supportive message with an icon.

Example:

💪 Попробуй ещё раз  
или  
💪 Почти! Попробуй другой вариант

The message color must be reddish, not green.

Below the message show a short explanation of the correct answer.

Incorrect answers must NOT grant XP.

---

2. Quiz icon

Use the same fist icon used in the other quiz components.

Do not introduce a new icon style.

---

3. Accordion progress indicators

After completing a mini quiz successfully:

• the left dot indicator must turn green  
• the completion icon must appear

Verify that the state persists.

---

4. First accordion structure

The first accordion must NOT create a second card when expanded.

Incorrect current structure:

Header card  
Content card

Correct structure:

Single accordion card  
  header  
  expandable content  
      theory  
      mini quiz

The same card expands downward when opened.

---

5. Right quiz button press animation

Update the "Начать квиз" button interaction.

States:

Normal:
shadow 5px

Hover:
button translateY 3px  
shadow 3px

Active (click):
button translateY 5px  
shadow 0px

This should create a physical press effect.

---

Goal

Improve incorrect answer feedback, fix accordion structure, verify progress indicators, and restore the correct button press animation.