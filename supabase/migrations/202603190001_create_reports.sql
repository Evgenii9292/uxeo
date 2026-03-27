-- Create reports table for quiz error reporting
CREATE TABLE IF NOT EXISTS public.reports (
  id          BIGSERIAL PRIMARY KEY,
  issue_type  TEXT        NOT NULL DEFAULT 'Не указан',
  description TEXT        NOT NULL,
  email       TEXT        NOT NULL DEFAULT '',
  context     TEXT        NOT NULL DEFAULT '',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Disable RLS (management API inserts bypass it anyway)
ALTER TABLE public.reports DISABLE ROW LEVEL SECURITY;
