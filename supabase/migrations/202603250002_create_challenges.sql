CREATE TABLE IF NOT EXISTS public.challenges (
  id             BIGSERIAL    PRIMARY KEY,
  user_id        TEXT         NOT NULL,
  challenge_name TEXT         NOT NULL,
  challenge_id   TEXT         NOT NULL DEFAULT '',
  figma_link     TEXT         NOT NULL,
  status         TEXT         NOT NULL DEFAULT 'pending'
                               CHECK (status IN ('pending', 'reviewed', 'rejected')),
  comment        TEXT         NOT NULL DEFAULT '',
  image_url      TEXT         NOT NULL DEFAULT '',
  created_at     TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

ALTER TABLE public.challenges DISABLE ROW LEVEL SECURITY;
