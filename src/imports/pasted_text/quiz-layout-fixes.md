Fix ONLY layout and positioning issues in quiz components. Do NOT change any business logic, state management, or component structure.

We have 3 quiz types:
1) Single choice (one answer) — image on the left, options on the right  
2) Multiple choice — same layout but with checkboxes  
3) Compare (2 options with images)  

---

CURRENT PROBLEMS:
- Cards sometimes disappear or are not visible  
- Cards shift vertically or go out of container  
- Layout breaks more with each next quiz  
- Compare quiz images are not centered (shifted top-right)  

---

ROOT CAUSE (DO NOT IGNORE):
This is a layout issue caused by:
- misuse of flex centering  
- overflow clipping  
- elements leaving normal document flow  

---

STRICT RULES (FOLLOW EXACTLY):

1. NEVER use:
- position: absolute (for main layout elements like cards)
- transform: translate for positioning
- margin-top hacks for vertical alignment

2. REMOVE:
- overflow: hidden from main layout containers
- any negative inset or offset values

3. FIX ROOT CONTAINER:

Replace:
flex + items-center + justify-center

With:
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: flex-start;

4. CARD LIST CONTAINER:

Must be vertical flow, NOT centered block.

Use:
display: flex;
flex-direction: column;
gap: 16px;
width: 100%;
max-width: 520px;
margin: 0 auto;

5. CARD COMPONENT:

Replace:
- fixed height (h-[80px])
- shrink-0

With:
min-height: 80px;
width: 100%;
position: relative;

6. IMAGE + OPTIONS LAYOUT (single & multiple):

Use stable 2-column layout:

display: flex;
align-items: center;
gap: 32px;

Left: fixed image container  
Right: flexible options list  

Image container:
width: 320px;
flex-shrink: 0;

Options:
flex: 1;

7. COMPARE QUIZ (CRITICAL FIX):

Images must be perfectly centered.

Use:
display: flex;
justify-content: center;
align-items: center;
gap: 24px;

Each image:
position: relative;
NO absolute positioning
NO transforms

8. HEIGHT STABILITY:

Ensure parent containers DO NOT collapse:

Use:
min-height: 100%;
padding-top: 100px;
padding-bottom: 120px;

DO NOT center vertically using flex.

---

EXPECTED RESULT:

- Cards always visible  
- No vertical drifting  
- No disappearing elements  
- Consistent layout across ALL quiz types  
- Compare images perfectly centered  

---

IMPORTANT:
This is NOT a redesign task.  
Do NOT modify styles, colors, or logic.  
ONLY fix layout and positioning.