Implement the quiz screen using the provided Figma designs.

The images represent different STATES of the same screen, not different pages.

Do not create multiple pages.  
Create one interactive Quiz component with state transitions.

---

QUIZ FLOW

1. Initial state  
User sees the question and two UI options.

2. Option selected  
When the user clicks one option, that card becomes highlighted (selected state).

3. Submit answer  
After selecting an option the user clicks the button "Продолжить".

4. Feedback state  
Show whether the answer is correct or incorrect.

Display explanation text at the bottom of the screen.

5. Next question  
Show button "Далее" which proceeds to the next question.

Important:  
User must be able to continue even if the answer is incorrect.

---

INTERACTIONS

Card click → selects option  
Selected card becomes visually highlighted  

Button states:

• disabled before option selection  
• enabled after option selection  

After pressing "Продолжить" show the feedback state.

---

DESIGN RULES

Reuse the existing design system:

• buttons  
• colors  
• shadows  
• hover / active press interaction  
• typography  

Do not introduce new styles.

---

TECHNICAL CONSTRAINTS

Do NOT modify the current layout system.  
Do NOT modify Sidebar, Header or container logic.

Implement this as a new screen after the Welcome → Начать обучение step.

---

GOAL

The screen should visually match the Figma designs and behave as one interactive quiz component with multiple states.