-- Migration: add user_name, user_title, user_avatar to user_progress
-- Run this in Supabase SQL Editor before redeploying the Edge Function

ALTER TABLE public.user_progress
  ADD COLUMN IF NOT EXISTS user_name  TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS user_title TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS user_avatar TEXT NOT NULL DEFAULT '';
