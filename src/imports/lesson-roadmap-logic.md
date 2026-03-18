Implement the lesson roadmap logic and lesson switching system.

The roadmap must control the lesson card on the left.

---

1. LESSON STRUCTURE

Create 4 lessons in the module:

1. Контраст  
2. Цвет  
3. Иерархия  
4. Домашнее задание

Each lesson should contain:

- id
- title
- description
- status
- progress
- totalQuestions
- xpReward

Example structure:

lessons = [
{
id:1,
title:"Контраст",
description:"Как визуальные различия помогают выделять элементы интерфейса.",
status:"completed",
progress:5,
totalQuestions:5,
xpReward:125
},
{
id:2,
title:"Цвет",
description:"Базовые принципы цвета в интерфейсах: контраст, акцентные и нейтральные цвета.",
status:"current",
progress:3,
totalQuestions:5,
xpReward:125
},
{
id:3,
title:"Иерархия",
description:"Как размер, положение и контраст формируют порядок восприятия.",
status:"locked",
progress:0,
totalQuestions:5,
xpReward:125
},
{
id:4,
title:"Домашнее задание",
description:"Практическое задание на применение принципов UX.",
status:"locked"
}
]

---

2. ROADMAP STATES

Roadmap nodes have 3 states:

LOCKED  
- grey  
- clickable  
- opens preview card  
- buttons disabled  

CURRENT  
- orange  
- glow effect  
- active lesson  

COMPLETED  
Two visual variants:

60–99% completion  
- green circular progress border  
- show percent inside node (example: 75%)

100% completion  
- solid green node  
- checkmark icon

---

3. UNLOCK RULE

A lesson is considered completed when:

correctAnswers / totalQuestions >= 60%

Example with 5 questions:

3/5 → completed (next lesson unlocks)  
4/5 → completed  
5/5 → perfect (show checkmark)

If result <60% the lesson remains CURRENT.

---

4. ROADMAP CLICK BEHAVIOR

All roadmap nodes must be clickable.

When clicking:

completed or current lesson  
→ update the lesson card on the left

locked lesson  
→ open preview card with disabled buttons

The roadmap must NOT navigate to a new page.  
It only updates the lesson card content.

---

5. LESSON CARD SWITCHING

Clicking a roadmap node updates:

title  
description  
progress bar  
xp reward  
buttons state

Example states:

Completed lesson

Контраст  
Пройдено 5 / 5  

Buttons  
Повторить квиз  
Теория


Current lesson

Цвет  
Пройдено 3 / 5  

Buttons  
Продолжить  
Теория


Locked lesson

Иерархия  
🔒 Урок заблокирован  

Buttons disabled  
Начать квиз  
Теория

---

6. ANIMATIONS

Add simple state transition animations.

When a lesson becomes completed:

If 60–99%

animate circular border drawing from 0% to result percent (600–800ms)

If 100%

scale node slightly and animate checkmark stroke (400ms)

---

7. NEXT LESSON UNLOCK

When a lesson becomes completed:

next roadmap node changes

grey → orange

Add short glow pulse animation.

Previous lesson glow fades out.

---

8. HOMEWORK LESSON

For now the homework lesson uses the same card layout.

Title  
Домашнее задание

Buttons can remain disabled for now.

Later it will become a practical assignment.

---

Important:

Do not change layout.  
Do not change roadmap positions.  
Only implement lesson logic and node states.