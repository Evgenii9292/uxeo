Fix roadmap circle background and lesson progression logic.

Do NOT change layout or animations.

---

1. BACKGROUND CIRCLE COLOR

The background circle behind nodes has the wrong color.

Use this color:

#333C40

This circle should match the roadmap path tone.

---

2. BACKGROUND CIRCLE POSITION

The background circle is slightly too high.

Move it down by 2px.

The node circle should appear visually centered inside the background.

---

3. BACKGROUND CIRCLE VISIBILITY

The background circle must appear only on the selected node.

Rules:

Selected node  
→ background circle visible

Other nodes  
→ background circle hidden

Currently the orange node always has a circle — this is incorrect.

It should only appear on the node that the user clicks.

---

4. GREEN NODE BACKGROUND

Completed nodes must also support the background circle when selected.

Example:

If user clicks a completed lesson  
→ background circle appears behind the green node.

---

5. LESSON PROGRESSION RULE

Unlock the next lesson when progress is >= 50%.

Example with 5 questions:

3 / 5 → next lesson unlocks

---

6. ROADMAP STATE TRANSITION

Example flow:

User finishes lesson "Цвет" with 3 / 5.

State changes:

Цвет  
→ becomes GREEN  
→ show circular progress = 60%

Иерархия  
→ becomes CURRENT (orange)

The roadmap must update automatically.

---

7. PARTIAL COMPLETION VISUAL

If lesson is completed but not perfect:

Example: 3 / 5

Node should show:

green circular progress border  
with percentage inside

Example:

60%

If lesson is perfect:

5 / 5

Show full green node with checkmark.

---

8. LABEL HIGHLIGHT

The current lesson label must be bright white.

Other lesson labels remain muted.

Example:

Цвет → white  
Иерархия → muted

After unlocking next lesson:

Иерархия → white  
Цвет → muted

---

Do not modify node size, layout or animations.

Only fix:

- circle color
- circle position
- circle visibility
- lesson progression logic.