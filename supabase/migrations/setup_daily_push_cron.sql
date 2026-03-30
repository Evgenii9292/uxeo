-- Setup daily push notification reminder via pg_cron + pg_net
-- Run in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
--
-- Prerequisites:
-- 1. Set CRON_SECRET in Supabase secrets (Dashboard → Edge Functions → Secrets)
--    e.g. any random string like "my-secret-abc123"
-- 2. Enable pg_net extension if not already:
--    Dashboard → Database → Extensions → pg_net → Enable
-- 3. Deploy the updated Edge Function first

-- Enable pg_net (if not already enabled)
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Remove existing schedule if re-running
SELECT cron.unschedule('daily-push-reminder');

-- Schedule daily at 18:00 Moscow time = 15:00 UTC
SELECT cron.schedule(
  'daily-push-reminder',
  '0 15 * * *',
  $$
  SELECT net.http_post(
    url     := 'https://pokzgxlgcshqdnwubyhw.supabase.co/functions/v1/make-server-d627d1b0/cron/daily-push',
    headers := jsonb_build_object(
      'Content-Type',    'application/json',
      'x-cron-secret',  current_setting('app.cron_secret', true)
    ),
    body    := '{}'::jsonb
  ) AS request_id;
  $$
);

-- Store secret in DB config so SQL can reference it
-- Replace 'YOUR_CRON_SECRET' with the actual value you set in Supabase Secrets
ALTER DATABASE postgres SET "app.cron_secret" = 'YOUR_CRON_SECRET';
