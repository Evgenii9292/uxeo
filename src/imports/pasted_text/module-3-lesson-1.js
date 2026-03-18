Вот весь готовый код — только секции Модуля 3, которые можно скопировать и вставить в другой файл:

Урок 1 — what-is-ui-kit-lesson

"what-is-ui-kit-lesson": {
  lessonId: "what-is-ui-kit-lesson",
  title: "Что такое UI Kit",
  moduleLabel: "Модуль 3 — UI Kit",
  duration: "6 мин",
  level: "Новенький",
  heroImage: "color",
  sections: [
    {
      title: "UI Kit",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>{H("UI Kit")} — это система готовых элементов интерфейса, которые используются повторно.</p>
          <p>Это не просто набор кнопок, а единая система, по которой собирается весь интерфейс.</p>
        </div>
      ),
      quizQuestion: "Где используется UI Kit?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L1Q1A />,
      quizRightNode: <M3L1Q1B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "UI Kit — это система компонентов. Когда интерфейс собирается из готовых элементов, он становится единым, понятным и удобным в поддержке.",
      incorrectFeedback: "UI Kit — это система компонентов. Когда интерфейс собирается из готовых элементов, он становится единым, понятным и удобным в поддержке.",
    },
    {
      title: "Компоненты интерфейса",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Любой экран состоит из элементов:</p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">кнопки</li>
            <li className="ms-[27px]">поля</li>
            <li className="ms-[27px]">карточки</li>
            <li className="ms-[27px]">текст</li>
          </ul>
          <p>Эти элементы называются {H("компонентами")}.</p>
          <p>👉 Вместо того чтобы рисовать их каждый раз заново, дизайнер создаёт их один раз и использует повторно.</p>
        </div>
      ),
      quizQuestion: "Где элементы интерфейса организованы лучше?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L1Q2A />,
      quizRightNode: <M3L1Q2B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Группировка элементов — основа UI Kit. Когда кнопки, поля и карточки разделены по категориям, с ними проще работать и находить нужные элементы.",
      incorrectFeedback: "Группировка элементов — основа UI Kit. Когда кнопки, поля и карточки разделены по категориям, с ними проще работать и находить нужные элементы.",
    },
    {
      title: "Повторяющиеся элементы",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>В интерфейсе одни и те же элементы встречаются постоянно:</p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">одни и те же кнопки</li>
            <li className="ms-[27px]">одни и те же поля</li>
            <li className="ms-[27px]">одинаковые карточки</li>
          </ul>
          <p>👉 Если каждый раз рисовать их по-разному — интерфейс становится хаотичным.</p>
          <p>UI Kit решает это: все элементы становятся одинаковыми.</p>
        </div>
      ),
      quizQuestion: "Где интерфейс легче поддерживать?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L1Q3A />,
      quizRightNode: <M3L1Q3B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Компоненты упрощают поддержку интерфейса. Если изменить один компонент, изменения применяются ко всем его копиям.",
      incorrectFeedback: "Компоненты упрощают поддержку интерфейса. Если изменить один компонент, изменения применяются ко всем его копиям.",
    },
    {
      title: "Зачем нужен UI Kit",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p><strong className="opacity-100">Скорость</strong> — не нужно каждый раз заново рисовать элементы.</p>
          <p><strong className="opacity-100">Консистентность</strong> — все экраны выглядят одинаково.</p>
          <p><strong className="opacity-100">Упрощение разработки</strong> — разработчик понимает, какие элементы использовать.</p>
          <p><strong className="opacity-100">Меньше ошибок</strong> — нет случайных размеров, цветов и отступов.</p>
          <p>👉 UI Kit — это способ сделать дизайн {H("предсказуемым и управляемым")}.</p>
        </div>
      ),
      quizQuestion: "Где интерфейс выглядит более системным?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L1Q4A />,
      quizRightNode: <M3L1Q4B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Системность — это одинаковые элементы и отступы. Когда интерфейс построен по правилам, он выглядит аккуратно и профессионально.",
      incorrectFeedback: "Системность — это одинаковые элементы и отступы. Когда интерфейс построен по правилам, он выглядит аккуратно и профессионально.",
    },
  ],
},
Урок 2 — ui-elements-lesson

"ui-elements-lesson": {
  lessonId: "ui-elements-lesson",
  title: "Основные UI элементы",
  moduleLabel: "Модуль 3 — UI Kit",
  duration: "8 мин",
  level: "Новенький",
  heroImage: "color",
  sections: [
    {
      title: "Кнопки",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Кнопка — это {H("элемент действия")}. Она отвечает на вопрос: «Что я могу сделать?»</p>
          <p><strong className="opacity-100">Важно:</strong></p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">у кнопки всегда должно быть понятное действие</li>
            <li className="ms-[27px]">например: Submit, Buy, Continue</li>
          </ul>
          <p>Если кнопка непонятна — пользователь не будет действовать.</p>
        </div>
      ),
      quizQuestion: "Где кнопки организованы правильнее?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L2Q1A />,
      quizRightNode: <M3L2Q1B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Кнопки должны быть частью системы. Единый стиль помогает пользователю быстрее понимать действия.",
      incorrectFeedback: "Кнопки должны быть частью системы. Единый стиль помогает пользователю быстрее понимать действия.",
    },
    {
      title: "Поля ввода",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Поля позволяют пользователю {H("вводить данные")}.</p>
          <p><strong className="opacity-100">Важно:</strong></p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">у поля должна быть подпись (label)</li>
            <li className="ms-[27px]">иначе пользователь не понимает, что вводить</li>
          </ul>
          <p>Пример ошибки: пустое поле без подписи → пользователь теряется.</p>
        </div>
      ),
      quizQuestion: "Где поля ввода сделаны правильнее?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L2Q2A />,
      quizRightNode: <M3L2Q2B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Поля должны быть одинаковыми. Это делает форму понятной и снижает нагрузку на пользователя.",
      incorrectFeedback: "Поля должны быть одинаковыми. Это делает форму понятной и снижает нагрузку на пользователя.",
    },
    {
      title: "Карточки",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Карточка — это {H("контейнер с информацией")}. Она объединяет элементы:</p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">заголовок</li>
            <li className="ms-[27px]">текст</li>
            <li className="ms-[27px]">кнопку</li>
          </ul>
          <p>👉 Карточки помогают разбить информацию на удобные блоки.</p>
        </div>
      ),
      quizQuestion: "Где карточки интерфейса выглядят более системно?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L2Q3A />,
      quizRightNode: <M3L2Q3B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Карточки должны иметь одинаковую структуру. Это упрощает восприятие информации и делает интерфейс чище.",
      incorrectFeedback: "Карточки должны иметь одинаковую структуру. Это упрощает восприятие информации и делает интерфейс чище.",
    },
    {
      title: "Иконки",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Иконки должны быть {H("в одном стиле")}.</p>
          <p>Разные стили создают визуальный шум и ломают интерфейс.</p>
          <p>👉 Один набор иконок → единый визуальный язык → пользователь быстрее считывает интерфейс.</p>
        </div>
      ),
      quizQuestion: "Где система иконок выглядит правильнее?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L2Q4A />,
      quizRightNode: <M3L2Q4B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Иконки должны быть в одном стиле. Разные стили создают визуальный шум и ломают интерфейс.",
      incorrectFeedback: "Иконки должны быть в одном стиле. Разные стили создают визуальный шум и ломают интерфейс.",
    },
  ],
},
Урок 3 — element-states-lesson

"element-states-lesson": {
  lessonId: "element-states-lesson",
  title: "Состояния элементов",
  moduleLabel: "Модуль 3 — UI Kit",
  duration: "7 мин",
  level: "Новенький",
  heroImage: "color",
  sections: [
    {
      title: "Сетка",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Сетка — это {H("невидимая структура")}, которая помогает выравнивать элементы.</p>
          <p>Она делит экран на колонки.</p>
          <p>👉 Благодаря сетке элементы стоят ровно, а не «прыгают».</p>
        </div>
      ),
      quizQuestion: "Где используется сетка?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L3Q1A />,
      quizRightNode: <M3L3Q1B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Сетка помогает выравнивать элементы. Благодаря ей интерфейс становится структурированным и понятным.",
      incorrectFeedback: "Сетка помогает выравнивать элементы. Благодаря ей интерфейс становится структурированным и понятным.",
    },
    {
      title: "Отступы",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Отступы — это {H("расстояние между элементами")}. Они делают две вещи:</p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">разделяют элементы</li>
            <li className="ms-[27px]">показывают, что связано</li>
          </ul>
          <p>👉 Если нет отступов — интерфейс превращается в хаос.</p>
        </div>
      ),
      quizQuestion: "Где отступы сделаны правильнее?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L3Q2A />,
      quizRightNode: <M3L3Q2B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Одинаковые отступы создают порядок. Они помогают отделять элементы и показывают связи между ними.",
      incorrectFeedback: "Одинаковые отступы создают порядок. Они помогают отделять элементы и показывают связи между ними.",
    },
    {
      title: "Ритм интерфейса",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Ритм — это {H("повторение одинаковых отступов и размеров")}. Например:</p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">везде отступ 16px</li>
            <li className="ms-[27px]">везде одинаковая высота кнопок</li>
          </ul>
          <p>👉 Это делает интерфейс аккуратным и предсказуемым.</p>
        </div>
      ),
      quizQuestion: "Где интерфейс выглядит более аккуратно?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L3Q3A />,
      quizRightNode: <M3L3Q3B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Ритм — это повторение расстояний. Он делает интерфейс визуально спокойным и предсказуемым.",
      incorrectFeedback: "Ритм — это повторение расстояний. Он делает интерфейс визуально спокойным и предсказуемым.",
    },
    {
      title: "Выравнивание",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Элементы должны стоять по {H("одной линии")}. Например:</p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">все тексты по левому краю</li>
          </ul>
          <p>👉 Если выравнивание нарушено — интерфейс выглядит неаккуратно.</p>
        </div>
      ),
      quizQuestion: "Где элементы выровнены правильно?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L3Q4A />,
      quizRightNode: <M3L3Q4B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Выравнивание делает интерфейс аккуратным. Когда элементы стоят по одной линии, интерфейс легче воспринимается.",
      incorrectFeedback: "Выравнивание делает интерфейс аккуратным. Когда элементы стоят по одной линии, интерфейс легче воспринимается.",
    },
  ],
},
Урок 4 — figma-components-lesson

"figma-components-lesson": {
  lessonId: "figma-components-lesson",
  title: "Компоненты в Figma",
  moduleLabel: "Модуль 3 — UI Kit",
  duration: "9 мин",
  level: "Новенький",
  heroImage: "color",
  sections: [
    {
      title: "Компоненты",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Компонент — это элемент, который можно {H("переиспользовать")}.</p>
          <p>Ты создаёшь кнопку один раз → используешь везде.</p>
        </div>
      ),
      quizQuestion: "Где используется компонент?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L4Q1A />,
      quizRightNode: <M3L4Q1B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Компоненты позволяют переиспользовать элементы. Это экономит время и делает интерфейс единым.",
      incorrectFeedback: "Компоненты позволяют переиспользовать элементы. Это экономит время и делает интерфейс единым.",
    },
    {
      title: "Варианты компонентов",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>У одного элемента могут быть {H("состояния")}:</p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">кнопка обычная</li>
            <li className="ms-[27px]">кнопка при наведении</li>
            <li className="ms-[27px]">кнопка отключена</li>
          </ul>
          <p>👉 Это один компонент, но с разными состояниями.</p>
        </div>
      ),
      quizQuestion: "Где используются варианты компонентов?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L4Q2A />,
      quizRightNode: <M3L4Q2B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Варианты позволяют хранить состояния в одном компоненте. Это упрощает работу и делает систему гибкой.",
      incorrectFeedback: "Варианты позволяют хранить состояния в одном компоненте. Это упрощает работу и делает систему гибкой.",
    },
    {
      title: "Переиспользование",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Когда ты используешь компонент:</p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">изменяешь его в одном месте</li>
            <li className="ms-[27px]">→ он обновляется везде</li>
          </ul>
          <p>👉 Это {H("экономит время")} и убирает ошибки.</p>
        </div>
      ),
      quizQuestion: "Где элементы проще переиспользовать?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L4Q3A />,
      quizRightNode: <M3L4Q3B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Использование компонентов ускоряет дизайн. Не нужно создавать элементы заново — достаточно использовать готовые.",
      incorrectFeedback: "Использование компонентов ускоряет дизайн. Не нужно создавать элементы заново — достаточно использовать готовые.",
    },
    {
      title: "Организация компонентов",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Если компоненты не организованы — ими {H("невозможно пользоваться")}.</p>
          <p><strong className="opacity-100">Важно:</strong></p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">группировать по типам</li>
            <li className="ms-[27px]">давать понятные названия</li>
          </ul>
          <p>👉 UI Kit должен быть удобным не только для создания, но и для использования.</p>
        </div>
      ),
      quizQuestion: "Где компоненты организованы лучше?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L4Q4A />,
      quizRightNode: <M3L4Q4B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Хорошая структура UI Kit ускоряет работу. Когда всё разложено по категориям, дизайнер быстрее ориентируется.",
      incorrectFeedback: "Хорошая структура UI Kit ускоряет работу. Когда всё разложено по категориям, дизайнер быстрее ориентируется.",
    },
  ],
},
Урок 5 — creating-ui-kit-lesson

"creating-ui-kit-lesson": {
  lessonId: "creating-ui-kit-lesson",
  title: "Создание UI Kit",
  moduleLabel: "Модуль 3 — UI Kit",
  duration: "10 мин",
  level: "Новенький",
  heroImage: "color",
  sections: [
    {
      title: "Кнопки",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Нужно создать:</p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">основную кнопку (главное действие)</li>
            <li className="ms-[27px]">второстепенную</li>
          </ul>
          <p>И состояния: default / hover / disabled.</p>
          <p>👉 Это {H("база любого интерфейса")}.</p>
        </div>
      ),
      quizQuestion: "Где кнопки подготовлены для UI Kit правильнее?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L5Q1A />,
      quizRightNode: <M3L5Q1B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Кнопки должны быть системой. Единые размеры, отступы и состояния делают интерфейс стабильным.",
      incorrectFeedback: "Кнопки должны быть системой. Единые размеры, отступы и состояния делают интерфейс стабильным.",
    },
    {
      title: "Поля ввода",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Создаются с учётом состояний:</p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">обычное</li>
            <li className="ms-[27px]">в фокусе</li>
            <li className="ms-[27px]">с ошибкой</li>
          </ul>
          <p>👉 Пользователь всегда должен понимать, что происходит.</p>
        </div>
      ),
      quizQuestion: "Где поля ввода подготовлены для UI Kit правильнее?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L5Q2A />,
      quizRightNode: <M3L5Q2B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Поля должны иметь состояния. Это помогает пользователю понимать, что происходит в интерфейсе.",
      incorrectFeedback: "Поля должны иметь состояния. Это помогает пользователю понимать, что происходит в интерфейсе.",
    },
    {
      title: "Формы",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Форма — это {H("набор полей + кнопка")}.</p>
          <p><strong className="opacity-100">Важно:</strong></p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">логичный порядок</li>
            <li className="ms-[27px]">понятные подписи</li>
            <li className="ms-[27px]">простая структура</li>
          </ul>
        </div>
      ),
      quizQuestion: "Где форма сделана правильнее для UI Kit?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L5Q3A />,
      quizRightNode: <M3L5Q3B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Форма должна быть структурированной. Логичный порядок и выравнивание делают её удобной для заполнения.",
      incorrectFeedback: "Форма должна быть структурированной. Логичный порядок и выравнивание делают её удобной для заполнения.",
    },
    {
      title: "Карточки",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Карточки помогают {H("структурировать контент")}. Они делают интерфейс:</p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">более читаемым</li>
            <li className="ms-[27px]">менее перегруженным</li>
          </ul>
        </div>
      ),
      quizQuestion: "Где карточки подготовлены для UI Kit правильнее?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L5Q4A />,
      quizRightNode: <M3L5Q4B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Карточки должны быть компонентами. Это позволяет использовать их в разных экранах без изменений.",
      incorrectFeedback: "Карточки должны быть компонентами. Это позволяет использовать их в разных экранах без изменений.",
    },
    {
      title: "Уведомления",
      content: (
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
          <p>Показывают {H("состояние системы")}.</p>
          <p><strong className="opacity-100">Типы:</strong></p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">success (успех)</li>
            <li className="ms-[27px]">error (ошибка)</li>
            <li className="ms-[27px]">info (информация)</li>
          </ul>
          <p>👉 Пользователь всегда должен получать обратную связь.</p>
        </div>
      ),
      quizQuestion: "Где система уведомлений организована правильнее?",
      quizLabel: "Проверим",
      quizLeftNode: <M3L5Q5A />,
      quizRightNode: <M3L5Q5B />,
      quizLeftCorrect: false,
      quizRightCorrect: true,
      correctFeedback: "Уведомления должны быть едиными. Одинаковая структура помогает быстро распознавать сообщения.",
      incorrectFeedback: "Уведомления должны быть едиными. Одинаковая структура помогает быстро распознавать сообщения.",
    },
  ],
},