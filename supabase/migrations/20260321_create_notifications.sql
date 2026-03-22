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

-- Prevent duplicate daily reminders for the same user on the same calendar day
CREATE UNIQUE INDEX IF NOT EXISTS notifications_daily_unique_idx
  ON public.notifications(user_id, (created_at::date))
  WHERE type = 'daily_reminder';

-- ── pg_cron daily job (10:00 UTC every day) ───────────────────────────────────
-- Requires: pg_cron + pg_net extensions (enable in Supabase Dashboard → Extensions)
-- Run this block separately if the extensions are not yet enabled.

DO $$
BEGIN
  -- Only proceed if pg_cron extension is available
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'pg_cron') THEN
    -- Remove any previous version of the job first
    PERFORM cron.unschedule('uxeo-daily-reminders');

    PERFORM cron.schedule(
      'uxeo-daily-reminders',
      '0 10 * * *',   -- every day at 10:00 UTC
      $$
        SELECT net.http_post(
          url     := 'https://pokzgxlgcshqdnwubyhw.supabase.co/functions/v1/make-server-d627d1b0/notifications/send-daily',
          headers := jsonb_build_object(
            'Content-Type',  'application/json',
            'x-admin-secret', current_setting('app.admin_secret', true)
          ),
          body    := '{}'::jsonb
        );
      $$
    );
  END IF;
EXCEPTION WHEN OTHERS THEN
  -- pg_cron or pg_net not available — set up the cron manually via Supabase Dashboard
  RAISE NOTICE 'pg_cron not available: configure the daily reminder cron manually';
END;
$$;
