mpt"}
Connect the quiz reward system with the user XP state.

Currently the XP value in the header is hardcoded.

We need to make it dynamic.

---

XP SYSTEM

Create a global user state that stores XP.

Example structure:

user = {
  xp: number
}

Initial value:
xp = 0

---

QUIZ REWARD

When the user finishes the quiz question:

Add 25 XP to the user state.

Example:

user.xp += 25

---

HEADER DISPLAY

The XP value displayed in the header must read from the user state.

Remove the hardcoded value (12500).

Display the real XP value.

---

DASHBOARD

The main screen (courses page) must also display the same XP value from the user state.

The header and dashboard must always stay synchronized.

---

IMPORTANT

Do not modify layout or styling.

Only connect the quiz result to the XP state and update th