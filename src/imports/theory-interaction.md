841"}
Implement the updated theory interaction logic using the provided Figma layout.

Important:
Do not modify existing design tokens, colors, typography, layout system or quiz logic.  
Use the Figma layout as the visual source of truth.

Theory structure

The theory page consists of multiple accordion sections representing lesson subtopics.

Initial state:
- The first accordion is open.
- All other sections are collapsed.

Accordion flow

Each accordion contains:
- theory content
- a mini interaction (question)
- answer feedback
- an action button

Interaction logic

1. The user selects an answer.
2. Feedback appears.
3. The action button becomes visible.

For regular sections:

The action button is:

"Продолжить"

When pressed:
- current accordion collapses
- next accordion opens
- page scrolls to the next section

Only one accordion should be open at a time.

Final section

The last accordion behaves differently.

After answering:

The action button should be:

"Начать квиз"

This button immediately launches the main lesson quiz.

Sticky main CTA

The page also contains a persistent sticky button at the bottom of the screen:

"⚡ Начать квиз +125 XP"

Rules:
- This button is always visible.
- It allows users to skip theory and start the quiz immediately.

Difference between buttons

Sticky button:
- primary
- includes XP reward
- includes lightning icon

Accordion final button:
- secondary
- smaller
- no XP indicator
- no lightning icon

XP system

Mini interactions inside theory may optionally give a small XP reward (for example +15 XP).

The main quiz still provides the primary reward.

Goal

Create a guided learning flow while still allowing users to skip theory:

Theory → mini interaction → next section → final section →