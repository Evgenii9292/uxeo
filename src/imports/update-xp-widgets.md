Connect the League progress and Daily Task widgets to the user XP state.

Currently these widgets use hardcoded values.  
They must be connected to the real XP value.

---

USER XP

The application already has a user XP state.

Example:

user.xp

Current value after the onboarding quiz should be:

25 XP

---

LEAGUE PROGRESS

Widget: "До открытия лиги"

Update the logic:

League requirement = 1000 XP

Progress value must use user XP.

Example:

user.xp = 25

Display:

25 / 1000 XP

Progress bar must fill proportionally.

Remove the old value (2000).

---

DAILY TASK

Widget: "Задание дня"

Change the task:

Old:
Получить 10 XP

New:
Получить 30 XP

Display:

user.xp / 30

Example:

25 / 30

The progress bar must fill based on current XP.

When user.xp ≥ 30:

• mark the task as completed
• show completion state

---

PROGRESS BARS

Both widgets must update automatically when XP changes.

Do not use hardcoded numbers.

Always read from:

user.xp

---

NAVIGATION AFTER ONBOARDING

After completing the onboarding quiz:

Navigate to the main screen:

/courses

NOT the lessons page.

Courses is the main dashboard of the app.

---

IMPORTANT

Do not modify layout or styling.

Only connect the widgets and navigation logic.