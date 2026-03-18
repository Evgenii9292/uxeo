We need to implement the header reward states for Streak and XP.

There are two states: inactive and active.

1️⃣ Inactive state (value = 0)

If the value is 0 the icon should look inactive.

Color:

#798589

This applies to:
• the icon
• the number next to it

Both should use the same muted color.

No glow and no gradient.

---

2️⃣ Active state (value > 0)

When the user gains points the icons become active.

🔥 Streak

Icon color:
#FFB121

Secondary color (hover / glow):
#BB8116

The number should use the same yellow color.

Optional: very subtle glow.

---

⚡ XP

Use an orange gradient.

Gradient:

#FF6B21 → #994014

Apply this gradient to:
• the lightning icon
• the number

---

3️⃣ Activation animation

When the value changes from 0 → >0:

Add a small activation animation:

scale: 0.95 → 1  
opacity: 0.6 → 1  
duration: 180ms  

This makes the reward feel responsive.

---

Summary

value = 0  
→ muted grey (#798589)

value > 0  
→ colored icons

Streak = yellow (#FFB121)  
XP = orange gradient (#FF6B21 → #99