Refactor the project architecture to improve performance and maintainability.

Goal:
Split large page files into smaller reusable components so that each page file contains no more than ~150 lines of code.

This refactor must NOT change the UI or behavior.

------------------------------------------------

Tasks

1. Analyze the entire project structure.

Identify large files such as:

TheoryPage.tsx
LessonPage.tsx
QuizPage.tsx

Any page file larger than ~150 lines must be split into smaller components.

------------------------------------------------

2. Convert page files into thin composition layers.

Example target structure:

pages/
   TheoryPage.tsx
   LessonPage.tsx
   QuizPage.tsx

features/
   theory/
      components/
         TheoryHeader.tsx
         TheoryAccordion.tsx
         QuizBlock.tsx
         TheoryContent.tsx

   lesson/
      components/
         LessonHero.tsx
         LessonInfo.tsx

   quiz/
      components/
         QuizQuestion.tsx
         QuizAnswers.tsx
         QuizProgress.tsx

------------------------------------------------

3. Move logic into hooks when appropriate.

Example:

hooks/
   useTheory.ts
   useQuiz.ts
   useLessonProgress.ts

------------------------------------------------

4. Reusable UI components

Create shared components if they appear multiple times:

components/ui/

Button.tsx
Card.tsx
Input.tsx
StatusBadge.tsx

------------------------------------------------

Important rules

Do NOT change layout.
Do NOT change spacing.
Do NOT change styles.
Do NOT modify roadmap behavior.
Do NOT modify quiz logic.
Do NOT modify homework logic.

Only move existing code into components.

------------------------------------------------

Performance goal

After refactoring:

• page files should be under 150 lines
• components should be reusable
• code should be easier to maintain

------------------------------------------------

Important

Do NOT rewrite the UI.

Only refactor the code structure.