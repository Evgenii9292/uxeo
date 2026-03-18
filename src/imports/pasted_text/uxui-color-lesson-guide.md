IMPORTANT — READ BEFORE STARTING

You must use the Figma frame I provided as the single source of truth for the design system.

All styles must be taken directly from that frame.

DO NOT invent new colors, icons, sizes, paddings, layouts, or typography.

Do NOT modify the global styles of the website.

The previous update incorrectly changed the page background and other styles across the entire site. This must NOT happen again.

Only apply changes to the Theory page for the lesson "Цвет в UX/UI".

Do not modify any other pages.

---

SOURCE OF STYLES

Use the provided Figma frame to extract:

• colors  
• typography  
• icon sizes  
• paddings  
• spacing  
• border radius  
• layout structure  
• navigation styles  
• bottom bar styles  

Everything must match the frame exactly.

---

IMPLEMENTATION ORDER

You must implement layouts in this order:

1. Mobile
2. Tablet
3. Desktop (1440 / 1280)

Do not start with desktop.

Start with mobile first.

---

MOBILE LAYOUT

Use the mobile layout exactly as shown in the frame.

Structure:

Header  
Hero section  
Accordion sections  
Quiz block  
Sticky CTA button  
Bottom navigation bar

Use the exact icons and sizes from the frame.

Bottom navigation must include:

• Обучение  
• Вызовы  
• Уведомления  
• Профиль  

Do not redesign the navigation.

---

STICKY CTA

The button "Начать квиз" must remain sticky above the bottom navigation.

Do not change its color, shape, shadow, padding, or typography.

All styles must come from the provided frame.

---

FEEDBACK BUTTON

Keep the floating gift icon.

This opens a feedback popup.

Create a simple placeholder popup with questions like:

• How useful was this lesson?
• What was unclear?
• What could be improved?

This is temporary UI.

---

QUIZ BLOCK

Apply the correct background hierarchy.

Page background  
#394449

Quiz container background  
#3F4C52

Inner quiz cards  
#394449

These colors must only apply inside the quiz block.

Do NOT change global page background for other parts of the website.

---

QUIZ TITLE SPACING

Increase quiz title size by +5px.

Increase spacing between quiz title and quiz cards by +5px.

Currently the title is too close to the cards.

---

HERO SECTION

Hero must contain only:

• illustration  
• lesson title  
• badges (7 min, Новичок)

Remove the descriptive paragraph under the title.

Users will read explanations in the lesson content.

---

ACCORDION

Accordion behavior must remain identical to the current implementation.

Tap → expand  
Smooth scroll to opened content.

Spacing must match the provided layout.

---

TABLET LAYOUT

Tablet must use the layout provided in the frame.

The sidebar must match the frame exactly.

Do not create a new sidebar layout.

Use:

• the same icon sizes  
• the same spacing  
• the same paddings  
• the same sidebar width  

Tablet structure:

Sidebar (icons)  
Centered content container

Content width:

820–900px.

---

DESKTOP (1280 / 1440)

After mobile and tablet are complete, apply the same design system to desktop.

Keep the existing layout:

Sidebar  
Main content  
Right widgets column

Only adjust spacing and quiz block styles.

---

FINAL CHECK

Before finishing:

• Verify colors match the frame.  
• Verify icon sizes match the frame.  
• Verify paddings match the frame.  
• Verify mobile layout matches the frame exactly.  

Do not redesign any components.