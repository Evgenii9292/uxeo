Investigate a bug in lesson progress calculation BEFORE applying any fixes.

---

### PROBLEM

In Module 3:

If a user answers less than 50% correctly (e.g. 5 out of 12),  
the system incorrectly shows:

• 100% progress  
• lesson marked as completed  
• next node unlocked  

This should NOT happen.

---

### STEP 1 — DEBUG (DO NOT FIX YET)

Add console logs at quiz completion and inside LessonPage useMemo.

Log the following:

console.log({
  quizId,
  correctAnswers,
  totalQuestions,
  threshold,
  isCompleted,
  calculatedPct: correctAnswers / totalQuestions
})

---

### STEP 2 — VERIFY DATA CONSISTENCY

Check the following sources:

1. LESSONS (src/app/data/lessons.ts)
   → totalQuestions

2. QUIZ_BANK
   → actual number of questions

3. initializeLesson()
   → how many questions are initialized

4. saveBestScore()
   → what totalQuestions is passed

---

### STEP 3 — FIND MISMATCH

Confirm if this is happening:

• LESSONS.totalQuestions !== QUIZ_BANK[quizId].length

OR

• totalQuestions passed into saveBestScore is incorrect

OR

• only part of questions is initialized

---

### STEP 4 — ONLY IF ISSUE IS CONFIRMED

Apply fix:

Remove dependency on LESSONS.totalQuestions.

Use single source of truth:

const totalQuestions = QUIZ_BANK[quizId].length

Update ALL places:

• threshold calculation  
• progress calculation  
• initializeLesson  
• saveBestScore  

---

### IMPORTANT RULE

totalQuestions must NEVER be hardcoded or duplicated.

It must always come from quiz data.

---

### EXPECTED RESULT

After fix:

• 5/12 → 41%  
• lesson NOT completed  
• next node remains locked  

---

### FINAL STEP

After fixing, log again and confirm values are correct.

Do NOT change UI, styles, or layout.

Only fix logic.

---