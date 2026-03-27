-- ── Notifications table ───────────────────────────────────────────────────────
-- Stores in-app notifications (daily reminders, server-side events, etc.)
-- For homework review notifications the email is sent separately via Resend.

CREATE TABLE IF NOT EXISTS public.notifications (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     TEXT        NOT NULL,
  type        TEXT        NOT NULL,           -- e.g. 'daily_reminder'
  title       TEXT        NOT NULL,
  body        TEXT        NOT NULL DEFAULT '',
  data        JSONB       NOT NULL DEFAULT '{}',
  read        BOOLEAN     NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Fast lookup by user
CREATE INDEX IF NOT EXISTS notifications_user_id_idx
  ON public.notifications(user_id, created_at DESC);

-- NOTE:
-- A partial unique index on created_at::date fails on Supabase Postgres because
-- the expression is not immutable for timestamptz. For MVP we skip this guard
-- and rely on server-side logic to avoid duplicate daily reminders.

-- NOTE:
-- The pg_cron scheduling step is intentionally skipped in migrations for MVP.
-- Configure the daily reminder job manually in Supabase Dashboard if needed.
