Update the Theory page ("Цвет в UX/UI") and implement responsive layouts for:

• Desktop (1440)
• Laptop (1280)
• Tablet (iPad)
• Mobile

Use the current desktop design as the base. Do NOT redesign components. Only adapt layout and interactions.

------------------------------------------------
DESKTOP (1440)
------------------------------------------------

Keep the current layout:

Left sidebar
Main content
Right widgets column

Spacing rules:

20px between header and content
20px between content and widgets
20px between widgets

Container behavior:

Main layout max-width: 1440px.

When screen width is larger than 1440px, the layout stays centered and does not stretch.

------------------------------------------------
LAPTOP (1280)
------------------------------------------------

When screen width is below 1440px, scale layout fluidly down to 1280px.

Rules:

Maintain:
20px spacing from sidebar
20px spacing from widgets
20px spacing from header

Do NOT change typography or spacing scale.
Only adapt container width.

------------------------------------------------
TABLET (iPad)
------------------------------------------------

Layout changes:

Remove right widgets column.

Move widgets into the sidebar under navigation icons.

Sidebar becomes icon-only navigation.

Structure:

Sidebar (icons)
Main content centered

Content container max width:

820–900px

All components remain:

Hero block
Accordion sections
Quiz block
CTA button

Accordion behavior stays identical to desktop.

------------------------------------------------
MOBILE
------------------------------------------------

Structure:

Header
Hero section
Accordion sections
Quiz block
Sticky CTA
Bottom navigation

Bottom navigation contains:

Обучение
Вызовы
Уведомления
Профиль

CTA button ("Начать квиз") remains sticky above the bottom navigation.

Spacing:

16–20px horizontal padding
20px between content blocks

------------------------------------------------
MOBILE HERO BEHAVIOR
------------------------------------------------

Hero section contains:

Hero image
Lesson title
Metadata ("7 мин • Новичок")

Scrolling behavior:

When scrolling down:

• Title and metadata scroll away normally.
• The hero image stays behind and slowly fades.
• Content scrolls over the hero image.

This creates a subtle parallax effect.

------------------------------------------------
HEADER
------------------------------------------------

Header must remain sticky.

Background must NOT be transparent.

Optional improvement:
apply a soft glassmorphism blur effect so content slightly blurs behind the header while scrolling.

------------------------------------------------
ACCORDION
------------------------------------------------

Accordion behavior must stay the same as desktop:

Click/tap expands content
Smooth scrolling to opened content

Spacing rules remain identical.

------------------------------------------------
FEEDBACK BUTTON (GIFT ICON)
------------------------------------------------

In the mobile version add a floating "gift" icon.

Purpose:
Leave feedback.

Clicking the icon opens a modal popup.

Create a temporary feedback modal with sample questions such as:

• How useful was this lesson?
• Was something unclear?
• What could be improved?

Include simple options (rating or short text input).

This is a placeholder UI that can be improved later.

The gift icon appears only on mobile.

------------------------------------------------
IMPORTANT
------------------------------------------------

Do NOT change:

colors
typography
border radius
component styles

Only adapt layout and interactions for responsive behavior.

Use the existing "Цвет в UX/UI" lesson page as the base example.