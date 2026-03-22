-- 1. KV store — needed for feedback and any other KV-based features
CREATE TABLE IF NOT EXISTS public.kv_store_d627d1b0 (
  key   TEXT  NOT NULL PRIMARY KEY,
  value JSONB NOT NULL
);

-- 2. Homeworks table — needed for homework submission, admin review, and status tracking
CREATE TABLE IF NOT EXISTS public.homeworks (
  id          BIGSERIAL    PRIMARY KEY,
  user_id     TEXT         NOT NULL,
  lesson_name TEXT         NOT NULL,
  lesson_id   TEXT         NOT NULL DEFAULT '',
  figma_link  TEXT         NOT NULL,
  status      TEXT         NOT NULL DEFAULT 'pending'
                           CHECK (status IN ('pending', 'reviewed', 'rejected')),
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- 3. Reports table — needed for quiz error reporting
CREATE TABLE IF NOT EXISTS public.reports (
  id          BIGSERIAL    PRIMARY KEY,
  issue_type  TEXT         NOT NULL DEFAULT 'Не указан',
  description TEXT         NOT NULL,
  email       TEXT         NOT NULL DEFAULT '',
  context     TEXT         NOT NULL DEFAULT '',
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Allow service role full access (edge functions use service role key)
ALTER TABLE public.kv_store_d627d1b0 DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.homeworks          DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports            DISABLE ROW LEVEL SECURITY;
