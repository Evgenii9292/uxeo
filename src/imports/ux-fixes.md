Apply the following fixes to the UXEO interface.

Do not redesign components.  
Only implement the logic and layout fixes below.

---

1. Fix Back button behavior

On the Theory page, the back button in the header ("← Теория") currently returns to the Courses page incorrectly.

Correct behavior:

Theory → Lesson → Courses

So when the user presses Back from Theory, it must return to the Lesson screen (the lesson page inside the course), not directly to Courses.

Navigation flow:

Courses  
→ Lesson  
→ Theory

Back from Theory must return to Lesson.

---

2. Course progress logic

On the Courses page, each course card must show progress based on completed tasks.

Progress bar must represent the percentage of completed tasks in the course.

Example:

If a course contains 3 lessons and each lesson contains tasks:

Lesson 1 — 2 tasks  
Lesson 2 — 3 tasks  
Lesson 3 — 4 tasks

Total tasks = 9

If the user completes:

2 tasks in lesson 1  
2 tasks in lesson 2

Completed tasks = 4

Progress bar = 4 / 9 = 44%

The progress bar must reflect this percentage.

Important rule:

Progress is based on completed tasks, not lessons.

---

3. Unlock next course rule

The next course must become available even if the previous course is not 100% completed.

Example rule:

If the user reaches 50% of the course tasks → unlock the next course.

The next course card becomes active and clickable.

---

4. XP calculation for course cards

The XP shown in course cards must be calculated dynamically.

XP per course = sum of XP from all lessons.

Example:

Lesson 1 = 125 XP  
Lesson 2 = 125 XP  
Lesson 3 = 125 XP  

Course total = 375 XP

The course card should display:

+375 XP

This must update automatically if lesson XP values change.

Apply this same logic to all course cards.

---

5. Fix scroll fade position in Theory

The top fade effect still appears too low.

Currently the content disappears at the level of the right sidebar ("Недельные вызовы").

This is incorrect.

Correct behavior:

The scroll content must extend all the way up to the header ("Теория").

The fade effect must start directly under the header.

So content scrolls under the header and gradually fades out.

Do not clip the scroll container earlier.

---

Goal

Implement:

• correct back navigation  
• dynamic course progress based on tasks  
• dynamic XP calculation  
• proper scroll fade position under the header