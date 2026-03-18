We are now fixing two things:

1) Desktop layout when screen width is LESS than 1440px  
2) Final adjustments for the MOBILE version

Do not redesign components.  
Use the existing design system.

---

DESKTOP LAYOUT BELOW 1440px

When screen width becomes smaller than 1440px, the layout should behave differently.

The right widgets column remains fixed.

The main content area must expand to occupy the remaining available space.

Remove the background container behind the hero image (same rule used in other breakpoints).

The hero structure should be:

• image on top  
• lesson title below  
• badge aligned to the right of the title

---

HEADER SPACING

The spacing on the right side of the header is incorrect.

The padding between the header content and the right edge of the screen must be the same as the spacing between the sidebar and the left side of the header.

Left and right spacing must be symmetrical.

---

QUIZ QUESTION TITLE

The question title inside quiz cards is currently too large.

Reduce it.

Use the same typography size used in accordion titles.

Also remove bold weight.

Use semi-bold or medium instead.

---

ACCORDION WIDTH

Accordion blocks are currently too wide.

Reduce their width by approximately 20%.

Verify that all accordion containers still follow the 20px border radius rule.

---

QUIZ BACKGROUND COLOR

The background behind the quiz cards must be:

#394449

Ensure that the quiz container uses this color.

---

TABLET BREAKPOINT

Tablet layout begins at 1280px.

Below this width the layout should switch to tablet behavior.

Tablet content must be centered, not attached to the left.

---

TABLET SIDEBAR

Tablet sidebar must have a background color:

#343E42

Icons in the sidebar are currently too small.

Increase icon size slightly for better readability.

---

ACCORDION SIZE

Accordion blocks should be about 20% narrower.

Check all border radiuses again.

Everything must follow:

20px radius for cards  
15px radius for buttons

---

QUIZ CARD CONTENT

The inner UI inside quiz cards currently touches the edges.

Add 20px padding on all sides inside quiz cards.

The inner interface must not touch the card edges.

---

START QUIZ BUTTON

The orange "Начать квиз" button must remain fixed on the right side.

Do not allow it to move with the content.

Fix its press animation.

It must behave the same way as other buttons in the interface.

---

CONTENT WIDTH BEHAVIOR

The layout should start shrinking only at 1000px width.

At around 990px the responsive compression can begin.

Before that, content should remain flexible.

---

MOBILE VERSION FIXES

After the last accordion there is currently a very large empty space.

Remove it.

There should be only 20px spacing between the last accordion and the orange CTA button.

---

HEADER BORDER

Use the same border used in the bottom navigation.

Apply that exact border style under the header.

Same color  
Same thickness.

---

TEXT WEIGHT SYSTEM

Remove bold text where it is unnecessary.

Replace bold with semi-bold or medium.

This applies to:

• quiz titles  
• accordion titles  
• headers

Exception:

The word "Верно" must remain semi-bold.

---

MOBILE ACCORDION PADDING

Reduce horizontal padding inside accordion headers slightly.

Left and right padding should be about 5px smaller.

---

MOBILE ACCORDION TYPOGRAPHY

Accordion title font size must be 22px.

Weight should be semi-bold.

---

FLOATING CIRCLES

Floating circles on mobile are slightly distorted.

They must be perfect circles.

Spacing between them should be 20px.

Ensure they are not stretched vertically.

---

FINAL CHECK

Verify:

• desktop layout below 1440 behaves correctly  
• tablet layout starts at 1280px  
• content shrinks only near 1000px  
• mobile spacing fixed  
• quiz card padding corrected  
• header spacing symmetrical  
• typography weights adjusted