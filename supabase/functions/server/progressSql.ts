// Used inside ON CONFLICT so PostgreSQL merges against the locked, latest row.
export function mergeProgressSql(existing: string, incoming: string): string {
  return `(SELECT COALESCE(jsonb_object_agg(lesson_id,
    COALESCE(old_lesson, '{}'::jsonb) || COALESCE(new_lesson, '{}'::jsonb) || jsonb_build_object(
      'correctAnswers', GREATEST(COALESCE((old_lesson->>'correctAnswers')::int, 0), COALESCE((new_lesson->>'correctAnswers')::int, 0)),
      'isCompleted', COALESCE((old_lesson->>'isCompleted')::boolean, false) OR COALESCE((new_lesson->>'isCompleted')::boolean, false),
      'totalTasks', GREATEST(COALESCE((old_lesson->>'totalTasks')::int, 0), COALESCE((new_lesson->>'totalTasks')::int, 0)),
      'questions', (SELECT COALESCE(jsonb_object_agg(question_id,
        COALESCE(old_question, '{}'::jsonb) || COALESCE(new_question, '{}'::jsonb) || jsonb_strip_nulls(jsonb_build_object(
          'correct', COALESCE((old_question->>'correct')::boolean, false) OR COALESCE((new_question->>'correct')::boolean, false),
          'xpAwarded', COALESCE((old_question->>'xpAwarded')::boolean, false) OR COALESCE((new_question->>'xpAwarded')::boolean, false),
          'awardedAt', LEAST(NULLIF(old_question->>'awardedAt', ''), NULLIF(new_question->>'awardedAt', '')),
          'xpValue', GREATEST(COALESCE((old_question->>'xpValue')::int, 0), COALESCE((new_question->>'xpValue')::int, 0))
        ))), '{}'::jsonb)
        FROM (SELECT COALESCE(o.key, n.key) AS question_id, o.value AS old_question, n.value AS new_question
          FROM jsonb_each(COALESCE(old_lesson->'questions', '{}'::jsonb)) o
          FULL JOIN jsonb_each(COALESCE(new_lesson->'questions', '{}'::jsonb)) n ON o.key = n.key) questions)
    )), '{}'::jsonb)
    FROM (SELECT COALESCE(o.key, n.key) AS lesson_id, o.value AS old_lesson, n.value AS new_lesson
      FROM jsonb_each(COALESCE(${existing}, '{}'::jsonb)) o
      FULL JOIN jsonb_each(COALESCE(${incoming}, '{}'::jsonb)) n ON o.key = n.key) lessons)`;
}

export function progressXpSql(progress: string): string {
  return `(SELECT COALESCE(SUM(COALESCE(NULLIF((question.value->>'xpValue')::int, 0), 25)), 0)
    FROM jsonb_each(${progress}) lesson
    CROSS JOIN LATERAL jsonb_each(COALESCE(lesson.value->'questions', '{}'::jsonb)) question
    WHERE COALESCE((question.value->>'xpAwarded')::boolean, false))`;
}
