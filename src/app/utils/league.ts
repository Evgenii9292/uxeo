export interface League {
  name: string;
  trophy: string;
  color: string;
  tier: number;
  minXp: number;
  maxXp: number | null;
}

export const LEAGUES: League[] = [
  { name: "Джун", trophy: "/trophy-1.png", color: "#798589", tier: 1, minXp: 0, maxXp: 2999 },
  { name: "Мидл", trophy: "/trophy-2.png", color: "#CD7F32", tier: 2, minXp: 3000, maxXp: 9999 },
  { name: "Сеньор", trophy: "/trophy-3.png", color: "#9CA3AF", tier: 3, minXp: 10000, maxXp: 29999 },
  { name: "Арт-директор", trophy: "/trophy-4.png", color: "#FFB121", tier: 4, minXp: 30000, maxXp: null },
];

export function getLeague(xp: number): League {
  if (xp >= 30000) return LEAGUES[3];
  if (xp >= 10000) return LEAGUES[2];
  if (xp >= 3000) return LEAGUES[1];
  return LEAGUES[0];
}

export function formatXp(xp: number): string {
  if (xp >= 1000) {
    const k = xp / 1000;
    const rounded = Math.round(k * 10) / 10;
    return `${rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1)}к`;
  }
  return String(xp);
}
