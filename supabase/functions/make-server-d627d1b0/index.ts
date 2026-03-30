import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-d627d1b0/health", (c) => {
  return c.json({ status: "ok" });
});

// Helper: run SQL via Supabase Management API
async function sqlQuery(sql: string): Promise<any[]> {
  const urlMatch = Deno.env.get("SUPABASE_URL")?.match(/https:\/\/([^.]+)\.supabase\.co/);
  const projectRef = urlMatch?.[1] ?? "";
  const token = Deno.env.get("MGMT_TOKEN") ?? "";
  const res = await fetch(`https://api.supabase.com/v1/projects/${projectRef}/database/query`, {
    method: "POST",
    headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query: sql }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(JSON.stringify(err));
  }
  return await res.json();
}

function esc(s: string): string {
  return String(s ?? "").replace(/'/g, "''");
}

function adminClient() {
  return createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } },
  );
}

// Extract verified user ID from Authorization header via Supabase SDK
async function getAuthUserId(authHeader: string | undefined): Promise<string | null> {
  if (!authHeader) return null;
  try {
    const { data: { user }, error } = await createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      {
        global: { headers: { Authorization: authHeader } },
        auth: { persistSession: false },
      }
    ).auth.getUser();
    console.log("getAuthUserId user:", user?.id ?? null, "error:", error?.message ?? null);
    if (error || !user) return null;
    return user.id;
  } catch (e) {
    console.log("getAuthUserId catch:", e);
    return null;
  }
}

// Submit user feedback — stores via KV store
app.post("/make-server-d627d1b0/feedback/submit", async (c) => {
  try {
    const body = await c.req.json();
    const { rating, text, missing, email } = body;

    if (!rating || !text) {
      return c.json({ error: "Missing required fields: rating, text" }, 400);
    }

    const feedbackId = `fb_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const feedback = {
      id: feedbackId,
      rating,
      text,
      missing: missing || "",
      email: email || "",
      created_at: new Date().toISOString(),
    };

    await kv.set(`feedback:${feedbackId}`, feedback);

    // Keep an index of all feedback ids
    const allKey = "feedback_all";
    const allIds: string[] = (await kv.get(allKey)) ?? [];
    allIds.unshift(feedbackId);
    await kv.set(allKey, allIds);

    console.log(`Feedback submitted: ${feedbackId} | rating=${rating} | email=${email}`);

    // Telegram notification
    const tgToken = "8435487532:AAGwv6tK-uF3aR8OzewOReWDtJwjeXS1-js";
    const tgChatId = "573283449";
    const stars = "⭐".repeat(rating);
    const msg = [
      `📬 *Новый отзыв в Скиллум*`,
      ``,
      `${stars} (${rating}/5)`,
      ``,
      `💬 *Что было неудобно:*`,
      text,
      missing ? `\n❓ *Чего не хватает:*\n${missing}` : "",
      email ? `\n📧 ${email}` : "",
    ].filter(Boolean).join("\n");
    fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: tgChatId, text: msg, parse_mode: "Markdown" }),
    }).catch(() => {});

    return c.json({ success: true, feedbackId });
  } catch (error) {
    console.log(`Error submitting feedback: ${error}`);
    return c.json({ error: `Failed to submit feedback: ${error}` }, 500);
  }
});

// Submit homework — stores via KV store
app.post("/make-server-d627d1b0/homework/submit", async (c) => {
  try {
    const body = await c.req.json();
    const { lessonName, userId, figmaLink } = body;

    if (!lessonName || !userId || !figmaLink) {
      return c.json({ error: "Missing required fields: lessonName, userId, figmaLink" }, 400);
    }

    const homeworkId = `hw_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const homework = {
      id: homeworkId,
      user_id: userId,
      lesson_name: lessonName,
      figma_link: figmaLink,
      status: "pending",
      created_at: new Date().toISOString(),
    };

    // Store by id for direct lookup
    await kv.set(`homework:${homeworkId}`, homework);

    // Also store reference in user's list
    const userKey = `homework_user:${userId}`;
    const userHomeworks: string[] = (await kv.get(userKey)) ?? [];
    userHomeworks.unshift(homeworkId);
    await kv.set(userKey, userHomeworks);

    // Also store reference in "all" list
    const allKey = `homework_all`;
    const allHomeworks: string[] = (await kv.get(allKey)) ?? [];
    allHomeworks.unshift(homeworkId);
    await kv.set(allKey, allHomeworks);

    console.log(`Homework submitted successfully: ${homeworkId}`);

    // Telegram notification
    const tgToken = "8435487532:AAGwv6tK-uF3aR8OzewOReWDtJwjeXS1-js";
    const tgChatId = "573283449";
    const hwMsg = [
      `📝 *Новая домашка на проверку*`,
      ``,
      `📚 *Урок:* ${lessonName}`,
      `👤 *Пользователь:* ${userId}`,
      ``,
      `🔗 ${figmaLink}`,
    ].join("\n");
    fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: tgChatId, text: hwMsg, parse_mode: "Markdown" }),
    }).catch(() => {});

    return c.json({ success: true, homeworkId, homework });
  } catch (error) {
    console.log(`Error submitting homework: ${error}`);
    return c.json({ error: `Failed to submit homework: ${error}` }, 500);
  }
});

// Get homework by userId
app.get("/make-server-d627d1b0/homework/user/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");

    const userKey = `homework_user:${userId}`;
    const ids: string[] = (await kv.get(userKey)) ?? [];
    const homeworks = await Promise.all(ids.map((id) => kv.get(`homework:${id}`)));
    const filtered = homeworks.filter(Boolean);

    console.log(`Retrieved ${filtered.length} homeworks for user ${userId}`);
    return c.json({ homeworks: filtered });
  } catch (error) {
    console.log(`Error retrieving homeworks for user: ${error}`);
    return c.json({ error: `Failed to retrieve homeworks: ${error}` }, 500);
  }
});

// Get all homeworks (admin only)
app.get("/make-server-d627d1b0/homework/all", async (c) => {
  try {
    const allKey = `homework_all`;
    const ids: string[] = (await kv.get(allKey)) ?? [];
    const homeworks = await Promise.all(ids.map((id) => kv.get(`homework:${id}`)));
    const filtered = homeworks.filter(Boolean);

    console.log(`Retrieved ${filtered.length} total homeworks`);
    return c.json({ homeworks: filtered });
  } catch (error) {
    console.log(`Error retrieving all homeworks: ${error}`);
    return c.json({ error: `Failed to retrieve homeworks: ${error}` }, 500);
  }
});

// Update homework status (admin only)
app.put("/make-server-d627d1b0/homework/:homeworkId/status", async (c) => {
  try {
    const homeworkId = c.req.param("homeworkId");
    const body = await c.req.json();
    const { status, comment, image_url } = body;

    if (!["pending", "reviewed", "rejected"].includes(status)) {
      return c.json({ error: "Invalid status. Must be: pending, reviewed, or rejected" }, 400);
    }

    const existing = await kv.get(`homework:${homeworkId}`);
    if (!existing) {
      return c.json({ error: "Homework not found" }, 404);
    }

    const updated: any = { ...existing, status };
    if (comment !== undefined) updated.comment = comment;
    if (image_url !== undefined) updated.image_url = image_url;
    await kv.set(`homework:${homeworkId}`, updated);

    // Send push notification on approval/rejection
    const userId: string | undefined = existing.user_id;
    if (userId) {
      if (status === "approved" || status === "reviewed") {
        pushToUser(userId, {
          title: "Домашка проверена! 🎨",
          body: comment ? `Комментарий: ${comment}` : "Посмотри комментарий ментора",
          data: { url: "/homework" },
        });
      } else if (status === "rejected") {
        pushToUser(userId, {
          title: "Домашка требует доработки",
          body: comment || "Ментор оставил комментарий — посмотри",
          data: { url: "/homework" },
        });
      }
    }

    console.log(`Homework ${homeworkId} status updated to ${status}`);
    return c.json({ success: true, homework: updated });
  } catch (error) {
    console.log(`Error updating homework status: ${error}`);
    return c.json({ error: `Failed to update homework status: ${error}` }, 500);
  }
});

// Delete homework (admin only)
app.delete("/make-server-d627d1b0/homework/:homeworkId", async (c) => {
  try {
    const homeworkId = c.req.param("homeworkId");

    const existing: any = await kv.get(`homework:${homeworkId}`);
    if (!existing) {
      return c.json({ error: "Homework not found" }, 404);
    }

    // Remove from main KV
    await kv.delete(`homework:${homeworkId}`);

    // Remove from homework_all list
    const allKey = `homework_all`;
    const allIds: string[] = (await kv.get(allKey)) ?? [];
    await kv.set(allKey, allIds.filter((id) => id !== homeworkId));

    // Remove from user's list
    const userKey = `homework_user:${existing.user_id}`;
    const userIds: string[] = (await kv.get(userKey)) ?? [];
    await kv.set(userKey, userIds.filter((id) => id !== homeworkId));

    console.log(`Homework ${homeworkId} deleted`);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error deleting homework: ${error}`);
    return c.json({ error: `Failed to delete homework: ${error}` }, 500);
  }
});

// Submit challenge
app.post("/make-server-d627d1b0/challenge/submit", async (c) => {
  try {
    const body = await c.req.json();
    const { challengeName, userId, figmaLink } = body;

    if (!challengeName || !userId || !figmaLink) {
      return c.json({ error: "Missing required fields: challengeName, userId, figmaLink" }, 400);
    }

    const challengeId = `ch_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const challenge = {
      id: challengeId,
      user_id: userId,
      challenge_name: challengeName,
      figma_link: figmaLink,
      status: "pending",
      created_at: new Date().toISOString(),
    };

    await kv.set(`challenge:${challengeId}`, challenge);
    const allIds: string[] = (await kv.get("challenge_all")) ?? [];
    allIds.unshift(challengeId);
    await kv.set("challenge_all", allIds);
    const userKey = `challenge_user:${userId}`;
    const userIds: string[] = (await kv.get(userKey)) ?? [];
    userIds.unshift(challengeId);
    await kv.set(userKey, userIds);

    console.log(`Challenge submitted: ${challengeId}`);

    // Telegram notification
    const tgToken = "8435487532:AAGwv6tK-uF3aR8OzewOReWDtJwjeXS1-js";
    const tgChatId = "573283449";
    const msg = [
      `🏆 *Новый вызов на проверку*`,
      ``,
      `🎯 *Задание:* ${challengeName}`,
      `👤 *Пользователь:* ${userId}`,
      ``,
      `🔗 ${figmaLink}`,
    ].join("\n");
    fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: tgChatId, text: msg, parse_mode: "Markdown" }),
    }).catch(() => {});

    return c.json({ success: true, challengeId, challenge });
  } catch (error) {
    return c.json({ error: `Failed to submit challenge: ${error}` }, 500);
  }
});

// Update challenge status (admin only)
app.put("/make-server-d627d1b0/challenge/:challengeId/status", async (c) => {
  try {
    const challengeId = c.req.param("challengeId");
    const { status, comment } = await c.req.json();

    if (!["pending", "reviewed", "rejected"].includes(status)) {
      return c.json({ error: "Invalid status" }, 400);
    }

    const existing: any = await kv.get(`challenge:${challengeId}`);
    if (!existing) return c.json({ error: "Challenge not found" }, 404);

    const updated: any = { ...existing, status };
    if (comment !== undefined) updated.comment = comment;
    await kv.set(`challenge:${challengeId}`, updated);

    // Send push notification
    const userId: string | undefined = existing.user_id;
    if (userId) {
      if (status === "reviewed") {
        pushToUser(userId, {
          title: "Вызов одобрен! 🔥",
          body: "+800 XP зачислено. Отличная работа!",
          data: { url: "/challenges" },
        });
      } else if (status === "rejected") {
        pushToUser(userId, {
          title: "Вызов требует доработки",
          body: comment || "Ментор оставил комментарий",
          data: { url: "/challenges" },
        });
      }
    }

    return c.json({ success: true, challenge: updated });
  } catch (error) {
    return c.json({ error: `Failed: ${error}` }, 500);
  }
});

// New user registered notification
app.post("/make-server-d627d1b0/user/registered", async (c) => {
  try {
    const body = await c.req.json();
    const { email, provider, userId } = body;

    const tgToken = "8435487532:AAGwv6tK-uF3aR8OzewOReWDtJwjeXS1-js";
    const tgChatId = "573283449";
    const msg = [
      `🎉 *Новый пользователь!*`,
      ``,
      provider === "google" ? `🔵 Через Google` : `📧 Через Email`,
      email ? `📬 ${email}` : "",
      `🆔 ${userId ?? "—"}`,
    ].filter(Boolean).join("\n");
    await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: tgChatId, text: msg, parse_mode: "Markdown" }),
    });

    return c.json({ success: true });
  } catch (error) {
    return c.json({ error: `Failed: ${error}` }, 500);
  }
});

// GET /make-server-d627d1b0/user/progress — userId from JWT
app.get("/make-server-d627d1b0/user/progress", async (c) => {
  const userId = await getAuthUserId(c.req.header("Authorization"));
  if (!userId) return c.json({ error: "Unauthorized" }, 401);

  // Try full query (with profile columns); fall back to base query if columns not yet migrated
  let rows: any[] = [];
  let hasProfileCols = true;
  try {
    rows = await sqlQuery(
      `SELECT user_id, xp, streak, last_streak_date, level, goal, daily_time, lesson_progress, weekly_challenges, user_name, user_title, user_avatar, updated_at
       FROM public.user_progress WHERE user_id = '${esc(userId)}' LIMIT 1`
    );
  } catch {
    hasProfileCols = false;
    try {
      rows = await sqlQuery(
        `SELECT user_id, xp, streak, last_streak_date, level, goal, daily_time, lesson_progress, weekly_challenges, updated_at
         FROM public.user_progress WHERE user_id = '${esc(userId)}' LIMIT 1`
      );
    } catch (err2) {
      console.log(`Error getting user progress: ${err2}`);
      return c.json({ error: `Failed: ${err2}` }, 500);
    }
  }

  if (rows.length === 0) return c.json({ found: false });
  const row = rows[0];
  return c.json({
    found: true,
    data: hasProfileCols ? row : { ...row, user_name: "", user_title: "", user_avatar: "" },
  });
});

// POST /make-server-d627d1b0/user/progress — userId from JWT
app.post("/make-server-d627d1b0/user/progress", async (c) => {
  const userId = await getAuthUserId(c.req.header("Authorization"));
  if (!userId) return c.json({ error: "Unauthorized" }, 401);

  try {
    const {
      xp,
      streak,
      lastStreakDate,
      level,
      goal,
      dailyTime,
      lessonProgress,
      weeklyChallenges,
      userName,
      userTitle,
      userAvatar,
    } = await c.req.json();

    const lpJson = JSON.stringify(lessonProgress ?? {}).replace(/'/g, "''");

    // Try full insert (with profile columns); fall back if columns not yet migrated
    try {
      await sqlQuery(`
        INSERT INTO public.user_progress (
          user_id, xp, streak, last_streak_date, level, goal, daily_time, lesson_progress, weekly_challenges,
          user_name, user_title, user_avatar, updated_at
        )
        VALUES (
          '${esc(userId)}',
          ${xp ?? 0},
          ${streak ?? 0},
          '${esc(lastStreakDate ?? "")}',
          '${esc(level ?? "")}',
          '${esc(goal ?? "")}',
          '${esc(dailyTime ?? "")}',
          '${lpJson}'::jsonb,
          ${weeklyChallenges ?? 0},
          '${esc(userName ?? "")}',
          '${esc(userTitle ?? "")}',
          '${esc(userAvatar ?? "")}',
          NOW()
        )
        ON CONFLICT (user_id) DO UPDATE SET
          xp = GREATEST(public.user_progress.xp, EXCLUDED.xp),
          streak = EXCLUDED.streak,
          last_streak_date = EXCLUDED.last_streak_date,
          level = CASE WHEN EXCLUDED.level <> '' THEN EXCLUDED.level ELSE public.user_progress.level END,
          goal = CASE WHEN EXCLUDED.goal <> '' THEN EXCLUDED.goal ELSE public.user_progress.goal END,
          daily_time = CASE WHEN EXCLUDED.daily_time <> '' THEN EXCLUDED.daily_time ELSE public.user_progress.daily_time END,
          lesson_progress = public.user_progress.lesson_progress || EXCLUDED.lesson_progress,
          weekly_challenges = GREATEST(public.user_progress.weekly_challenges, EXCLUDED.weekly_challenges),
          user_name = CASE WHEN EXCLUDED.user_name <> '' THEN EXCLUDED.user_name ELSE public.user_progress.user_name END,
          user_title = CASE WHEN EXCLUDED.user_title <> '' THEN EXCLUDED.user_title ELSE public.user_progress.user_title END,
          user_avatar = CASE WHEN EXCLUDED.user_avatar <> '' THEN EXCLUDED.user_avatar ELSE public.user_progress.user_avatar END,
          updated_at = NOW()
      `);
    } catch {
      // Profile columns don't exist yet — save without them (migration pending)
      await sqlQuery(`
        INSERT INTO public.user_progress (
          user_id, xp, streak, last_streak_date, level, goal, daily_time, lesson_progress, weekly_challenges, updated_at
        )
        VALUES (
          '${esc(userId)}',
          ${xp ?? 0},
          ${streak ?? 0},
          '${esc(lastStreakDate ?? "")}',
          '${esc(level ?? "")}',
          '${esc(goal ?? "")}',
          '${esc(dailyTime ?? "")}',
          '${lpJson}'::jsonb,
          ${weeklyChallenges ?? 0},
          NOW()
        )
        ON CONFLICT (user_id) DO UPDATE SET
          xp = GREATEST(public.user_progress.xp, EXCLUDED.xp),
          streak = EXCLUDED.streak,
          last_streak_date = EXCLUDED.last_streak_date,
          level = CASE WHEN EXCLUDED.level <> '' THEN EXCLUDED.level ELSE public.user_progress.level END,
          goal = CASE WHEN EXCLUDED.goal <> '' THEN EXCLUDED.goal ELSE public.user_progress.goal END,
          daily_time = CASE WHEN EXCLUDED.daily_time <> '' THEN EXCLUDED.daily_time ELSE public.user_progress.daily_time END,
          lesson_progress = public.user_progress.lesson_progress || EXCLUDED.lesson_progress,
          weekly_challenges = GREATEST(public.user_progress.weekly_challenges, EXCLUDED.weekly_challenges),
          updated_at = NOW()
      `);
    }

    return c.json({ success: true });
  } catch (error) {
    console.log(`Error saving user progress: ${error}`);
    return c.json({ error: `Failed: ${error}` }, 500);
  }
});

// Delete current authenticated account
app.post("/make-server-d627d1b0/account/delete", async (c) => {
  try {
    const authHeader = c.req.header("Authorization") ?? "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
    if (!token) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const supabase = adminClient();
    const { data: userData, error: userError } = await supabase.auth.getUser(token);
    const user = userData?.user;
    if (userError || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const userId = user.id;

    await sqlQuery(`DELETE FROM public.notifications WHERE user_id = '${esc(userId)}'`);
    await sqlQuery(`DELETE FROM public.homeworks WHERE user_id = '${esc(userId)}'`);
    await sqlQuery(`DELETE FROM public.challenges WHERE user_id = '${esc(userId)}'`);
    await sqlQuery(`DELETE FROM public.user_progress WHERE user_id = '${esc(userId)}'`);
    await sqlQuery(`DELETE FROM public.user_emails WHERE user_id = '${esc(userId)}'`);

    const { error: deleteError } = await supabase.auth.admin.deleteUser(userId);
    if (deleteError) {
      throw deleteError;
    }

    return c.json({ success: true });
  } catch (error) {
    console.log(`Error deleting account: ${error}`);
    return c.json({ error: `Failed to delete account: ${error}` }, 500);
  }
});

// Submit error report — stores via Management API SQL (bypasses PostgREST schema cache)
app.post("/make-server-d627d1b0/report/submit", async (c) => {
  try {
    const body = await c.req.json();
    const { issue_type, description, email, context, attachment_url, attachment_name } = body;

    if (!description) {
      return c.json({ error: "Missing required field: description" }, 400);
    }

    const projectRef = Deno.env.get("SUPABASE_URL")?.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1] ?? "";
    const mgmtToken = Deno.env.get("MGMT_TOKEN") ?? "";

    const issueEsc = (issue_type || "Не указан").replace(/'/g, "''");
    const descEsc = description.replace(/'/g, "''");
    const emailEsc = (email || "").replace(/'/g, "''");
    const ctxEsc = (context || "").replace(/'/g, "''");

    const query = `INSERT INTO public.reports (issue_type, description, email, context) VALUES ('${issueEsc}', '${descEsc}', '${emailEsc}', '${ctxEsc}')`;

    const res = await fetch(`https://api.supabase.com/v1/projects/${projectRef}/database/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${mgmtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(JSON.stringify(err));
    }

    console.log(`Report submitted via SQL | type=${issue_type}`);

    // Telegram notification
    const tgToken = "8435487532:AAGwv6tK-uF3aR8OzewOReWDtJwjeXS1-js";
    const tgChatId = "573283449";
    const reportMsg = [
      `🐛 *Новый репорт об ошибке*`,
      ``,
      `📂 *Тип:* ${issue_type || "Не указан"}`,
      ``,
      `📝 *Описание:*`,
      description,
      context ? `\n🗺 *${context}*` : "",
      email ? `\n📧 ${email}` : "",
    ].filter(Boolean).join("\n");

    if (attachment_url) {
      // Send photo with caption
      fetch(`https://api.telegram.org/bot${tgToken}/sendPhoto`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: tgChatId, photo: attachment_url, caption: reportMsg, parse_mode: "Markdown" }),
      }).catch(() => {});
    } else {
      fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: tgChatId, text: reportMsg, parse_mode: "Markdown" }),
      }).catch(() => {});
    }

    return c.json({ success: true });
  } catch (error) {
    console.log(`Error submitting report: ${error}`);
    return c.json({ error: `Failed to submit report: ${error}` }, 500);
  }
});

// Direct message from user
app.post("/make-server-d627d1b0/message/send", async (c) => {
  try {
    const body = await c.req.json();
    const { text, email } = body;
    if (!text?.trim()) return c.json({ error: "Empty message" }, 400);

    const tgToken = "8435487532:AAGwv6tK-uF3aR8OzewOReWDtJwjeXS1-js";
    const tgChatId = "573283449";
    const msg = [
      `✉️ *Сообщение от пользователя*`,
      ``,
      text.trim(),
      email ? `\n📧 ${email}` : "",
    ].filter(Boolean).join("\n");
    const res = await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: tgChatId, text: msg, parse_mode: "Markdown" }),
    });
    if (!res.ok) throw new Error("Telegram error");
    return c.json({ success: true });
  } catch (error) {
    return c.json({ error: `Failed: ${error}` }, 500);
  }
});

// ── Web Push ──────────────────────────────────────────────────────────────────

const VAPID_PUBLIC_KEY  = "BL_hbaNX4_LKT4o90dgOTkXXUXZ3ASR2wQKw1VR2iMvr0Py8cSMPwxdCtlCawBqg3yb7fVGSCRPCMx4O1RumsuE";
const VAPID_PRIVATE_KEY = Deno.env.get("VAPID_PRIVATE_KEY") ?? "";
const VAPID_SUBJECT     = "mailto:admin@skillum.ru";

/** Encode base64url string to Uint8Array */
function b64uDecode(s: string): Uint8Array {
  const pad = "=".repeat((4 - s.length % 4) % 4);
  return Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/") + pad), c => c.charCodeAt(0));
}

/** Encode Uint8Array to base64url */
function b64uEncode(buf: Uint8Array): string {
  return btoa(String.fromCharCode(...buf)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

/** Build a VAPID JWT and send a Web Push message */
async function sendWebPush(subscription: { endpoint: string; keys: { p256dh: string; auth: string } }, payload: object): Promise<boolean> {
  try {
    const endpoint = new URL(subscription.endpoint);
    const audience = `${endpoint.protocol}//${endpoint.host}`;

    // ── JWT ──
    const header  = b64uEncode(new TextEncoder().encode(JSON.stringify({ typ: "JWT", alg: "ES256" })));
    const claims  = b64uEncode(new TextEncoder().encode(JSON.stringify({
      aud: audience,
      exp: Math.floor(Date.now() / 1000) + 43200, // 12h
      sub: VAPID_SUBJECT,
    })));
    const sigInput = `${header}.${claims}`;

    const privKey = await crypto.subtle.importKey(
      "raw", b64uDecode(VAPID_PRIVATE_KEY),
      { name: "ECDSA", namedCurve: "P-256" },
      false, ["sign"]
    );
    const sigBuf = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, privKey, new TextEncoder().encode(sigInput));
    const jwt = `${sigInput}.${b64uEncode(new Uint8Array(sigBuf))}`;

    // ── Encrypt payload (RFC 8291 / aesgcm) ──
    const rawPayload = JSON.stringify(payload);
    const clientPubKey = await crypto.subtle.importKey("raw", b64uDecode(subscription.keys.p256dh), { name: "ECDH", namedCurve: "P-256" }, true, []);
    const serverKeyPair = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
    const serverPubRaw  = new Uint8Array(await crypto.subtle.exportKey("raw", serverKeyPair.publicKey));
    const sharedBits    = await crypto.subtle.deriveBits({ name: "ECDH", public: clientPubKey }, serverKeyPair.privateKey, 256);

    const authKey  = b64uDecode(subscription.keys.auth);
    const salt     = crypto.getRandomValues(new Uint8Array(16));

    // HKDF for content encryption key & nonce
    const hkdfBase = await crypto.subtle.importKey("raw", new Uint8Array(sharedBits), { name: "HKDF" }, false, ["deriveBits"]);
    const ikm = await crypto.subtle.deriveBits(
      { name: "HKDF", hash: "SHA-256", salt: authKey, info: new TextEncoder().encode("Content-Encoding: auth\0") },
      hkdfBase, 256
    );
    const keyBase = await crypto.subtle.importKey("raw", new Uint8Array(ikm), { name: "HKDF" }, false, ["deriveBits"]);
    const keyInfo  = buildInfo("aesgcm", authKey, serverPubRaw, b64uDecode(subscription.keys.p256dh));
    const nonceInfo = buildInfo("nonce", authKey, serverPubRaw, b64uDecode(subscription.keys.p256dh));
    const aesKeyBits   = await crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", salt, info: keyInfo  }, keyBase, 128);
    const nonceBits    = await crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", salt, info: nonceInfo }, keyBase, 96);
    const aesKey = await crypto.subtle.importKey("raw", aesKeyBits, "AES-GCM", false, ["encrypt"]);
    const paddedPayload = prependPadding(new TextEncoder().encode(rawPayload));
    const ciphertext = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonceBits }, aesKey, paddedPayload));

    const res = await fetch(subscription.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Encoding": "aesgcm",
        "Encryption": `salt=${b64uEncode(salt)}`,
        "Crypto-Key": `dh=${b64uEncode(serverPubRaw)};p256ecdsa=${VAPID_PUBLIC_KEY}`,
        "Authorization": `WebPush ${jwt}`,
        "TTL": "86400",
      },
      body: ciphertext,
    });
    return res.status === 201 || res.status === 200 || res.status === 204;
  } catch (err) {
    console.error("[push] sendWebPush error:", err);
    return false;
  }
}

function buildInfo(type: string, authKey: Uint8Array, serverPub: Uint8Array, clientPub: Uint8Array): Uint8Array {
  const label = new TextEncoder().encode(`Content-Encoding: ${type}\0P-256\0`);
  const buf = new Uint8Array(label.length + 2 + clientPub.length + 2 + serverPub.length);
  let i = 0;
  buf.set(label, i); i += label.length;
  new DataView(buf.buffer).setUint16(i, clientPub.length); i += 2;
  buf.set(clientPub, i); i += clientPub.length;
  new DataView(buf.buffer).setUint16(i, serverPub.length); i += 2;
  buf.set(serverPub, i);
  return buf;
}

function prependPadding(data: Uint8Array): Uint8Array {
  const out = new Uint8Array(2 + data.length);
  new DataView(out.buffer).setUint16(0, 0); // 0 bytes of padding
  out.set(data, 2);
  return out;
}

/** Save push subscription for a user */
app.post("/make-server-d627d1b0/push/subscribe", async (c) => {
  try {
    const { userId, subscription } = await c.req.json();
    if (!userId || !subscription?.endpoint) return c.json({ error: "Missing fields" }, 400);
    await kv.set(`push_sub:${userId}`, subscription);
    console.log(`[push] Saved subscription for ${userId}`);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: String(err) }, 500);
  }
});

/** Remove push subscription */
app.post("/make-server-d627d1b0/push/unsubscribe", async (c) => {
  try {
    const { userId } = await c.req.json();
    if (!userId) return c.json({ error: "Missing userId" }, 400);
    await kv.delete(`push_sub:${userId}`);
    return c.json({ success: true });
  } catch (err) {
    return c.json({ error: String(err) }, 500);
  }
});

/** Internal helper: send push to userId */
async function pushToUser(userId: string, payload: { title: string; body: string; data?: object }): Promise<boolean> {
  const sub: any = await kv.get(`push_sub:${userId}`);
  if (!sub) return false;
  return sendWebPush(sub, { icon: "/icon-192.png", badge: "/icon-192.png", ...payload });
}

// ── Daily push reminder (cron) ─────────────────────────────────────────────────
app.post("/make-server-d627d1b0/cron/daily-push", async (c) => {
  // Verify cron secret (set CRON_SECRET in Supabase secrets)
  const cronSecret = Deno.env.get("CRON_SECRET") ?? "";
  if (cronSecret && c.req.header("x-cron-secret") !== cronSecret) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const supabase = adminClient();

    // Get all push subscriptions from KV store
    const { data: subRows } = await supabase
      .from("kv_store_d627d1b0")
      .select("key, value")
      .like("key", "push_sub:%");

    if (!subRows?.length) return c.json({ sent: 0, total: 0 });

    const userIds = subRows.map((r: { key: string }) => r.key.replace("push_sub:", ""));

    // Get progress for all subscribed users
    const escapedIds = userIds.map((id: string) => `'${esc(id)}'`).join(", ");
    const rows = await sqlQuery(
      `SELECT user_id, streak, last_streak_date FROM public.user_progress WHERE user_id IN (${escapedIds})`
    );

    // Today in Moscow time (UTC+3), format YYYY-MM-DD
    const todayMoscow = new Date(Date.now() + 3 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);

    let sent = 0;

    for (const row of rows) {
      const sub = subRows.find((s: { key: string }) => s.key === `push_sub:${row.user_id}`)?.value;
      if (!sub) continue;

      const lastDate = (row.last_streak_date ?? "").slice(0, 10);
      const studiedToday = lastDate === todayMoscow;
      if (studiedToday) continue; // already studied today — don't spam

      const streak = row.streak ?? 0;
      const payload = streak > 0
        ? {
            title: `Стрик ${streak} ${streak === 1 ? "день" : streak < 5 ? "дня" : "дней"} под угрозой! 🔥`,
            body: "Зайди на 5 минут — сохрани прогресс",
            data: { url: "/lessons" },
          }
        : {
            title: "Время учиться! 📚",
            body: "5 минут в день — и скоро ты станешь дизайнером",
            data: { url: "/lessons" },
          };

      const ok = await sendWebPush(sub, { icon: "/icon-192.png", badge: "/icon-192.png", ...payload });
      if (ok) sent++;
    }

    console.log(`[cron/daily-push] Sent ${sent}/${rows.length} reminders (${subRows.length} subs total)`);
    return c.json({ sent, total: rows.length });
  } catch (err) {
    console.error("[cron/daily-push] Error:", err);
    return c.json({ error: String(err) }, 500);
  }
});

Deno.serve(app.fetch);
