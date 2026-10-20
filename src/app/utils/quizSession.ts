import type { QuizQuestion } from "../data/quiz-bank";

export function shuffled<T>(items: readonly T[], seed = Math.floor(Math.random() * 2147483647)): T[] {
  let state = seed || 1;
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const j = Math.floor((state / 4294967296) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
export function presentQuestion(question: QuizQuestion, seed: number): QuizQuestion {
  if (!question.options?.length) return question;
  const labels = question.options.map(option => option.label);
  const reordered = shuffled(question.options, seed);
  const mapping = new Map(reordered.map((option, index) => [option.label, labels[index]]));
  return {
    ...question,
    options: reordered.map((option, index) => ({ ...option, label: labels[index] })),
    correctAnswer: question.correctAnswer ? mapping.get(question.correctAnswer) : undefined,
    correctAnswers: question.correctAnswers?.map(label => mapping.get(label)!),
  };
}
export interface RunAnswer { questionId: string; isCorrect: boolean; xpValue: number }
export interface QuizRun { version: 1; total: number; seed: number; answers: RunAnswer[]; startedAt: number }
export function quizRunKey(owner: string, quizId: string): string { return `skillum-quiz-run:${owner}:${quizId}`; }
export function readQuizRun(key: string, quizId: string, total: number): QuizRun | null {
  try {
    const run = JSON.parse(localStorage.getItem(key) || "null") as QuizRun | null;
    if (!run || run.version !== 1 || run.total !== total || !Number.isFinite(run.seed) || !Number.isFinite(run.startedAt) || !Array.isArray(run.answers) || run.answers.length >= total) return null;
    if (run.answers.some((answer, index) => answer.questionId !== `${quizId}-q${index}` || typeof answer.isCorrect !== "boolean" || !Number.isFinite(answer.xpValue))) return null;
    return run;
  } catch { return null; }
}
