/**
 * TheoryLesson - Text content sections for theory lessons
 * 
 * Each TheoryContent component contains the educational text
 * for one accordion section of the color theory lesson.
 */

function ContentDivider() {
  return (
    <div className="h-0 relative shrink-0 w-full opacity-50">
      <div className="absolute inset-[-0.5px_-0.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 493 1">
          <path d="M0.5 0.5H492.5" stroke="#5B6E77" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

export function TheoryContent1() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold min-h-[24px] leading-[24px] relative shrink-0">🎨 Цвет выделяет действия</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Цветовой контраст помогает выделить <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">действия</span>.</p>
          <p>Кнопка должна отличаться от фона и окружающих элементов — иначе пользователь может её не заметить.</p>
        </div>
      </div>

      <ContentDivider />

      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold min-h-[24px] leading-[24px] relative shrink-0">⭐ Доступность</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Контраст важен не только для красоты, но и для <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">доступности</span>.</p>
          <p>Текст должен быть достаточно тёмным на светлом фоне или светлым на тёмном — это помогает людям с плохим зрением.</p>
        </div>
      </div>
    </>
  );
}

export function TheoryContent2() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold min-h-[24px] leading-[24px] relative shrink-0">🎯 Цвет помогает ориентироваться</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Цвет — не украшение. Это <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">инструмент навигации</span>. Пользователь считывает его почти мгновенно:</p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">основной цвет → главное действие</li>
            <li className="ms-[27px]">нейтральные цвета → второстепенные элементы</li>
            <li className="ms-[27px]">яркие акценты → важная информация</li>
          </ul>
        </div>
      </div>

      <ContentDivider />

      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold min-h-[24px] leading-[24px] relative shrink-0">💡 Когда цвет используется правильно</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[4px]">
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">пользователь быстрее понимает интерфейс</li>
            <li className="ms-[27px]">кнопки легко найти</li>
            <li className="ms-[27px]">действия становятся очевидными</li>
            <li className="ms-[27px]">интерфейс читается быстрее</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export function TheoryContent3() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold min-h-[24px] leading-[24px] relative shrink-0">🎨 Цвет выделяет действия</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Цветовой контраст помогает выделить <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">действия</span>. Кнопка должна отличаться от фона и окружающих элементов — иначе пользователь её не заметит.</p>
        </div>
      </div>

      <ContentDivider />

      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold min-h-[24px] leading-[24px] relative shrink-0">⭐ Доступность</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Контраст важен не только для красоты, но и для <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">доступности</span>. Текст должен быть достаточно тёмным на светлом или светлым на тёмном фоне.</p>
        </div>
      </div>
    </>
  );
}

export function TheoryContent4() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold min-h-[24px] leading-[24px] relative shrink-0">✨ Форма создаёт акцент</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Контраст — это не только <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">цвет и размер</span>. Форма, толщина и насыщенность тоже помогают выделять элементы.</p>
          <ul className="list-disc flex flex-col gap-[4px]">
            <li className="ms-[27px]">жирный текст рядом с обычным</li>
            <li className="ms-[27px]">круглая кнопка среди прямоугольных</li>
            <li className="ms-[27px]">залитая иконка среди контурных</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export function TheoryContent5() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold min-h-[24px] leading-[24px] relative shrink-0">⚡ Один акцент лучше многих</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Слишком <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">слабый</span> контраст делает интерфейс скучным. Слишком <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">сильный</span> — утомляет и создаёт визуальный шум.</p>
        </div>
      </div>

      <ContentDivider />

      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
        <p className="font-['Roboto_Condensed:Bold',sans-serif] font-semibold min-h-[24px] leading-[24px] relative shrink-0">💡 Правило баланса</p>
        <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
          <p>Лучше всего работает <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">один главный акцент</span> и спокойная база вокруг него. Контраст должен помогать понять, что здесь самое важное.</p>
        </div>
      </div>
    </>
  );
}
