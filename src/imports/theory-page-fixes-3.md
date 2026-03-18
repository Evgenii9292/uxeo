Fix two issues on the Theory page.

--------------------------------

1. QUIZ CARD IMAGE SIZE AND ALIGNMENT

Current problems:

• The interface images inside the quiz cards are too small.
• The images are not centered.
• Some images appear pushed to the bottom-right corner.
• The examples are hard to see.

Goal:

Make the interface examples larger and perfectly centered inside the cards.

Rules:

Do NOT change the card layout or card dimensions.

The image must scale bigger inside the card but still keep padding around it.

Image rules:

• width: 90%
• height: auto
• max-height: 90%
• object-fit: contain

Centering rules:

The image must always be centered horizontally and vertically.

Image container must use:

display: flex  
align-items: center  
justify-content: center  
width: 100%  
height: 100%

Important:

Remove any absolute positioning from the image.

The image must NOT be anchored to bottom or right.

It must stay centered in all states:

• idle  
• selected  
• correct (green card)  
• wrong (grey card)

Apply this fix to every mini quiz card in every accordion.

--------------------------------

2. LAST ACCORDION BUTTON LOGIC

Current problem:

The button changes to “Начать квиз” only if the user answers the mini quiz correctly.

This is wrong.

Goal:

In the LAST accordion only, the button must change to:

⚡ Начать квиз

after the user selects ANY answer in the mini quiz.

Rules:

The change must happen regardless of whether the answer is correct or wrong.

New logic:

User selects an option in the last mini quiz  
→ show feedback  
→ button changes to orange  
→ text becomes:

⚡ Начать квиз

This must happen for BOTH:

• correct answer
• wrong answer

Important:

Do NOT change the logic of other accordions.

This rule applies ONLY to the final accordion before the main quiz.

--------------------------------