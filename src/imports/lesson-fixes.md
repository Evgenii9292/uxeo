Apply the following fixes.

Important:  
Do NOT modify global layout components or other pages.

Only update:

• Lesson page  
• Lesson accordion logic  
• Header streak display  

---

1. "Теория" button navigation

The "Теория" button currently does nothing.

Fix behavior:

When the user clicks Теория from the lesson card, navigate to the lesson theory page.

Route should open the theory screen of that lesson.

Expected flow:

Lesson card  
→ click "Теория"  
→ open Lesson Theory page

Do not create a new page. Use the existing lesson theory page.

---

2. Streak display in header

The header currently shows a static value "0".

Replace this with the real streak value from user state.

Rules:

• show current streak days  
• update dynamically  
• use the existing streak logic

Example display:

🔥 3  
⚡ 175

Do not hardcode values.

---

3. First accordion section fixes

The first accordion ("Роль цвета в интерфейсе") did not receive the same updates as the other sections.

Apply the same behavior to the first accordion.

Fix the following:

• height must be ~120px  
• vertical alignment must be centered  
• padding must match other accordion cards

There should not be a large empty space above the text.

Structure:

Accordion card
height: ~120px  
display: flex  
align-items: center  

---

4. Accordion expand animation

The first accordion must also have the same expand animation.

Animation rules:

• smooth height expansion  
• content fade-in  
• duration ~200–220ms  
• ease-out

Right now the first accordion opens instantly.

---

Goal

Fix theory navigation, connect real streak value in the header, and apply the same layout + animation behavior to the first accordion section.