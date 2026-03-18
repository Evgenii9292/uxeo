The previous change broke layouts on other pages (Courses, Theory list, etc.).

This must not happen.

Important rule:

DO NOT modify any global layout components.

Do NOT change:

• course cards  
• course list layout  
• widgets column  
• sidebar layout  
• header layout  
• shared card components used in other pages

Only modify the Lesson Theory page.

---

Scope restriction

Changes must be limited to:

LessonTheoryPage  
LessonAccordion component  
LessonQuizBlock component

Nothing else.

Do NOT modify shared layout files.

---

Now apply the following fixes.

1. Accordion width

Accordion cards must align with the image container above.

Main lesson container has padding:

padding-left: 20px  
padding-right: 20px

Accordion cards must fill the container width inside that padding.

They are currently too narrow.

Fix width so they match the image container width.

---

2. Accordion card color

Accordion background color must be:

#374348

Verify that this color is applied to the accordion card container.

---

3. Quiz block simplification

Remove the extra background container around the quiz.

The quiz must not be a card inside another card.

Correct structure inside accordion:

theory text  
divider  
quiz title  
quiz options  
result block  

No additional background card.

---

4. Quiz result interaction

When the result block appears:

Верно! +15 ⚡

Rules:

• it must NOT be clickable  
• cursor must be default (not pointer)  
• no hover state  

It is informational only.

---

5. Header alignment

The labels:

⏱ 7 мин  
👤 Новенький

must align with the right edge of the image container.

Right now "Новенький" is misaligned.

Fix spacing.

---

6. Scroll behavior

Sidebar, header and right widgets must remain fixed.

Only the central lesson container should scroll.

Hide the visible scrollbar while keeping scrolling functionality.

---

Goal

Fix layout spacing, alignment and scroll behavior on the Lesson Theory page without modifying any shared layout components.