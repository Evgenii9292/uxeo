Edit the selected Notifications screen frame.

Do not generate a new layout.
Do not redesign anything.

Recreate the screen exactly as in the provided reference frame using the existing styles and components in the file.

Use the same layout grid and column width used on other pages such as Courses and Theory.

--------------------------------------------------

GLOBAL RULES

Do not change:

sidebar  
header structure  
right widgets  
global typography  
card radius  
color styles  
spacing system

Reuse the same auto-layout structure used across other pages.

--------------------------------------------------

FILTER BAR

At the top of the page there are filter tabs:

Все  
Непрочитанные  
Требуют действия

These are clickable filters.

Behavior:

Все → show all notifications  
Непрочитанные → show only unread notifications  
Требуют действия → show notifications that contain an action button

Each filter should update the visible list of notifications.

Unread counter badge must update dynamically.

Example:
if there are 2 unread notifications → badge shows "2".

--------------------------------------------------

STICKY HEADER AREA

Everything above the divider line must stay fixed.

Fixed elements:

Page title  
Filter tabs  
Divider line

These elements must not scroll.

--------------------------------------------------

SCROLLABLE CONTENT

The notifications list below the divider must scroll.

Notifications should scroll under the divider.

Use the same fade overlay used in other screens when content scrolls under a fixed element.

Reduce the current fade intensity slightly so it feels lighter than the current implementation.

--------------------------------------------------

DATE GROUPING

Notifications are grouped by date:

Сегодня  
Вчера  
Ранее

These labels must update automatically depending on notification timestamps.

Example:

notifications from today → "Сегодня"  
notifications from yesterday → "Вчера"  
older notifications → "Ранее"

--------------------------------------------------

NOTIFICATION STATES

Implement the following states exactly as shown in the reference:

Unread notification  
Read notification  
Notification with action button  
Notification without action

Unread notifications show the orange dot indicator.

--------------------------------------------------

NOTIFICATION TYPES

Display all example notification types exactly as in the design so we can review them.

These are temporary demo states.

Do not hide them yet.

Types:

Work reviewed  
Weekly challenges available  
XP reward  
League promotion  
Streak reminder  
New module available  
Task started

--------------------------------------------------

MODULE PREVIEW IMAGE

For the notification "Доступен новый модуль UX-исследования":

show the module preview image.

For now use the image from the first course module in the file.

Later this will dynamically load the module thumbnail.

--------------------------------------------------

EMPTY STATE

At the bottom show the empty state block exactly as in the design:

"У вас пока нет уведомлений  
Начните обучение, и мы будем сообщать о прогрессе."

This block is only shown when the notification list is empty.

For now keep it visible for preview.

--------------------------------------------------

FINAL GOAL

Replicate the layout exactly as in the reference frame.

Use the existing design system and auto-layout structure used across the product.