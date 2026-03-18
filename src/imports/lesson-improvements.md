Implement the following improvements.

Do not change layout or styles unless specified.

---

1. LESSON CARD HEIGHT ANIMATION

Currently the lesson card jumps when switching lessons because the height changes instantly.

Fix this by animating the card height.

Behavior:

- Card width must remain fixed
- Only height should animate
- Animation duration: 320ms
- Easing: ease-out

When lesson content changes:

1. Measure current height
2. Replace content
3. Measure new height
4. Animate height between the two values

Important:

The card should smoothly expand or shrink instead of jumping.

The progress bar animation must remain unchanged.

---

2. QUIZ SOUND EFFECTS

Currently theory uses the same sound for all answers.

Change behavior to match the quiz system.

Correct answer  
→ play correct answer sound

Incorrect answer  
→ play incorrect answer sound

Use the same sounds that already exist in the current quiz system.

Do not add new sounds.

---

3. FINAL ACCORDION SCROLL BUG

When selecting an answer in the final accordion, the page scrolls upward.

This is incorrect.

Instead the view should scroll downward to reveal the "Начать квиз" button.

Behavior:

After selecting an answer in the last accordion:

- Wait ~200ms
- Smooth scroll to the bottom of the accordion content
- Ensure the "Начать квиз" button is visible

Do not scroll to the top.

---

4. ACCORDION PROGRESSION SYSTEM

Accordion sections must unlock sequentially.

Initial state when opening theory:

Accordion 1  
→ unlocked and open

Accordion 2, 3, 4  
→ locked

User cannot open locked accordions.

---

Unlock logic:

When user finishes accordion 1  
→ accordion 2 unlocks

When accordion 2 is finished  
→ accordion 3 unlocks

Continue this pattern.

After unlocking, the next accordion should automatically open.

---

5. RETURNING TO THEORY

If the user returns to theory after partially completing it:

All previously unlocked accordions remain accessible.

User can open any unlocked accordion.

Locked ones remain disabled.

---

6. VISUAL STATES

Unlocked accordion

- title color: white
- normal icon opacity

Locked accordion

- title color: muted grey
- check icon opacity: 40%

Locked accordions must not be expandable.

---

7. CHECKMARK BEHAVIOR

If an accordion question was answered correctly:

Show the checkmark as normal.

If the accordion is locked:

Checkmark icon should be visible but with 40% opacity.

---

Summary:

Implement:

- smooth lesson card height animation
- correct / incorrect answer sounds
- fix scroll direction in final accordion
- sequential accordion unlocking system
- correct visual states for locked sections.