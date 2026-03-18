Implement a new onboarding screen that appears after the welcome screen and before the first quiz.

SCREEN PURPOSE  
Ask the user about their UX/UI experience level.

---

SCREEN STRUCTURE

Title (centered):
"Какой у вас уровень?"

Three selectable options:

1. Новичок  
2. Есть опыт  
3. Работаю дизайнером

Each option is a large rounded button styled exactly like the current onboarding cards.

Spacing and layout should match the design shown in the screenshot.

---

INTERACTION

There is NO "Next" button.

The interaction should work like this:

1. User clicks an option
2. The card briefly highlights with a green selection effect
3. Play a short confirmation sound (same sound used for correct quiz answer)
4. Immediately transition to the first quiz screen

Transition delay: ~250–300ms.

---

SELECTION VISUAL FEEDBACK

When a user taps an option:

• card slightly presses down (same button press animation used in the app)
• subtle green glow appears
• quick confirmation sound plays
• then transition to next screen

The animation must feel responsive and instant.

---

DATA STORAGE

Save the selected level in user state:

level = "beginner" | "some_experience" | "designer"

Mapping:

Новичок → beginner  
Есть опыт → some_experience  
Работаю дизайнером → designer

This value will later be used to adjust quiz difficulty.

---

NAVIGATION

Flow becomes:

Welcome screen  
→ Level selection screen (this new screen)  
→ First quiz

---

BACK BUTTON

The back arrow in the top-left corner should return to the Welcome screen.