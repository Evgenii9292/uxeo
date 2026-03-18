UI PATCH — COURSES PAGE WIDGETS + CONTINUE BUTTON + COURSE PROGRESS

Apply only visual/layout fixes. Do NOT modify roadmap or quiz logic.



FIX 1 — MATCH THEORY PAGE WIDGET STYLE

The right widgets column on the Courses page must look identical to the widgets on the Theory page.

Use the same component styles used in TheoryPage.tsx.

Match:

• widget width
• padding
• border radius
• background color
• shadow
• spacing between widgets

Do not stretch them.



Layout must be:

LEFT
course cards

RIGHT
fixed widget column (same width as Theory widgets)



Example layout:

page-wrapper
display: flex

left-content
flex: 1

right-sidebar
width: 320px
flex-shrink: 0



FIX 2 — START → CONTINUE BUTTON

On the UX/UI course card change the button text dynamically.

Rules:

If user has NOT started the course  
button = "Начать"

If user already started the course  
button = "Продолжить"



Implementation example:

const hasStarted = courseProgress.completedLessons > 0

const buttonLabel =
  hasStarted ? "Продолжить" : "Начать"



FIX 3 — COURSE PROGRESS BAR

Add a progress bar to the course card.

Place it ABOVE the badges row.

Example layout:

Course Title
Progress Bar
Badges (modules / lessons)



Progress calculation:

progress = completedLessons / totalLessons



Example:

24 lessons total
3 completed

progress = 3 / 24



Render:

<div className="course-progress">
  <div
    className="course-progress-fill"
    style={{ width: `${progress * 100}%` }}
  />
</div>



Style

height: 6px
border-radius: 4px
background: rgba(255,255,255,0.1)

fill color:
same orange used in roadmap progress.



FIX 4 — CARD HEIGHT

Course cards are slightly compressed vertically.

Increase card vertical padding by ~8px
to make cards appear less squeezed.



EXPECTED RESULT

• widgets match theory page style
• button switches to "Продолжить" after starting course
• course card shows progress bar
• cards feel slightly taller and cleaner