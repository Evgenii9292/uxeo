Adjust several UI details in the quiz screen. Do NOT change the layout architecture or existing components.

1. Selected answer border

When an option is selected, the border is currently too strong.

Reduce the visual intensity of the border to about 50%.

The selection should feel softer.  
Keep the same color but lower the opacity or brightness.

The goal is subtle selection, not a heavy outline.

---

2. Question title width

The title currently stretches across the entire container and becomes too wide.

Limit the readable width of the title.

Add horizontal padding so the title has about 150px margin on each side inside the container.

This will keep long questions readable and visually balanced.

---

3. Prevent layout jumping between questions

Right now the layout jumps when the question title becomes two lines instead of one.

The layout must stay stable.

Rules:

• The image card and answer options must stay at the same vertical position between questions.  
• Only the title area should expand upward when it takes two lines.

Implement this by giving the title area a fixed vertical space (min-height) so that the rest of the content does not shift.

The cards and answers must not move when switching between quiz questions.

---

4. Incorrect answer sound

The current wrong-answer sound has a noticeable click at the beginning.

Replace it with a similar feedback sound but without the initial click.

The sound should feel like a soft negative confirmation, not a sharp glitch.