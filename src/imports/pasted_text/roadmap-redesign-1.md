We are redesigning the MAIN ROADMAP screen of the UXEO course interface.

Important:  
Work ONLY on the desktop layout of this screen.  
Do not modify other screens, breakpoints, or components.

I will provide a reference image of the new roadmap style.  
Use it as the visual direction.

---

### 1. REMOVE THE CURRENT STRUCTURE

Remove the large lesson card layout that sits in the center of the screen.

Instead, the roadmap itself becomes the main interface.

The roadmap should be vertically scrollable.

---

### 2. ROADMAP REDESIGN

The roadmap should represent the entire course path.

Requirements:

• Replace the current dotted path with a more organic curved path similar to the reference I provide.  
• Keep lesson nodes as circular points on the path.  
• Nodes represent lessons.  
• Some nodes are completed, some locked, some active.

Use the current node visual style but improve the path styling.

---

### 3. MODULE SEGMENTS

The roadmap should visually show module sections.

Example:

Module 1  
→ group of lessons

Module 2  
→ next group

These modules can be separated using:

• subtle text labels
• spacing
• small decorative elements

---

### 4. HANDWRITTEN NOTES

Add small handwritten-style annotations inspired by the reference image I provide.

Examples:

• "Ты здесь"
• "Мы с тобой"
• small arrows or playful notes

Rules:

• keep them subtle
• do not overuse them
• maximum 1–2 per module section

---

### 5. LESSON NODE INTERACTION

Clicking a lesson node opens a small popup near the node.

I will provide the popup design reference.

The popup must:

• appear next to the clicked node
• be smaller than the previous card
• contain:
  – lesson title
  – short description
  – progress bar
  – buttons (Quiz / Theory)

Use the exact dimensions from the popup reference I provide.

---

### 6. RIGHT SIDE WIDGET COLUMN

Keep the widget column on the right side.

Use the existing widgets already implemented:

• Weekly challenges
• League progress
• Daily quest

These widgets remain vertically stacked and sticky.

---

### 7. CONTINUE BUTTON

Add a prominent "Продолжить" button on the right side near the widgets.

Purpose:
quick access to the next available lesson.

Clicking this button should scroll the roadmap to the current lesson and open its popup.

---

### 8. SCROLL BEHAVIOR

The roadmap should scroll vertically.

The widgets on the right remain sticky while the roadmap scrolls.

---

### 9. DO NOT MODIFY

Do not change:

• sidebar layout
• header layout
• typography system
• colors
• other pages

Only restructure this roadmap screen.

---

Goal:  
The roadmap becomes the primary navigation of the course, similar to Duolingo-style progression.