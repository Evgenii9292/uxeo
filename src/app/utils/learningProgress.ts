import { LESSONS } from "../data/lessons";
import { QUIZ_BANK } from "../data/quiz-bank";

type Progress = { correctAnswers?: number; isCompleted?: boolean; questions?: Record<string, unknown> };
export function getQuizResult(quizId: string, lessonId: string, progress: Record<string, Progress>): Progress | undefined {
  if (progress[quizId]) return progress[quizId];
  const legacy = progress[lessonId];
  // Theory microquizzes cannot count as a completed main quiz.
  return legacy && Object.keys(legacy.questions ?? {}).some(key => key.startsWith(`${quizId}-q`)) ? legacy : undefined;
}
export function courseProgress(progress: Record<string, Progress>): number {
  const lessons = LESSONS.filter(lesson => lesson.quizId && QUIZ_BANK[lesson.quizId]?.length);
  if (!lessons.length) return 0;
  const passed = lessons.filter(lesson => (getQuizResult(lesson.quizId!, lesson.lessonId, progress)?.correctAnswers ?? 0) >= Math.ceil(QUIZ_BANK[lesson.quizId!].length / 2));
  return passed.length / lessons.length;
}

export function pendingHomeworkRewards(homeworks: { lesson_id: string; status: string }[], progress: Record<string, { questions?: Record<string, { xpAwarded?: boolean }> }>): string[] {
  return [...new Set(homeworks.filter(homework => homework.status === "reviewed" && homework.lesson_id && !progress[homework.lesson_id]?.questions?.hw_xp_reward?.xpAwarded).map(homework => homework.lesson_id))];
}
