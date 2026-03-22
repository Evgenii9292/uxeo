import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
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

    // Send Telegram notification
    const tgToken = Deno.env.get("TELEGRAM_BOT_TOKEN") ?? "8435487532:AAGwv6tK-uF3aR8OzewOReWDtJwjeXS1-js";
    const tgChatId = Deno.env.get("TELEGRAM_CHAT_ID") ?? "573283449";
    if (tgToken && tgChatId) {
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
    }

    return c.json({ success: true, feedbackId });
  } catch (error) {
    console.log(`Error submitting feedback: ${error}`);
    return c.json({ error: `Failed to submit feedback: ${error}` }, 500);
  }
});

// List all feedback (admin)
app.get("/make-server-d627d1b0/feedback/list", async (c) => {
  const secret = c.req.query("secret");
  const adminSecret = Deno.env.get("ADMIN_SECRET") ?? "skillum_admin_2025";
  if (secret !== adminSecret) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  const allIds: string[] = (await kv.get("feedback_all")) ?? [];
  const items = await Promise.all(allIds.map((id) => kv.get(`feedback:${id}`)));
  return c.json({ total: items.length, items });
});

// Submit error report
app.post("/make-server-d627d1b0/report/submit", async (c) => {
  try {
    const body = await c.req.json();
    const { issue_type, description, email, context, attachment_url, attachment_name } = body;

    if (!description) {
      return c.json({ error: "Missing required field: description" }, 400);
    }

    const reportId = `rp_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const report = {
      id: reportId,
      issue_type: issue_type || "other",
      description,
      email: email || "",
      context: context || "",
      attachment_url: attachment_url || "",
      attachment_name: attachment_name || "",
      created_at: new Date().toISOString(),
    };

    await kv.set(`report:${reportId}`, report);
    const allIds: string[] = (await kv.get("report_all")) ?? [];
    allIds.unshift(reportId);
    await kv.set("report_all", allIds);

    // Telegram notification
    const tgToken = Deno.env.get("TELEGRAM_BOT_TOKEN") ?? "8435487532:AAGwv6tK-uF3aR8OzewOReWDtJwjeXS1-js";
    const tgChatId = Deno.env.get("TELEGRAM_CHAT_ID") ?? "573283449";
    const msg = [
      `🐛 *Новый репорт об ошибке*`,
      ``,
      `📂 *Тип:* ${issue_type || "Не указан"}`,
      ``,
      `📝 *Описание:*`,
      description,
      context ? `\n🗺 *Контекст:* ${context}` : "",
      email ? `\n📧 ${email}` : "",
      attachment_url ? `\n📎 [Вложение](${attachment_url})` : "",
    ].filter(Boolean).join("\n");
    fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: tgChatId, text: msg, parse_mode: "Markdown" }),
    }).catch(() => {});

    return c.json({ success: true, reportId });
  } catch (error) {
    return c.json({ error: `Failed to submit report: ${error}` }, 500);
  }
});

// List all reports (admin)
app.get("/make-server-d627d1b0/report/list", async (c) => {
  const secret = c.req.query("secret");
  const adminSecret = Deno.env.get("ADMIN_SECRET") ?? "skillum_admin_2025";
  if (secret !== adminSecret) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  const allIds: string[] = (await kv.get("report_all")) ?? [];
  const items = await Promise.all(allIds.map((id) => kv.get(`report:${id}`)));
  return c.json({ total: items.length, items });
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

// Submit homework
app.post("/make-server-d627d1b0/homework/submit", async (c) => {
  try {
    const { lessonName, userId, figmaLink, lessonId } = await c.req.json();
    if (!lessonName || !userId || !figmaLink) {
      return c.json({ error: "Missing required fields" }, 400);
    }
    // Check if already submitted for this lesson
    const existing = await sqlQuery(
      `SELECT id, status FROM public.homeworks WHERE user_id = '${esc(userId)}' AND lesson_name = '${esc(lessonName)}' LIMIT 1`
    );
    if (existing.length > 0) {
      // Update figma link, reset to pending
      await sqlQuery(
        `UPDATE public.homeworks SET figma_link = '${esc(figmaLink)}', status = 'pending', created_at = now() WHERE id = '${esc(existing[0].id)}'`
      );
      return c.json({ success: true, homeworkId: existing[0].id, resubmitted: true });
    }
    const result = await sqlQuery(
      `INSERT INTO public.homeworks (user_id, lesson_name, lesson_id, figma_link, status) VALUES ('${esc(userId)}', '${esc(lessonName)}', '${esc(lessonId ?? "")}', '${esc(figmaLink)}', 'pending') RETURNING id`
    );
    const homeworkId = result[0]?.id ?? "unknown";
    console.log(`Homework submitted: ${homeworkId} | user=${userId}`);
    return c.json({ success: true, homeworkId });
  } catch (error) {
    console.log(`Error submitting homework: ${error}`);
    return c.json({ error: `Failed to submit homework: ${error}` }, 500);
  }
});

// Get homework by userId
app.get("/make-server-d627d1b0/homework/user/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const rows = await sqlQuery(
      `SELECT id, user_id, lesson_name, lesson_id, figma_link, status, comment, image_url, created_at FROM public.homeworks WHERE user_id = '${esc(userId)}' ORDER BY created_at DESC`
    );
    return c.json({ homeworks: rows });
  } catch (error) {
    console.log(`Error retrieving homeworks: ${error}`);
    return c.json({ error: `Failed to retrieve homeworks: ${error}` }, 500);
  }
});

// Get all homeworks (admin)
app.get("/make-server-d627d1b0/homework/all", async (c) => {
  try {
    const rows = await sqlQuery(
      `SELECT id, user_id, lesson_name, lesson_id, figma_link, status, comment, image_url, created_at FROM public.homeworks ORDER BY created_at DESC`
    );
    return c.json({ homeworks: rows });
  } catch (error) {
    console.log(`Error retrieving all homeworks: ${error}`);
    return c.json({ error: `Failed to retrieve homeworks: ${error}` }, 500);
  }
});

// Update homework status (admin)
app.put("/make-server-d627d1b0/homework/:homeworkId/status", async (c) => {
  try {
    const homeworkId = c.req.param("homeworkId");
    const { status, comment, image_url } = await c.req.json();
    if (!["pending", "reviewed", "rejected"].includes(status)) {
      return c.json({ error: "Invalid status" }, 400);
    }
    const commentVal = esc(comment ?? "");
    const imageUrlVal = esc(image_url ?? "");
    const result = await sqlQuery(
      `UPDATE public.homeworks SET status = '${esc(status)}', comment = '${commentVal}', image_url = '${imageUrlVal}' WHERE id = '${esc(homeworkId)}' RETURNING id, user_id, lesson_name, status, comment, image_url`
    );
    if (!result.length) return c.json({ error: "Homework not found" }, 404);

    // Send email notification if status is final (reviewed/rejected)
    if (status === "reviewed" || status === "rejected") {
      const { user_id, lesson_name, comment: savedComment } = result[0];
      const emailRows = await sqlQuery(
        `SELECT email FROM public.user_emails WHERE user_id = '${esc(user_id)}' LIMIT 1`
      ).catch(() => []);
      if (emailRows.length > 0) {
        await sendStatusEmail(emailRows[0].email, lesson_name, status, savedComment ?? "");
      }
    }

    return c.json({ success: true, homework: result[0] });
  } catch (error) {
    console.log(`Error updating homework status: ${error}`);
    return c.json({ error: `Failed to update homework status: ${error}` }, 500);
  }
});

// ── Email notifications (Resend) ─────────────────────────────────────────────

async function sendStatusEmail(toEmail: string, lessonName: string, status: string, comment: string) {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) {
    console.log("RESEND_API_KEY not set — skipping email");
    return;
  }
  const isReviewed = status === "reviewed";
  const subject = isReviewed
    ? `✅ Домашка по «${lessonName}» проверена`
    : `↩️ Домашка по «${lessonName}» — нужна доработка`;
  const commentBlock = comment.trim()
    ? `<div style="background: rgba(255,255,255,0.08); border-left: 3px solid ${isReviewed ? "#9EFF33" : "#FF5D39"}; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
        <p style="font-size: 13px; color: #798589; margin: 0 0 8px 0;">Комментарий преподавателя:</p>
        <p style="font-size: 16px; color: #f4f5fc; margin: 0;">${comment.replace(/</g, "&lt;")}</p>
       </div>`
    : "";
  const html = `
    <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; background: #282F33; color: #f4f5fc; padding: 32px; border-radius: 16px;">
      <h1 style="font-size: 24px; margin-bottom: 16px;">${isReviewed ? "✅ Отличная работа!" : "↩️ Нужна доработка"}</h1>
      <p style="font-size: 16px; color: #e0e2e8; margin-bottom: 24px;">
        ${isReviewed
          ? `Преподаватель проверил вашу домашку по уроку <strong>«${lessonName}»</strong> и одобрил её. Продолжайте в том же духе!`
          : `Преподаватель посмотрел домашку по уроку <strong>«${lessonName}»</strong> и оставил комментарий.`
        }
      </p>
      ${commentBlock}
      <a href="https://uxeo.ru/notifications" style="display: inline-block; background: #ff5d39; color: white; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 16px;">
        Открыть UXEO
      </a>
      <p style="font-size: 12px; color: #798589; margin-top: 32px;">
        Вы получили это письмо потому что оставили email в приложении UXEO.
      </p>
    </div>
  `;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: "UXEO <noreply@uxeo.ru>", to: toEmail, subject, html }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.log(`Resend error: ${JSON.stringify(err)}`);
    } else {
      console.log(`Email sent to ${toEmail} | status=${status}`);
    }
  } catch (e) {
    console.log(`Email send failed: ${e}`);
  }
}

// Save or update user email
app.post("/make-server-d627d1b0/user/email", async (c) => {
  try {
    const { userId, email } = await c.req.json();
    if (!userId || !email) return c.json({ error: "Missing userId or email" }, 400);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return c.json({ error: "Invalid email" }, 400);
    await sqlQuery(
      `INSERT INTO public.user_emails (user_id, email, updated_at)
       VALUES ('${esc(userId)}', '${esc(email)}', NOW())
       ON CONFLICT (user_id) DO UPDATE SET email = EXCLUDED.email, updated_at = NOW()`
    );
    console.log(`Email saved: user=${userId} email=${email}`);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error saving email: ${error}`);
    return c.json({ error: `Failed to save email: ${error}` }, 500);
  }
});

// GET /make-server-d627d1b0/user/progress?userId=xxx
app.get("/make-server-d627d1b0/user/progress", async (c) => {
  try {
    const userId = c.req.query("userId");
    if (!userId) return c.json({ error: "userId required" }, 400);

    const rows = await sqlQuery(
      `SELECT xp, streak, last_streak_date, level, lesson_progress, weekly_challenges
       FROM public.user_progress WHERE user_id = '${esc(userId)}' LIMIT 1`
    );

    if (rows.length === 0) return c.json({ found: false });
    return c.json({ found: true, data: rows[0] });
  } catch (error) {
    console.log(`Error getting user progress: ${error}`);
    return c.json({ error: `Failed: ${error}` }, 500);
  }
});

// POST /make-server-d627d1b0/user/progress
app.post("/make-server-d627d1b0/user/progress", async (c) => {
  try {
    const { userId, xp, streak, lastStreakDate, level, lessonProgress, weeklyChallenges } = await c.req.json();
    if (!userId) return c.json({ error: "userId required" }, 400);

    const lpJson = JSON.stringify(lessonProgress ?? {}).replace(/'/g, "''");

    await sqlQuery(`
      INSERT INTO public.user_progress (user_id, xp, streak, last_streak_date, level, lesson_progress, weekly_challenges, updated_at)
      VALUES ('${esc(userId)}', ${xp ?? 0}, ${streak ?? 0}, '${esc(lastStreakDate ?? "")}', '${esc(level ?? "")}', '${lpJson}'::jsonb, ${weeklyChallenges ?? 0}, NOW())
      ON CONFLICT (user_id) DO UPDATE SET
        xp = EXCLUDED.xp,
        streak = EXCLUDED.streak,
        last_streak_date = EXCLUDED.last_streak_date,
        level = EXCLUDED.level,
        lesson_progress = EXCLUDED.lesson_progress,
        weekly_challenges = EXCLUDED.weekly_challenges,
        updated_at = NOW()
    `);

    return c.json({ success: true });
  } catch (error) {
    console.log(`Error saving user progress: ${error}`);
    return c.json({ error: `Failed: ${error}` }, 500);
  }
});

// Submit error report — stores via Management API SQL (bypasses PostgREST schema cache)
app.post("/make-server-d627d1b0/report/submit", async (c) => {
  try {
    const body = await c.req.json();
    const { issue_type, description, email, context } = body;

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
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error submitting report: ${error}`);
    return c.json({ error: `Failed to submit report: ${error}` }, 500);
  }
});

// ── In-app notifications ──────────────────────────────────────────────────────

// GET  /notifications?userId=xxx
app.get("/make-server-d627d1b0/notifications", async (c) => {
  try {
    const userId = c.req.query("userId");
    if (!userId) return c.json({ error: "userId required" }, 400);
    const rows = await sqlQuery(
      `SELECT id, user_id, type, title, body, data, read, created_at
       FROM public.notifications
       WHERE user_id = '${esc(userId)}'
       ORDER BY created_at DESC
       LIMIT 100`
    );
    return c.json({ notifications: rows });
  } catch (error) {
    console.log(`Error fetching notifications: ${error}`);
    return c.json({ error: `Failed: ${error}` }, 500);
  }
});

// PATCH /notifications/:id/read — mark a notification as read
app.patch("/make-server-d627d1b0/notifications/:id/read", async (c) => {
  try {
    const id = c.req.param("id");
    const { userId } = await c.req.json().catch(() => ({}));
    if (!userId) return c.json({ error: "userId required" }, 400);
    await sqlQuery(
      `UPDATE public.notifications SET read = TRUE
       WHERE id = '${esc(id)}' AND user_id = '${esc(userId)}'`
    );
    return c.json({ success: true });
  } catch (error) {
    return c.json({ error: `Failed: ${error}` }, 500);
  }
});

// DELETE /notifications/:id?userId=xxx
app.delete("/make-server-d627d1b0/notifications/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const userId = c.req.query("userId");
    if (!userId) return c.json({ error: "userId required" }, 400);
    await sqlQuery(
      `DELETE FROM public.notifications
       WHERE id = '${esc(id)}' AND user_id = '${esc(userId)}'`
    );
    return c.json({ success: true });
  } catch (error) {
    return c.json({ error: `Failed: ${error}` }, 500);
  }
});

// POST /notifications/send-daily — called by pg_cron at 10:00 UTC
// Inserts a daily_reminder for each user who wasn't active today.
// Protected by x-admin-secret header or ?secret= query param.
app.post("/make-server-d627d1b0/notifications/send-daily", async (c) => {
  const adminSecret = Deno.env.get("ADMIN_SECRET") ?? "skillum_admin_2025";
  const secret = c.req.header("x-admin-secret") ?? c.req.query("secret");
  if (secret !== adminSecret) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const todayUtc = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

    // Find users who have progress data but weren't active today
    const inactive = await sqlQuery(`
      SELECT user_id, streak
      FROM public.user_progress
      WHERE last_streak_date IS DISTINCT FROM '${esc(todayUtc)}'
        AND user_id IS NOT NULL
        AND user_id <> ''
    `);

    if (!inactive.length) {
      return c.json({ success: true, sent: 0 });
    }

    let sent = 0;
    for (const row of inactive) {
      const uid = esc(row.user_id);
      const streak = Number(row.streak ?? 0);
      const title = streak > 0
        ? `Не потеряйте серию 🔥 ${streak} ${streak === 1 ? 'день' : streak < 5 ? 'дня' : 'дней'}!`
        : "Не забудьте позаниматься сегодня 📚";
      const body = streak > 0
        ? "Зайдите и пройдите хотя бы один урок, чтобы серия не прервалась."
        : "Небольшой урок в день — и ваш прогресс растёт.";
      const titleEsc = esc(title);
      const bodyEsc = esc(body);
      try {
        await sqlQuery(`
          INSERT INTO public.notifications (user_id, type, title, body, data)
          VALUES ('${uid}', 'daily_reminder', '${titleEsc}', '${bodyEsc}', '{"streak":${streak}}'::jsonb)
          ON CONFLICT ON CONSTRAINT notifications_daily_unique_idx DO NOTHING
        `);
        sent++;
      } catch (_e) {
        // skip duplicate / constraint errors silently
      }
    }

    console.log(`Daily reminders sent: ${sent}/${inactive.length}`);
    return c.json({ success: true, sent, total: inactive.length });
  } catch (error) {
    console.log(`Error sending daily reminders: ${error}`);
    return c.json({ error: `Failed: ${error}` }, 500);
  }
});

Deno.serve(app.fetch);