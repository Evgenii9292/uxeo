Implement the following fixes.

Do not change layout styles except where specified.

---

1. ROADMAP NODE ALIGNMENT

The lesson nodes on the right side shifted away from the path.

Fix the alignment.

Requirements:

• Each node must be perfectly centered on the curved roadmap path  
• The vertical spacing between nodes must be equal  
• All nodes must follow the same curve of the path  

Currently some nodes are offset horizontally.

Re-center them relative to the path.

---

2. ACTIVE NODE RING BUG

The highlight ring currently stays under the "Цвет" node even when other nodes are selected.

This is incorrect.

Rules:

• Only the currently selected node may show the ring  
• When selecting another node the ring must disappear from the previous node  
• The ring must appear under the new selected node  

There must never be two rings at the same time.

---

3. THEORY ACCORDION STATE (RETURNING USER)

Current behavior is incorrect when a user returns to theory.

Correct behavior:

If the user previously reached section N in theory:

All sections from 1 to N must be unlocked.

Example:

User reached section 5 previously.

On returning to theory:

Sections 1–5 → unlocked  
Sections 6+ → locked

This allows the user to review earlier content.

---

4. ACCORDION OPEN STATE

Only one accordion section may be open at a time.

When opening a section:

• Previously opened section collapses  
• Newly opened section expands  

---

5. ACCORDION TITLE COLOR STATES

There are three states:

ACTIVE (opened section)  
→ title color: pure white

UNOPENED BUT AVAILABLE  
→ title color: muted grey

LOCKED  
→ darker grey (lower emphasis)

Currently the colors are inconsistent.

Fix according to the states above.

---

6. INITIAL STATE WHEN ENTERING THEORY

When entering theory:

• The first available section should be open automatically  
• Other unlocked sections should remain closed  
• Locked sections must remain closed and disabled

Example:

User reached section 5 earlier.

On entering theory:

Section 1 → open  
Section 2–5 → closed but clickable  
Section 6+ → locked

---

7. TITLE COLOR CHANGE ON OPEN

When an accordion section opens:

Its title must immediately change to white.

When it closes:

It returns to muted grey.

---

Summary of fixes:

• re-center roadmap nodes on the path  
• fix ring staying on the wrong node  
• unlock previously reached theory sections  
• enforce single-open accordion behavior  
• correct title color states.