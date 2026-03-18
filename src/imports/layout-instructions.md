The layout is still incorrect.

Do not redesign anything.

Use the provided Figma frame and reproduce the structure exactly.

We will fix ONLY two things for now:
1) the main container
2) the first accordion section

Main container

There must be one large card container that wraps the entire theory content.

Background color:
#404D52

Inside this container must be:

- the lesson title block
- all accordion sections
- the bottom quiz button

Everything must live inside this single card.

Do NOT create separate background containers.

Accordion structure

Each accordion item must also be a card inside the main container.

Structure:

Main card
 ├ Title section
 ├ Accordion card
 ├ Accordion card
 ├ Accordion card
 └ Start Quiz button

Accordion card rules:

The accordion header and its content must belong to the SAME container.

Do not place the theory content into a separate shape.

Correct structure:

Accordion card
 ├ header
 └ content
     ├ theory text
     └ mini quiz

Spacing

Use the exact spacing values from the Figma layout.
Do not guess spacing.

Mini quiz container

The mini quiz block ("Какой интерфейс лучше?") must be inside its own card container inside the accordion content.

Hierarchy:

Accordion content
 ├ theory text
 └ quiz card

Focus only on the FIRST accordion:
"Роль цвета в интерфейсе"

Do not change other sections yet.

Goal

Reproduce the Figma layout exactly and fix the container hierarchy.