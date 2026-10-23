/** Reuse the same promises for React.lazy, idle warming and navigation intent. */
function cached<T>(load: () => Promise<T>) {
  let pending: Promise<T> | undefined;
  return () => pending ??= load().catch(error => { pending = undefined; throw error; });
}
export const tabLoaders = {
  '/lessons': cached(() => import('../pages/LessonPage')),
  '/notifications': cached(() => import('../pages/NotificationsPage')),
  '/challenges': cached(() => import('../pages/ChallengesPage')),
  '/league': cached(() => import('../pages/LeaguePage')),
  '/profile': cached(() => import('../pages/ProfilePage')),
  '/courses': cached(() => import('../pages/CoursesPage')),
};
export function preloadTab(path: string) {
  const load = tabLoaders[path as keyof typeof tabLoaders];
  if (load) void load().catch(() => {});
}
export function warmTabs(): () => void {
  let cancelled = false;
  let timer: ReturnType<typeof setTimeout>;
  const paths = Object.keys(tabLoaders);
  const next = () => {
    if (cancelled) return;
    const path = paths.shift();
    if (!path) return;
    void tabLoaders[path as keyof typeof tabLoaders]().catch(() => {}).finally(() => {
      if (!cancelled) timer = setTimeout(next, 250);
    });
  };
  timer = setTimeout(next, 1000);
  return () => { cancelled = true; clearTimeout(timer); };
}
