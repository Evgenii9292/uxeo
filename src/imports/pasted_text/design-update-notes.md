IMPORTANT:  
You did not follow the provided layouts in the previous task.

Before making any changes:

1. Carefully review the layout files I sent.  
2. Use those layouts as the single source of truth for styles, spacing, typography, icons and structure.  
3. Do NOT redesign anything.  
4. Replicate the design exactly and only apply the requested adjustments.

The tablet layout must also be implemented — it was not done previously.

---

## GLOBAL DESIGN RULES

Use the styles from the provided layouts:

- colors  
- icons  
- typography  
- spacing  
- shadows  
- border radius  
- layout structure  

Do NOT invent new styles.

---

# COLOR SYSTEM (UNIFY BACKGROUNDS)

Use the following background hierarchy:

Page background  
#394449

Quiz container background  
#3F4C52

Inner quiz card background  
#394449

This hierarchy must be consistent everywhere.

---

# THEORY PAGE HERO CHANGES

Remove the description text under the title.

Hero should contain only:

- illustration
- title
- badges (7 min, Новичок)

Layout:

image  
title  
badges aligned to the right

The explanatory paragraph should be removed completely.

Users will read the explanation inside the lesson content.

---

# HEADER UPDATE

The header currently feels visually heavy.

Test a lighter header:

Remove the solid background and use:

- a thin divider line
- optional soft blur effect

Example behavior:

background: transparent or very light  
border-bottom: subtle line

Goal: cleaner visual hierarchy.

If readability becomes worse, use a very light translucent background.

---

# QUIZ BLOCK SPACING

Increase spacing between lesson text and quiz container.

Current spacing is too tight.

Add:

+10px vertical spacing above the quiz container.

This creates better separation between reading content and interaction.

---

# TABLET LAYOUT (THIS WAS NOT IMPLEMENTED)

Tablet must follow the layout I provided.

Rules:

Right widgets column must be removed.

Widgets move into the sidebar under navigation icons.

Sidebar becomes icon-based navigation.

Structure:

sidebar (icons)  
content centered

Max content width:

820–900px

Do NOT change typography.

---

# MOBILE LAYOUT

Use the mobile layout I provided as reference.

Structure:

Header  
Hero section  
Accordion sections  
Sticky CTA  
Bottom navigation

CTA button:

"Начать квиз"

Must remain sticky above the bottom navigation.

---

# MOBILE HERO SCROLL EFFECT

When scrolling:

Title and metadata scroll away normally.

Hero image stays in place briefly and fades behind the content.

Content scrolls over the image.

This creates a subtle parallax effect.

---

# ACCORDION BEHAVIOR

Accordion interaction must stay identical to desktop:

tap → expand  
smooth scroll to opened section

Spacing must match desktop layout.

---

# FEEDBACK BUTTON (GIFT ICON)

On mobile, keep the floating gift icon.

Purpose:

Leave feedback.

Click opens a modal popup.

Create a temporary popup with simple questions:

• How useful was this lesson?  
• Was something unclear?  
• What should we improve?

This is a placeholder UI for now.

---

# FINAL CHECK

After implementing the changes:

1. Verify desktop layout matches the reference design.
2. Implement tablet layout (it was missing previously).
3. Apply the updated color hierarchy.
4. Apply the updated hero structure.
5. Apply spacing fixes for the quiz container.

Follow the provided layouts exactly.