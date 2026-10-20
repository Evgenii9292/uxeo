export function normalizeFigmaLink(input: unknown): string | null {
  if (typeof input !== "string") return null;
  const text = input.trim();
  try {
    const url = new URL(/^(www\.)?figma\.com\//i.test(text) ? `https://${text}` : text);
    if (url.protocol !== "https:" || !["figma.com", "www.figma.com"].includes(url.hostname) || url.username || url.password || url.port) return null;
    if (!/^\/(design|file|proto|board|slides|make)\/[A-Za-z0-9_-]+(?:\/|$)/.test(url.pathname)) return null;
    return url.href;
  } catch { return null; }
}
