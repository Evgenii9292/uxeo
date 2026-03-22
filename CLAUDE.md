# CLAUDE.md — UXeo 2.0 (beta)

## Проект
Мобильное обучающее приложение по UX/UI-дизайну (типа Duolingo). Пользователь проходит уроки, квизы, теорию, выполняет домашние задания.

## Стек
- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS v4, React Router v7
- **UI:** Radix UI, Lucide React, Framer Motion (motion), Recharts
- **Backend:** Supabase (auth + DB), Supabase Edge Functions (Hono)
- **Deploy:** Vercel

## Структура
```
src/
  app/
    components/   — общие компоненты (AppHeader, BottomTabBar, Sidebar, MobileShell...)
    context/      — контексты (AuthContext, UserContext, AchievementsContext...)
    data/         — контент уроков и квизов (lesson-content.tsx, quiz-bank.ts)
    hooks/        — кастомные хуки
    pages/        — страницы приложения
      quiz/       — компоненты квиз-экранов
      theory/     — компоненты теории
    routes.tsx    — роутер
  features/
    roadmap/      — карта уроков (LessonNode, LessonPopup, Roadmap)
  imports/        — импортированные из Figma компоненты
supabase/
  functions/server/ — Edge Functions (Hono API)
```

## Маршруты
- `/` — редирект (по статусу авторизации и прогрессу)
- `/welcome` — онбординг / вход
- `/level` — выбор уровня (шаг 1)
- `/onboarding-goal` — цель обучения (шаг 2)
- `/onboarding-time` — время в день (шаг 3)
- `/quiz` — онбординг-квиз
- `/courses` — каталог курсов
- `/modules` — модули курса
- `/lessons` — карта уроков (Roadmap)
- `/theory` — теория
- `/contrast` — урок по контрасту (тот же TheoryPage)
- `/lesson-quiz` — квиз в уроке
- `/homework` — домашнее задание
- `/profile` — профиль
- `/challenges` — еженедельные задания
- `/league` — таблица лидеров
- `/notifications` — уведомления
- `/admin-homeworks` — админ: проверка домашних заданий
- `/about` — о приложении

## Команды
```bash
npm run dev    # запуск dev-сервера (localhost:5173)
npm run build  # сборка
```

## Контекст разработки
- Приложение адаптировано под мобильный и десктоп (MobileShell — обёртка мобильного вида)
- Язык интерфейса: русский
- Авторизация через Supabase (magic link / OAuth)
- Домашние задания проверяются вручную через AdminHomeworksPage
