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

Deno.serve(app.fetch);