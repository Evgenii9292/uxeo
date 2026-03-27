CREATE TABLE IF NOT EXISTS public.user_progress (
  user_id           TEXT         NOT NULL PRIMARY KEY,
  xp                INTEGER      NOT NULL DEFAULT 0,
  streak            INTEGER      NOT NULL DEFAULT 0,
  last_streak_date  TEXT         NOT NULL DEFAULT '',
  level             TEXT         NOT NULL DEFAULT '',
  lesson_progress   JSONB        NOT NULL DEFAULT '{}',
  weekly_challenges INTEGER      NOT NULL DEFAULT 0,
  updated_at        TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

ALTER TABLE public.user_progress DISABLE ROW LEVEL SECURITY;
