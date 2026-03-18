We need to make several UI improvements to the lesson pages.

1. Remove the outer container

Currently the whole lesson content is wrapped inside one big container card.

Remove this container.

The layout should become a sequence of independent blocks:

Hero (lesson header)
Accordion
Accordion
Accordion
Quiz block

Each block should be visually separate.

---

2. Hero block adjustments

Increase the height of the hero section slightly.

The illustration on the left should be slightly taller than the text block on the right.

Rule:
image height ≈ text height + 10px top + 10px bottom.

This will balance the layout.

Spacing below the hero block:
20px before the first accordion.

---

3. Accordion content padding

Inside accordion content add horizontal padding.

Content padding:
30px left
30px right

Do not change the header padding (title + circle + arrow).

Only the content area.

---

4. Quiz block background

Change the background color of the quiz block.

Use:

#4B595E

This applies to the block containing:
– the quiz title
– "Проверим"
– the quiz cards

---

5. Spacing in theory

Reduce spacing around divider lines.

Spacing should match the spacing used in the "Цвет" lesson.

Currently the "Контраст" lesson has larger gaps.

Unify both lessons so spacing is identical.

---

6. Accordion scroll behavior

When a user opens an accordion, the screen should automatically scroll down to the opened content.

Currently it stays in place.

Implement smooth scroll so the opened content becomes visible.

Apply this behavior to all lessons.

---

7. Quiz button consistency

The "Начать квиз" button on the right side should appear consistently on all lesson pages.

Currently it disappears on some pages.

Ensure this widget behaves identically across lessons.

---

8. Card examples in quizzes

Some quiz examples are mismatched.

Review the examples and match the correct UI examples to the correct answers.

---

9. Apply changes to both lessons

Apply all these improvements to:

Цвет
Контраст

Both lessons must have identical structure and spacing.
Only the content should differ.