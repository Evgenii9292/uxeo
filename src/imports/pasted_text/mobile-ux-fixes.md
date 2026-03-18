We are refining mobile UX. Do NOT redesign. Fix behavior and layout issues only.

---

1. QUIZ HEADER (Close button)

- Remove circular background
- Keep only "X" icon
- Size = similar to lightning icon
- Align it horizontally with:
  - progress bar
  - XP icon
- Place it to the LEFT of progress bar

---

2. MATCHING QUIZ (Connect logic)

Current behavior is broken.

Fix logic:

- User can start from ANY card (top or bottom)
- Then select matching card from opposite group
- Selection must be flexible (not forced top → bottom)

Optional:
- support tap-tap interaction (no drag required)

---

3. CONTINUE BUTTON (critical)

Fix positioning:

- position: fixed
- bottom: above tab bar
- full width
- always visible

Fix issue:
- must NOT be hidden under browser UI
- must respect safe-area-inset-bottom

---

4. ROADMAP FLOATING BUTTONS (Figma + Gift)

Fix:

- add spacing between them: 10px
- position ABOVE Continue button
- ensure no overlap with CTA

---

5. ROADMAP NODE SPACING

Fix right-side circles:

- add vertical spacing: 10px between nodes

---

6. REMOVE EXTRA BACKGROUND

Under Continue button:

- remove dark overlay / extra background block
- content below should NOT be covered

---

7. BOTTOM TAB BAR

- reduce height
- keep fixed (do NOT implement hide-on-scroll yet)

---

8. CHALLENGES PAGE

Fix spacing:

- add vertical spacing between sections: 20px

---

9. HEADINGS

Reduce size of section titles:

- "Статистика"
- "Текущий курс"
- "Достижения"

Match size with:
- Profile header
- UX/UI title

---

IMPORTANT:

- DO NOT change architecture
- DO NOT redesign UI
- DO NOT introduce new components
- ONLY fix layout, spacing, and interaction issues

---

RESULT:

- Quiz usable on mobile
- No overlaps
- Clean spacing
- Consistent UI