export function localDayKey(date = new Date()): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
export function earnedXpOnDay(progress: Record<string, { questions?: Record<string, { xpAwarded?: boolean; xpValue?: number; awardedAt?: string }> }>, day: string): number {
  return Object.values(progress).reduce((total, lesson) => total + Object.values(lesson.questions ?? {}).reduce((sum, question) => {
    if (!question.xpAwarded || !question.awardedAt) return sum;
    const date = new Date(question.awardedAt);
    return !Number.isNaN(date.getTime()) && localDayKey(date) === day ? sum + (question.xpValue || 25) : sum;
  }, 0), 0);
}
export function earliestAwardDate(a?: string, b?: string): string | undefined {
  const valid = [a, b].filter((value): value is string => !!value && !Number.isNaN(Date.parse(value)));
  return valid.sort((x, y) => Date.parse(x) - Date.parse(y))[0];
}
