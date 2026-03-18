Implement correct daily streak logic.

Do not change UI.

---

1. STREAK SHOULD BE AWARDED ONLY ONCE PER DAY

Currently the streak reward appears every time the user completes a quiz.

This is incorrect.

Streak must be granted only once per calendar day.

After the user receives the streak reward for that day, it should not appear again until the next day.

---

2. STREAK TRIGGER

The streak should trigger when the user completes any learning action for the first time that day.

Examples:

- finishing a quiz
- finishing a lesson
- completing theory interaction

But it must only trigger once.

---

3. DAILY LOCK

After the streak is granted:

Set a flag such as:

lastStreakDate = today

When the user completes another quiz the same day:

Do NOT show the streak animation again.

---

4. NEXT DAY BEHAVIOR

When the date changes:

If the user completes any lesson again:

- increment streak by +1
- show streak reward animation
- update lastStreakDate

---

5. EXAMPLE FLOW

Day 1  
User finishes quiz  
→ Streak +1  
→ Animation shown

User finishes more quizzes  
→ No additional streak reward

Day 2  
User finishes any quiz  
→ Streak +1 again  
→ Animation shown

---

6. OPTIONAL SAFETY CHECK

Use local date comparison (not session based).

Example:

if (today !== lastStreakDate)  
→ allow streak reward

else  
→ skip streak reward.

---

Summary:

Streak must be:

- granted once per day
- triggered by first learning activity
- locked for the rest of the day
- reset the next day.