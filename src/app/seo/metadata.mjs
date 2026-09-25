export const SITE_URL = "https://skillum.tech";
export const HOME_TITLE = "Skillum — практика UX/UI-дизайна через задания и челленджи";
export const HOME_DESCRIPTION = "Изучайте UX/UI-дизайн через короткие уроки, практические задания, квизы и дизайн-челленджи. Прокачивайте навыки и отслеживайте прогресс в Skillum.";
export const PRIVATE_ROUTES = {
  "/auth/callback": "Вход в аккаунт",
  "/level": "Выбор уровня",
  "/onboarding-goal": "Цель обучения",
  "/onboarding-time": "Время на обучение",
  "/onboarding-name": "Знакомство",
  "/quiz": "Вводный квиз",
  "/email": "Email для обучения",
  "/courses": "Курсы UX/UI-дизайна",
  "/modules": "Модули курса",
  "/lessons": "Карта уроков",
  "/lesson-quiz": "Квиз по уроку",
  "/theory": "Теория дизайна интерфейсов",
  "/contrast": "Контраст в дизайне интерфейсов",
  "/profile": "Профиль",
  "/challenges": "Дизайн-челленджи",
  "/challenge-detail": "Задание челленджа",
  "/homework": "Домашнее задание",
  "/notifications": "Уведомления",
  "/admin-homeworks": "Проверка домашних заданий",
  "/about": "О проекте",
  "/league": "Лига дизайнеров",
};
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Skillum",
  url: `${SITE_URL}/`,
  description: HOME_DESCRIPTION,
  inLanguage: "ru",
};
export function getSeo(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/" || path === "/welcome") {
    return {
      title: path === "/" ? HOME_TITLE : "Вход в Skillum — практика UX/UI-дизайна",
      description: path === "/" ? HOME_DESCRIPTION : "Начните практиковаться в UX/UI-дизайне в Skillum. Войдите в аккаунт или попробуйте демо без регистрации.",
      canonical: `${SITE_URL}/`,
      robots: "index, follow",
      schema: websiteSchema,
    };
  }
  return {
    title: `${PRIVATE_ROUTES[path] || "Страница не найдена"} — Skillum`,
    description: PRIVATE_ROUTES[path] ? `${PRIVATE_ROUTES[path]} в обучающем приложении Skillum.` : "Такой страницы в Skillum нет. Перейдите на главную, чтобы продолжить.",
    robots: "noindex, follow",
  };
}
export const escapeHtml = (value) => String(value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
export function renderSeoHead(pathname) {
  const seo = getSeo(pathname);
  const meta = (key, value, attribute = "name") => `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`;
  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    meta("description", seo.description), meta("robots", seo.robots),
    ...(seo.canonical ? [`<link rel="canonical" href="${seo.canonical}" />`] : []),
    meta("og:type", "website", "property"), meta("og:site_name", "Skillum", "property"),
    meta("og:locale", "ru_RU", "property"), meta("og:title", seo.title, "property"),
    meta("og:description", seo.description, "property"),
    ...(seo.canonical ? [meta("og:url", seo.canonical, "property")] : []),
    meta("og:image", `${SITE_URL}/icon-512.png`, "property"),
    meta("og:image:alt", "Логотип Skillum", "property"),
    meta("og:image:width", "512", "property"), meta("og:image:height", "512", "property"),
    meta("twitter:card", "summary"), meta("twitter:title", seo.title),
    meta("twitter:description", seo.description),
    meta("twitter:image", `${SITE_URL}/icon-512.png`), meta("twitter:image:alt", "Логотип Skillum"),
    ...(seo.schema ? [`<script id="skillum-schema" type="application/ld+json">${JSON.stringify(seo.schema).replace(/</g, "\\u003c")}</script>`] : []),
  ].join("\n    ");
}
