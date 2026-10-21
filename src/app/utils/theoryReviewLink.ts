// Explicit review links open a section for inspection without persisting an unlock.
// `question` is one-based; `section` preserves older zero-based links.
export function getTheoryReviewTarget(search: string, totalSections: number) {
  const params = new URLSearchParams(search);
  const question = params.get("question");
  const raw = question ?? params.get("section");
  if (raw === null || !/^\d+$/.test(raw)) return null;
  const index = Number(raw) - (question !== null ? 1 : 0);
  if (!Number.isSafeInteger(index) || index < 0 || index >= totalSections) return null;
  return { index, focus: params.get("focus") === "theory" ? "theory" as const : "question" as const };
}
