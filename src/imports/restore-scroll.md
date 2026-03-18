The alignment is now correct, but scrolling is broken.

Currently the entire page is locked and does not scroll.

We need to restore the original scrolling behavior.

Correct behavior:

• header stays fixed  
• left sidebar stays fixed  
• right sidebar stays fixed  
• ONLY the center theory column should scroll

The page itself must NOT scroll.

---

Current issue:

Scrolling is disabled because the scroll container was moved or removed.

---

Fix:

Restore scrolling only for the center column.

The center theory container should use:

flex-1  
overflow-y-auto

The outer page container must NOT have overflow hidden or locked scroll.

Example layout:

HEADER (fixed)

sidebar | theory column (scroll) | right widgets

Only the theory column scrolls.

Sidebars and header stay fixed.

---

Important:

Do not change the alignment again.

The theory card must remain aligned with the "Недельные вызовы" card at the top.

Only restore the scroll behavior.