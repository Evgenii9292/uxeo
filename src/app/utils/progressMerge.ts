import type { LessonProgress } from "../context/UserContext";

// Merge two lesson progress maps: take union, max correctAnswers, OR isCompleted
export function mergeLessonProgress(
  local: Record<string, LessonProgress>,
  remote: Record<string, LessonProgress>
): Record<string, LessonProgress> {
  const result: Record<string, LessonProgress> = { ...remote };
  for (const [id, lp] of Object.entries(local)) {
    if (!result[id]) {
      result[id] = lp;
    } else {
      const r = result[id];
      // Merge questions: OR for correct/xpAwarded so XP is never lost
      const mergedQuestions: Record<string, LessonProgress["questions"][string]> = { ...r.questions };
      for (const [qId, lq] of Object.entries(lp.questions ?? {})) {
        const rq = mergedQuestions[qId];
        mergedQuestions[qId] = rq ? {
          correct: lq.correct || rq.correct,
          xpAwarded: lq.xpAwarded || rq.xpAwarded,
          xpValue: Math.max(lq.xpValue || 0, rq.xpValue || 0),
        } : lq;
      }
      result[id] = {
        ...r,
        correctAnswers: Math.max(lp.correctAnswers ?? 0, r.correctAnswers ?? 0),
        isCompleted: lp.isCompleted || r.isCompleted,
        questions: mergedQuestions,
        rating: lp.rating ?? r.rating,
        totalTasks: Math.max(r.totalTasks || 0, lp.totalTasks || 0),
      };
    }
  }
  return result;
}
