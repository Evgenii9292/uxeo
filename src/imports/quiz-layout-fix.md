Fix the quiz screen layout structure.

Do NOT redesign the screen.  
Only correct the layout positioning.

---

TOP BAR

The back button must be pinned to the very top of the viewport.

Rules:

• position: fixed  
• top: 0  
• left: 20px  

It must NOT move when the screen height changes.

---

CENTER CONTENT

The following elements must stay centered in the screen:

• page title ("Какой экран лучше?")
• quiz cards

They must be vertically and horizontally centered inside the remaining viewport space.

Do NOT attach them to the top or bottom blocks.

---

BOTTOM PANEL

The feedback block and the "Продолжить" button must be pinned to the bottom of the screen.

Rules:

• position: fixed  
• bottom: 20px  
• horizontally centered

This block must stay at the bottom regardless of screen height.

---

"СООБЩИТЬ ОБ ОШИБКЕ"

This element must always be visible.

Position:

• bottom: 20px  
• left: 20px  
• position: fixed

It must not disappear.

---

IMPORTANT

The screen must be divided into three logical zones:

1. Top (fixed) → back button  
2. Center (flex center) → title + quiz cards  
3. Bottom (fixed) → feedback + continue button

Do not attach bottom elements to the quiz cards.

The bottom panel must stay anchored to the viewport.