"}

The Theory page still has several structural issues.  
Please apply the following fixes.

Important: do not change the page layout, only fix the components.

---

1. Fix streak logic

Currently the streak can be triggered multiple times per day.

Correct behavior:

• streak can increase only once per day  
• store lastStreakDate  
• if today === lastStreakDate → do nothing  
• if today > lastStreakDate → streak +1  

The streak value must update in the header.

---

2. Fix accordion structure

The accordion still renders as TWO cards.

Current structure (WRONG):

Card A  
  header  

Card B  
  content  

Correct structure:

ONE SINGLE CARD

AccordionCard
  Header
  ExpandableContent

The card must expand downward inside the SAME container.

Do NOT create a second card.

The background must remain one continuous surface.

---

3. Prevent viewport jumping

Opening an accordion must NOT scroll the page.

Remove any usage of:

scrollIntoView  
focus scroll  
automatic viewport movement

The accordion must open in place.

---

4. Improve accordion animation

Current animation is too slow and feels broken.

Use a faster animation:

duration: 0.2s  
easing: ease-out  

Content animation:

opacity: 0 → 1  
translateY: -6px → 0  

This makes the content appear from inside the card.

---

5. Fix text layout

The incorrect answer text currently overflows.

Add width constraints so the text wraps properly.

Use:

max-width for the message container  
allow multiline wrapping

---

6. Incorrect answer message

Shorten the text.

Use:

💪 Почти! Попробуй другой вариант

Below it show the explanation text.

Do not grant XP for incorrect answers.

---

Goal

Fix streak logic, accordion structure, animation behavior, and incorrect answer layout on the Theory pag