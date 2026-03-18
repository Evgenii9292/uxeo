19372"}
We now need to implement the second screen of the app.

IMPORTANT RULES

Do NOT rewrite the layout.
Do NOT modify Sidebar or global layout.

Reuse existing components wherever possible.


SCREEN STRUCTURE

The new screen must reuse the existing layout:

- Sidebar (unchanged)
- Header (same component)
- Right widgets column (reuse existing components)


HEADER

The header is identical but with small differences:

Courses page:
Title = "Курсы"

Lessons page:
Back arrow + Title "Уроки"


Header structure:

Header
 ├ BackButton (optional)
 ├ Title
 └ Stats


RIGHT COLUMN

The right column must reuse the same widgets:

- WeeklyChallenge
- LeagueProgress
- DailyChallenge

Do not recreate them.


MAIN CONTENT

Replace the course list with a lesson roadmap.


Lessons page structure:

MainColumn
 ├ LessonCard
 ├ LessonCard
 └ LessonCard


Reuse CourseCard component if possible.


IMPORTANT

Do not duplicate code.
Extract reusable components if needed.

Focus on clean archit