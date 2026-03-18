"}

The lesson progress logic is incorrect.

Current behavior:

If a user answers 4 out of 5 questions correctly and then replays the lesson and fixes the wrong answer, the lesson still shows "4 / 5".

Correct behavior:

Each question must store its own completion state.

Example structure:

lessonState = {
  questions: [
    { id:1, correct:true },
    { id:2, correct:true },
    { id:3, correct:true },
    { id:4, correct:true },
    { id:5, correct:false }
  ]
}

When the user answers a question correctly:

questions[questionId].correct = true

Progress must always be calculated from all questions:

correctAnswers = questions.filter(q => q.correct).length

XP must equal:

correctAnswers × 25

Example:

4 correct → XP = 100  
5 correct → XP = 125

Lesson completion:

If all questions are correct:

• progress = 5 / 5
• progress bar becomes green
• lesson is marked completed

Replay mode:

If a question was already correct, answering it again must NOT increase XP.

But if the user fixes a previously wrong answer, XP must increas