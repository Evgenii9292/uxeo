3"}
We need to fix the Theory page alignment without breaking the layout again.

Important rule:

Do NOT use fixed heights like:

h-[calc(100vh-176px)]

This breaks the flex layout and causes the theory content to disappear.

The center column must use flex layout instead.

Correct approach:

The theory container must use:

flex-1  
overflow-y-auto

It must NOT have any fixed height.

---

Goal:

The top of the theory card must align with the top of the right sidebar card ("Недельные вызовы").

So both columns must start at the same vertical level.

HEADER

sidebar | theory column | right column  
        | theory card   | weekly challenges  

Both cards must align at the top.

---

How to implement:

Keep the current layout structure.

Only add spacing to the theory column so it aligns with the right sidebar.

For example:

padding-top or margin-top on the theory container.

Do not move the right sidebar.

Do not change the height of the container.

Do not add calc heights.

Only adjust the vertical spacing.

---

Fade effect and scroll behavior must remain unchanged.

The center column should still be the only scrollable ar