-- user_emails — stores optional email for notifications
CREATE TABLE IF NOT EXISTS public.user_emails (
  user_id    TEXT         NOT NULL PRIMARY KEY,
  email      TEXT         NOT NULL,
  created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

ALTER TABLE public.user_emails DISABLE ROW LEVEL SECURITY;

-- Add comment column to homeworks (for teacher feedback)
ALTER TABLE public.homeworks ADD COLUMN IF NOT EXISTS comment TEXT NOT NULL DEFAULT '';
