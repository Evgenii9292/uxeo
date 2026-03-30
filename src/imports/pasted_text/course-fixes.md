STRICT PATCH — FIX PAGE SCROLL AND COURSE PROGRESS

Apply two fixes. Do not modify roadmap logic.



FIX 1 — PAGE SCROLL BUG

Problem

The entire page moves when hovering outside the course cards.

The container under the header shifts vertically.

This happens because scroll is attached to body instead of the content container.



Fix

Disable scroll on body and move scroll to the main content container.



Implementation

body {
  overflow: hidden;
}

.page-wrapper {
  height: 100%;
  overflow: hidden;
}

.main-content {
  overflow-y: auto;
  height: calc(100% - HEADER_HEIGHT);
}



Result

• only course cards scroll
• header and sidebar stay fixed
• no page jump when hovering outside cards



FIX 2 — COURSE PROGRESS BAR

Problem

The course progress bar disappeared.

The bar must show overall course completion.



Progress rule

progress = completedLessons / totalLessons



Example

4 modules  
4 lessons per module  
totalLessons = 16



If user completed 1 lesson:

progress = 1 / 16



Implementation

Calculate totals from roadmap data.

Example:

const totalLessons =
  roadmap.modules.reduce(
    (sum, module) => sum + module.lessons.length,
    0
  )

const completedLessons =
  userProgress.completedLessons.length

const progress = completedLessons / totalLessons



Render progress bar:

<div className="flex-1 h-[6px] bg-white/10 rounded-[4px] overflow-hidden">
  <div
    className="h-full bg-gradient-to-b from-[#ff6b21] to-[#994014]"
    style={{ width: `${progress * 100}%` }}
  />
</div>



Layout

Button on left

Progress bar stretches to card edge using flex-1



Expected result

• progress bar shows course completion
• example: 1 / 16 lessons → ~6%
• bar updates after finishing lessons