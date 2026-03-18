We need to fix the layout system across breakpoints.

The problem is that the container behavior is not defined clearly, which causes incorrect stretching when the screen width becomes smaller than 1440px.

Implement the following layout rules.

---

DESKTOP LAYOUT STRUCTURE

The layout consists of three main zones:

1) Left sidebar (fixed)
2) Main content area (flexible)
3) Right widgets column (fixed)

The right widgets column must always stay pinned to the right side of the screen.

It should NOT move or stretch.

The main content area in the middle should expand or shrink depending on screen width.

Spacing between the main content and the right widgets must always be 20px.

---

BEHAVIOR BELOW 1440px

When the screen becomes smaller than 1440px, the middle content should shrink gradually.

Do not shrink the right widgets.

Only the center content area should become narrower.

Ensure the spacing between the center content and right widgets remains 20px.

---

TABLET BREAKPOINT

Tablet layout begins at 1280px.

When width becomes 1280px or less, switch to tablet layout.

Tablet layout must be centered, not attached to the left edge.

The content should be visually centered between the sidebar and the right edge of the screen.

Do not pin the tablet layout to the left side.

---

TABLET CARD ADJUSTMENT

On tablet, reduce the internal UI inside the quiz example cards slightly.

Reduce internal padding by 10px on each side so the cards maintain proper proportions.

Do not change the outer card container.

---

TYPOGRAPHY SYSTEM

Remove bold and semi-bold from this screen.

Use medium as the highest weight.

Apply this rule to:

• titles
• accordion headers
• buttons
• labels

We are testing a lighter typography hierarchy.

---

HEADER HEIGHT

Desktop header height should be 70px.

Everything inside the header should be vertically centered.

---

HEADER SHADOW

There is a grey shadow or gradient above the hero section.

Remove it.

The background should match the page background color.

---

MOBILE CIRCLES

In the mobile layout, the floating circles appear oval.

Ensure they are perfectly circular.

Spacing between circles should remain 20px.

---

FINAL GOAL

The layout container created here will become the base layout system for the entire product.

Make sure the layout scales smoothly between:

1440 → 1280 → tablet → mobile