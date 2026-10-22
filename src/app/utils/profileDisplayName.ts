/** Use the current account's profile; never a previous account's browser cache. */
export function getProfileDisplayName(name?: string | null, email?: string | null): string {
  const trimmed = name?.trim();
  if (trimmed) return trimmed;
  const localPart = email?.split('@')[0]?.trim();
  return localPart ? localPart.charAt(0).toUpperCase() + localPart.slice(1) : 'Дизайнер';
}
