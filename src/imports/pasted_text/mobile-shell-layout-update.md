Ты senior React developer.

ЗАДАЧА:  
Реализовать ТОЛЬКО ФАЗУ 1 мобильной архитектуры — MobileShell и подключение к Layout.

НЕ делать адаптив страниц. НЕ трогать другие части системы.

---

КОНТЕКСТ:

Есть Layout.tsx с тремя ветками:
- desktop (sidebar + widgets)
- tablet
- mobile → сейчас return children (ломает UX)

Shell-страницы используют Layout  
Fullscreen-страницы (quiz, welcome и т.д.) — НЕ используют Layout

---

ЧТО НУЖНО СДЕЛАТЬ:

1. Создать компонент:

/src/app/components/MobileShell.tsx

Структура:

- MobileHeader (фиксированный сверху)
- Scrollable content (children)
- BottomTabBar (фиксированный снизу)

---

2. MobileHeader (минимальная версия):

- title (из Layout props)
- back button (если showBack === true)

НЕ добавлять:
- XP
- streak
- сложную логику

---

3. BottomTabBar (минимум):

3 таба:

- /lessons → "Обучение"
- / → "Курсы"
- /profile → "Профиль"

Требования:

- fixed bottom
- active state (NavLink или useLocation)
- safe-area padding (iOS)

---

4. Scroll зона:

- flex-1
- overflow-y-auto
- padding: px-4
- учитывать высоту header + tabbar

---

5. Обновить Layout.tsx:

Заменить mobile ветку:

if (isMobile) {
  return (
    <MobileShell
      title={title}
      showBack={showBack}
      backPath={backPath}
    >
      {children}
    </MobileShell>
  );
}

---

6. НЕ ТРОГАТЬ:

- LessonPage
- RoadmapPanel
- TheoryPage
- Quiz страницы
- UserContext
- любые бизнес-данные

---

7. НЕ ДЕЛАТЬ:

- адаптив контента
- новые страницы
- редизайн UI
- дополнительные табы
- рефактор навигации

---

РЕЗУЛЬТАТ:

- Все shell-страницы получают mobile navigation автоматически
- Появляется:
  - header
  - bottom nav
  - scroll
- Приложение становится usable на mobile

---

Верни:

- MobileShell.tsx
- MobileHeader (если вынесен отдельно)
- BottomTabBar.tsx
- обновлённый Layout.tsx
- краткое описание изменений