/**
 * Centralized lesson content data
 * 
 * This file contains all theory lesson content for the UXEO platform.
 * Each lesson follows the same structure with 5 accordion sections,
 * each containing theory content and a quiz.
 */

import React from "react";
import { PortableTheoryExample } from "../pages/theory/components/PortableTheoryExample";
import { ColorTheoryExample } from "../pages/theory/components/ColorTheoryExample";
import { BalanceExample, ColorContrastExample } from "../pages/theory/components/ContrastTheoryExample";
import {
  Quiz1VariantA, Quiz1VariantB,
  Quiz2VariantA, Quiz2VariantB,
  Quiz3VariantA, Quiz3VariantB,
  Quiz4VariantA, Quiz4VariantB,
  Quiz5VariantA, Quiz5VariantB,
} from "../../imports/Frame481494";
import {
  ContrastQuiz1VariantA, ContrastQuiz1VariantB,
  ContrastQuiz2VariantA, ContrastQuiz2VariantB,
  ContrastQuiz4VariantA, ContrastQuiz4VariantB,
  ContrastQuiz5VariantA, ContrastQuiz5VariantB,
  ContrastQuiz6VariantA, ContrastQuiz6VariantB,
} from "../../imports/Frame481515";
import {
  HierarchyQuiz1VariantA, HierarchyQuiz1VariantB,
  HierarchyQuiz2VariantA, HierarchyQuiz2VariantB,
  HierarchyQuiz3VariantA, HierarchyQuiz3VariantB,
  HierarchyQuiz4VariantA, HierarchyQuiz4VariantB,
  HierarchyQuiz5VariantA, HierarchyQuiz5VariantB,
  HierarchyQuiz6VariantA, HierarchyQuiz6VariantB,
} from "../../imports/Frame481556";
import {
  M2L1Q1A, M2L1Q1B,
  M2L1Q2A, M2L1Q2B,
  M2L1Q3A, M2L1Q3B,
  M2L1Q4A, M2L1Q4B,
} from "../../imports/Урок1ЧтоТакоеUx";
import {
  M2L2Q1A, M2L2Q1B,
  M2L2Q2A, M2L2Q2B,
  M2L2Q3A, M2L2Q3B,
  M2L2Q4A, M2L2Q4B,
} from "../../imports/БазовыеЭлементыUiKit";
import {
  M2L3Q1A, M2L3Q1B,
  M2L3Q2A, M2L3Q2B,
  M2L3Q3A, M2L3Q3B,
  M2L3Q4A, M2L3Q4B,
} from "../../imports/СеткаИОтступы";
import {
  M2L4Q1A, M2L4Q1B,
  M2L4Q2A, M2L4Q2B,
  M2L4Q3A, M2L4Q3B,
  M2L4Q4A, M2L4Q4B,
} from "../../imports/КомпонентыВFigma";
import {
  M2L5Q1A, M2L5Q1B,
  M2L5Q2A, M2L5Q2B,
  M2L5Q3A, M2L5Q3B,
  M2L5Q4A, M2L5Q4B,
} from "../../imports/СозданиеUiKit";
import {
  M3L1Q1A, M3L1Q1B,
  M3L1Q2A, M3L1Q2B,
  M3L1Q3A, M3L1Q3B,
  M3L1Q4A, M3L1Q4B,
} from "../../imports/ЧтоТакоеUiKit";
import {
  M3L2Q1A, M3L2Q1B,
  M3L2Q2A, M3L2Q2B,
  M3L2Q3A, M3L2Q3B,
  M3L2Q4A, M3L2Q4B,
} from "../../imports/БазовыеЭлементыUiKit-439-884";
import {
  M3L3Q1A, M3L3Q1B,
  M3L3Q2A, M3L3Q2B,
  M3L3Q3A, M3L3Q3B,
  M3L3Q4A, M3L3Q4B,
} from "../../imports/СеткаИОтступы-439-888";
import {
  M3L4Q1A, M3L4Q1B,
  M3L4Q2A, M3L4Q2B,
  M3L4Q3A, M3L4Q3B,
  M3L4Q4A, M3L4Q4B,
} from "../../imports/КомпонентыВFigma-439-892";
import {
  M3L5Q1A, M3L5Q1B,
  M3L5Q2A, M3L5Q2B,
  M3L5Q3A, M3L5Q3B,
  M3L5Q4A, M3L5Q4B,
  M3L5Q5A, M3L5Q5B,
} from "../../imports/СозданиеUiKit-439-896";

// ─── Content Divider Component ────────────────────────────────────────────────

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

// ─── Helper Component for Text Content ────────────────────────────────────────

interface TextSectionProps {
  emoji: string;
  title: string;
  children: React.ReactNode;
}

function TextSection({ emoji, title, children }: TextSectionProps) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#f1f2fb] text-[18px] w-full">
      <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium min-h-[24px] leading-[24px] relative shrink-0">
        {emoji} {title}
      </p>
      <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] min-w-full opacity-80 relative shrink-0 flex flex-col gap-[8px]">
        {children}
      </div>
    </div>
  );
}

const H = (text: string) => <span className="bg-[#46545b] rounded-[6px] px-[7px] py-[1px] text-[#f1f2fb]">{text}</span>;

// ─── Types ─────────────────────────────────────────────────────────────────────

export interface AccordionSection {
  title: string;
  content: React.ReactNode;
  quizQuestion: string;
  quizLabel: string;
  quizLeftNode: React.ReactNode;
  quizRightNode: React.ReactNode;
  quizLeftCorrect: boolean;
  quizRightCorrect: boolean;
  correctFeedback: string;
  incorrectFeedback: string;
}

export interface LessonContentData {
  lessonId: string;
  title: string;
  moduleLabel?: string;
  duration: string;
  level: string;
  heroImage: "color" | "default"; // Can be extended with more hero variants
  sections: AccordionSection[];
}

// ─── Lesson Content ────────────────────────────────────────────────────────────

export const LESSON_CONTENT: Record<string, LessonContentData> = {
  // ═══ ЦВЕТ В UX/UI ═══════════════════════════════════════════════════════════
  "color-lesson": {
    lessonId: "color-lesson",
    title: "Цвет в UX/UI",
    duration: "7 мин",
    level: "",
    heroImage: "color",
    sections: [
      // ─── 1. Цвет делает интерфейс понятнее ───────────────────────────────────
      {
        title: "Цвет делает интерфейс понятнее",
        content: (
          <>
            <TextSection emoji="🎯" title="Почему это работает">
              <p>Цвет — один из самых быстрых способов передать информацию в интерфейсе.</p>
              <p>Пользователь воспринимает цвет за {H("доли секунды")}, даже не читая текст.</p>
              <p>С помощью цвета можно показать:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">где главное действие</li>
                <li className="ms-[27px]">какие элементы можно нажимать</li>
                <li className="ms-[27px]">что является второстепенной информацией</li>
              </ul>
              <p>Если цвет используется правильно — интерфейс становится {H("понятнее")} и легче читается.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где цвет помогает заметить кнопку входа?",
        quizLabel: "Закрепим!",
        quizLeftNode: <ColorTheoryExample index={0} correct={false} />,
        quizRightNode: <ColorTheoryExample index={0} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Цветная кнопка «Войти» выделяется среди нейтральных полей. Так главное действие легче найти.",
        incorrectFeedback: "Цветная кнопка «Войти» выделяется среди нейтральных полей. Так главное действие легче найти.",
      },
      // ─── 2. Цвет выделяет действия ───────────────────────────────────────────
      {
        title: "Цвет выделяет действия",
        content: (
          <>
            <TextSection emoji="🎨" title="Кнопки и интерактивные элементы">
              <p>В интерфейсах цвет часто используют для {H("действий")}. Например:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">кнопка «Купить»</li>
                <li className="ms-[27px]">кнопка «Продолжить»</li>
                <li className="ms-[27px]">ссылка</li>
                <li className="ms-[27px]">активный элемент меню</li>
              </ul>
              <p>Если кнопка имеет цвет, а остальные элементы нейтральные — пользователь быстрее понимает, куда нажимать.</p>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Главное правило">
              <p>Важные действия должны {H("выделяться цветом")}.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где кнопка оформления заказа заметнее?",
        quizLabel: "Закрепим!",
        quizLeftNode: <ColorTheoryExample index={1} correct={false} />,
        quizRightNode: <ColorTheoryExample index={1} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Кнопка «Оформить заказ» выделена цветом, а товары и цены остаются нейтральными.",
        incorrectFeedback: "Кнопка «Оформить заказ» выделена цветом, а товары и цены остаются нейтральными.",
      },
      // ─── 3. Цвет показывает состояние ────────────────────────────────────────
      {
        title: "Цвет показывает состояние",
        content: (
          <>
            <TextSection emoji="🎨" title="Цветовые сигналы">
              <p>Цвет помогает быстро понять, что происходит в интерфейсе. Например:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">🟢 зелёный — успех</li>
                <li className="ms-[27px]">🔴 красный — ошибка</li>
                <li className="ms-[27px]">🟡 жёлтый — предупреждение</li>
                <li className="ms-[27px]">🔵 синий — действие или ссылка</li>
              </ul>
              <p>Такие сигналы считываются {H("мгновенно")} и помогают пользователю быстрее ориентироваться.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где ошибка в поле показана понятнее?",
        quizLabel: "Проверим",
        quizLeftNode: <ColorTheoryExample index={2} correct={false} />,
        quizRightNode: <ColorTheoryExample index={2} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Красная рамка и подпись «Неверный формат email» вместе показывают, какое поле нужно исправить.",
        incorrectFeedback: "Красная рамка и подпись «Неверный формат email» вместе показывают, какое поле нужно исправить.",
      },
      // ─── 4. Цветовая система ─────────────────────────────────────────────────
      {
        title: "Цветовая система",
        content: (
          <>
            <TextSection emoji="🎨" title="Из чего состоит палитра">
              <p>Хороший интерфейс использует не случайные цвета, а небольшую {H("систему")}. Обычно она состоит из:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">{H("Primary color")} — основной цвет действий</li>
                <li className="ms-[27px]">{H("Secondary color")} — дополнительный цвет</li>
                <li className="ms-[27px]">{H("Neutral colors")} — фон, текст, карточки</li>
                <li className="ms-[27px]">{H("Status colors")} — успех, ошибка, предупреждение</li>
              </ul>
              <p>Когда цвета работают как система — интерфейс выглядит аккуратно и понятнее.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где одинаковые действия обозначены одним цветом?",
        quizLabel: "Закрепим!",
        quizLeftNode: <ColorTheoryExample index={3} correct={false} />,
        quizRightNode: <ColorTheoryExample index={3} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Обе кнопки «Открыть» выполняют одинаковое действие и имеют один цвет. Это последовательное правило.",
        incorrectFeedback: "Обе кнопки «Открыть» выполняют одинаковое действие и имеют один цвет. Это последовательное правило.",
      },
      // ─── 5. Ошибка: слишком много цветов ─────────────────────────────────────
      {
        title: "Ошибка: слишком много цветов",
        content: (
          <>
            <TextSection emoji="⚠️" title="Что пойдёт не так">
              <p>Одна из самых частых ошибок в дизайне — использовать слишком много разных цветов.</p>
              <p>Когда каждый элемент окрашен по-разному:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">интерфейс выглядит хаотично</li>
                <li className="ms-[27px]">внимание пользователя рассеивается</li>
                <li className="ms-[27px]">сложнее понять, куда смотреть</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Как правильно">
              <p>В интерфейсах обычно используют: {H("1 основной цвет")} + нейтральные цвета + {H("1–2 дополнительных")}.</p>
              <p>Так интерфейс остаётся чистым и понятным.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Какой интерфейс не перегружен цветами?",
        quizLabel: "Проверим",
        quizLeftNode: <ColorTheoryExample index={4} correct={false} />,
        quizRightNode: <ColorTheoryExample index={4} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Строки задач нейтральные; цвет выделяет только кнопку «Добавить задачу», а не каждый элемент списка.",
        incorrectFeedback: "Строки задач нейтральные; цвет выделяет только кнопку «Добавить задачу», а не каждый элемент списка.",
      },
      // ─── 6. Простое правило цвета ─────────────────────────────────────────────
      {
        title: "Простое правило цвета",
        content: (
          <>
            <TextSection emoji="🧠" title="Задайте себе вопрос">
              <p>Перед использованием цвета полезно задать себе вопрос:</p>
              <p><em>Что на этом экране самое важное?</em></p>
              <p>И сделать именно этот элемент {H("самым заметным по цвету")}.</p>
              <p>Если цвет помогает пользователю быстрее понять интерфейс — значит он работает правильно.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где цвет выделяет начало урока?",
        quizLabel: "Закрепим!",
        quizLeftNode: <ColorTheoryExample index={5} correct={false} />,
        quizRightNode: <ColorTheoryExample index={5} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Цвет выделяет «Начать урок». «Программа курса» и «О преподавателе» остаются второстепенными.",
        incorrectFeedback: "Цвет выделяет «Начать урок». «Программа курса» и «О преподавателе» остаются второстепенными.",
      },
    ],
  },

  // ═══ КОНТРАСТ ═══════════════════════════════════════════════════════════════
  "contrast-lesson": {
    lessonId: "contrast-lesson",
    title: "Контраст",
    duration: "8 мин",
    level: "Новенький",
    heroImage: "color",
    sections: [
      // ─── 1. Что такое контраст ────────────────────────────────────────────────
      {
        title: "Что такое контраст",
        content: (
          <>
            <TextSection emoji="🎯" title="Как контраст помогает пользователю">
              <p>Контраст — это {H("разница между элементами")}.</p>
              <p>Когда элементы отличаются друг от друга, пользователь быстро понимает:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">что главное</li>
                <li className="ms-[27px]">что второстепенное</li>
                <li className="ms-[27px]">куда нажимать</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Виды контраста">
              <p>Контраст может быть:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">{H("по размеру")}</li>
                <li className="ms-[27px]">{H("по цвету")}</li>
                <li className="ms-[27px]">{H("по форме")}</li>
                <li className="ms-[27px]">{H("по толщине линий")}</li>
              </ul>
              <p>Если всё выглядит одинаково, пользователь <em>теряется</em>.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где главное действие заметнее?",
        quizLabel: "Закрепим!",
        quizLeftNode: <ContrastQuiz1VariantA />,
        quizRightNode: <ContrastQuiz1VariantB />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Кнопка «Читать далее» выделяется на фоне текста и второстепенного действия «Пропустить».",
        incorrectFeedback: "Кнопка «Читать далее» выделяется на фоне текста и второстепенного действия «Пропустить».",
      },
      // ─── 2. Контраст размера ──────────────────────────────────────────────────
      {
        title: "Контраст размера",
        content: (
          <>
            <TextSection emoji="📏" title="Размер управляет вниманием">
              <p>Самый {H("простой и мощный")} контраст — это размер.</p>
              <p>Большое притягивает внимание быстрее, чем маленькое.</p>
              <p>Поэтому заголовок больше текста, а кнопка больше подписи.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где заголовок заметнее благодаря размеру?",
        quizLabel: "Закрепим!",
        quizLeftNode: <ContrastQuiz2VariantA />,
        quizRightNode: <ContrastQuiz2VariantB />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Крупный заголовок «Как улучшить дизайн» отличается от описания и первым привлекает внимание.",
        incorrectFeedback: "Крупный заголовок «Как улучшить дизайн» отличается от описания и первым привлекает внимание.",
      },
      // ─── 3. Визуальная иерархия ───────────────────────────────────────────────
      {
        title: "Визуальная иерархия",
        content: (
          <>
            <TextSection emoji="📶" title="Как размер создаёт порядок">
              <p>Контраст размера создаёт {H("иерархию")} на экране:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">крупные элементы — {H("важные")}</li>
                <li className="ms-[27px]">средние — второстепенные</li>
                <li className="ms-[27px]">мелкие — вспомогательные</li>
              </ul>
              <p>Так интерфейс становится <em>понятным</em>.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где заголовок важнее описания по размеру?",
        quizLabel: "Проверим",
        quizLeftNode: <ContrastQuiz4VariantA />,
        quizRightNode: <ContrastQuiz4VariantB />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Заголовок «Завершить настройку» крупнее описания. Разница размеров показывает порядок чтения.",
        incorrectFeedback: "Заголовок «Завершить настройку» крупнее описания. Разница размеров показывает порядок чтения.",
      },
      // ─── 4. Контраст цвета ────────────────────────────────────────────────────
      {
        title: "Контраст цвета",
        content: (
          <>
            <TextSection emoji="🎨" title="Цвет выделяет действия">
              <p>Цветовой контраст помогает выделить действия.</p>
              <p>Кнопка должна {H("отличаться от фона")} и окружающих элементов.</p>
              <p>Иначе пользователь может просто её не заметить.</p>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Доступность">
              <p>Контраст важен не только для красоты, но и для {H("доступности")}.</p>
              <p>Текст должен быть достаточно тёмным на светлом фоне или светлым на тёмном.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Какая кнопка записи заметнее?",
        quizLabel: "Закрепим!",
        quizLeftNode: <ColorContrastExample correct={false} />,
        quizRightNode: <ColorContrastExample correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Контрастная кнопка «Записаться» хорошо отделяется от светлого фона. Бледная кнопка с ним сливается.",
        incorrectFeedback: "Контрастная кнопка «Записаться» хорошо отделяется от светлого фона. Бледная кнопка с ним сливается.",
      },
      // ─── 5. Контраст формы и веса ─────────────────────────────────────────────
      {
        title: "Контраст формы и веса",
        content: (
          <>
            <TextSection emoji="✨" title="Форма создаёт акцент">
              <p>Контраст — это не только цвет и размер.</p>
              <p>{H("Форма, толщина и насыщенность")} тоже помогают выделять элементы. Например:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">жирный текст рядом с обычным</li>
                <li className="ms-[27px]">круглая кнопка среди прямоугольных</li>
                <li className="ms-[27px]">залитая иконка среди контурных</li>
              </ul>
            </TextSection>
          </>
        ),
        quizQuestion: "Где важная информация выделена начертанием?",
        quizLabel: "Проверим",
        quizLeftNode: <ContrastQuiz5VariantA />,
        quizRightNode: <ContrastQuiz5VariantB />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Более насыщенное начертание выделяет «Важную информацию» среди второстепенных подписей.",
        incorrectFeedback: "Более насыщенное начертание выделяет «Важную информацию» среди второстепенных подписей.",
      },
      // ─── 6. Правило баланса ───────────────────────────────────────────────────
      {
        title: "Правило баланса",
        content: (
          <>
            <TextSection emoji="⚡" title="Один акцент лучше многих">
              <p>Слишком {H("слабый")} контраст делает интерфейс скучным и непонятным.</p>
              <p>Слишком {H("сильный")} — утомляет и создаёт визуальный шум.</p>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="💡" title="Как найти баланс">
              <p>Лучше всего работает {H("один главный акцент")} и спокойная база вокруг него.</p>
              <p>Контраст должен помогать пользователю понять, что здесь {H("самое важное")}.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где выделено только главное действие?",
        quizLabel: "Закрепим!",
        quizLeftNode: <BalanceExample correct={false} />,
        quizRightNode: <BalanceExample correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Кнопка «Создать» — единственный сильный акцент. «Экспорт» и «Настройки» не конкурируют с ней.",
        incorrectFeedback: "Кнопка «Создать» — единственный сильный акцент. «Экспорт» и «Настройки» не конкурируют с ней.",
      },
    ],
  },

  // ═══ ИЕРАРХИЯ ═══════════════════════════════════════════════════════════════
  "hierarchy-lesson": {
    lessonId: "hierarchy-lesson",
    title: "Иерархия в UX/UI",
    duration: "7 мин",
    level: "",
    heroImage: "color",
    sections: [
      // ─── 1. Иерархия делает интерфейс понятным ───────────────────────────────
      {
        title: "Иерархия делает интерфейс понятным",
        content: (
          <>
            <TextSection emoji="🎯" title="Что такое визуальная иерархия">
              <p>Визуальная иерархия — это порядок, в котором пользователь видит элементы на экране.</p>
              <p>Она помогает быстро понять:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">куда смотреть сначала</li>
                <li className="ms-[27px]">что главное</li>
                <li className="ms-[27px]">что второстепенное</li>
              </ul>
              <p>Если иерархия выстроена правильно, пользователь понимает интерфейс за {H("несколько секунд")}.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где легче заметить начало обучения?",
        quizLabel: "Закрепим!",
        quizLeftNode: <PortableTheoryExample lessonId="hierarchy-lesson" index={0} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="hierarchy-lesson" index={0} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "«Начать обучение» выделено сильнее «Программы курса»: видно, с какого действия начать.",
        incorrectFeedback: "«Начать обучение» выделено сильнее «Программы курса»: видно, с какого действия начать.",
      },
      // ─── 2. Как пользователь смотрит на экран ────────────────────────────────
      {
        title: "Как пользователь смотрит на экран",
        content: (
          <>
            <TextSection emoji="👀" title="Сканирование, не чтение">
              <p>Пользователь не читает интерфейс по порядку. Сначала он {H("сканирует экран")} глазами.</p>
              <p>Обычно внимание движется так:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">сначала самый заметный элемент</li>
                <li className="ms-[27px]">затем крупные заголовки</li>
                <li className="ms-[27px]">потом основной текст</li>
                <li className="ms-[27px]">и только после — мелкие детали</li>
              </ul>
              <p>Поэтому важно сразу показать пользователю, где {H("главный элемент")} на экране.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где быстрее найти информацию об отступах?",
        quizLabel: "Закрепим!",
        quizLeftNode: <PortableTheoryExample lessonId="hierarchy-lesson" index={1} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="hierarchy-lesson" index={1} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Подзаголовок «Интервалы» указывает на совет об отступах. Его можно найти, не читая весь текст подряд.",
        incorrectFeedback: "Подзаголовок «Интервалы» указывает на совет об отступах. Его можно найти, не читая весь текст подряд.",
      },
      // ─── 3. Что делает элемент главным ───────────────────────────────────────
      {
        title: "Что делает элемент главным",
        content: (
          <>
            <TextSection emoji="⭐" title="Способы выделить элемент">
              <p>Элемент становится главным, если он {H("выделяется")} среди остальных.</p>
              <p>Это можно сделать с помощью:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">размера</li>
                <li className="ms-[27px]">цвета</li>
                <li className="ms-[27px]">контраста</li>
                <li className="ms-[27px]">расстояния между элементами</li>
              </ul>
              <p>Если один элемент отличается сильнее остальных — пользователь заметит его {H("первым")}.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где сохранение выделено как главное действие?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="hierarchy-lesson" index={2} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="hierarchy-lesson" index={2} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "«Сохранить изменения» заметнее «Отмены». Основное действие отделено от второстепенного.",
        incorrectFeedback: "«Сохранить изменения» заметнее «Отмены». Основное действие отделено от второстепенного.",
      },
      // ─── 4. Иерархия через размер ────────────────────────────────────────────
      {
        title: "Иерархия через размер",
        content: (
          <>
            <TextSection emoji="📐" title="Большое = важное">
              <p>Размер — один из самых простых способов создать иерархию. Обычно используют такую структуру:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">{H("крупный заголовок")}</li>
                <li className="ms-[27px]">средний текст</li>
                <li className="ms-[27px]">мелкие подписи</li>
              </ul>
              <p>Когда элементы отличаются по размеру, интерфейс становится {H("легче читать")}.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где название и цена выделены размером?",
        quizLabel: "Закрепим!",
        quizLeftNode: <PortableTheoryExample lessonId="hierarchy-lesson" index={3} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="hierarchy-lesson" index={3} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Название наушников и цена крупнее описания. Размер показывает, какую информацию читать сначала.",
        incorrectFeedback: "Название наушников и цена крупнее описания. Размер показывает, какую информацию читать сначала.",
      },
      // ─── 5. Иерархия через расстояние ────────────────────────────────────────
      {
        title: "Иерархия через расстояние",
        content: (
          <>
            <TextSection emoji="📏" title="Близко = связано">
              <p>Расстояние между элементами тоже создаёт структуру.</p>
              <p>Элементы, которые находятся {H("ближе друг к другу")}, воспринимаются как одна группа.</p>
              <p>Например:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">заголовок рядом с текстом</li>
                <li className="ms-[27px]">кнопка рядом с формой</li>
                <li className="ms-[27px]">карточки расположены одинаково</li>
              </ul>
              <p>Так пользователю проще понять, какие элементы {H("связаны между собой")}.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где имя и email воспринимаются как одна группа?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="hierarchy-lesson" index={4} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="hierarchy-lesson" index={4} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Имя и email расположены рядом. Настройки уведомлений отделены большим расстоянием и образуют другую группу.",
        incorrectFeedback: "Имя и email расположены рядом. Настройки уведомлений отделены большим расстоянием и образуют другую группу.",
      },
      // ─── 6. Ошибка: всё одинаково важное ─────────────────────────────────────
      {
        title: "Ошибка: всё одинаково важное",
        content: (
          <>
            <TextSection emoji="⚠️" title="Когда иерархии нет">
              <p>Иногда в интерфейсе все элементы выглядят одинаково. Например:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">одинаковый размер текста</li>
                <li className="ms-[27px]">одинаковые кнопки</li>
                <li className="ms-[27px]">одинаковые цвета</li>
              </ul>
              <p>В такой ситуации пользователь не понимает, {H("с чего начать")}.</p>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Как правильно">
              <p>Хорошая иерархия всегда показывает, {H("что самое главное")} на экране.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где скачивание выделено среди других действий?",
        quizLabel: "Закрепим!",
        quizLeftNode: <PortableTheoryExample lessonId="hierarchy-lesson" index={5} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="hierarchy-lesson" index={5} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "«Скачать» — главный акцент. «Поделиться» и «Закрыть» оформлены спокойнее и не конкурируют с ним.",
        incorrectFeedback: "«Скачать» — главный акцент. «Поделиться» и «Закрыть» оформлены спокойнее и не конкурируют с ним.",
      },
    ],
  },

  // ═══ ЧТО ТАКОЕ UX ═══════════════════════════════════════════════════════════
  "what-is-ux-lesson": {
    lessonId: "what-is-ux-lesson",
    title: "Что такое UX",
    duration: "6 мин",
    level: "Новенький",
    heroImage: "color",
    sections: [
      // ─── 1. UX — опыт пользователя ───────────────────────────────────────────
      {
        title: "UX — опыт пользователя",
        content: (
          <>
            <TextSection emoji="🎯" title="Что такое UX">
              <p>{H("UX (User Experience)")} — это опыт человека при использовании продукта.</p>
              <p>UX показывает:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">насколько легко пользоваться интерфейсом</li>
                <li className="ms-[27px]">насколько быстро можно выполнить задачу</li>
                <li className="ms-[27px]">насколько понятны действия</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="💡" title="Шире, чем дизайн экрана">
              <p>UX — это не только внешний вид. Это {H("структура интерфейса")}, логика действий и поведение элементов.</p>
              <p>Хороший UX делает продукт {H("понятным и удобным")}.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где проще заказать пиццу без отвлечений?",
        quizLabel: "Закрепим!",
        quizLeftNode: <PortableTheoryExample lessonId="what-is-ux-lesson" index={0} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="what-is-ux-lesson" index={0} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Рядом с пиццей сразу видна кнопка заказа. Рекламные блоки не отвлекают от выбранной задачи.",
        incorrectFeedback: "Рядом с пиццей сразу видна кнопка заказа. Рекламные блоки не отвлекают от выбранной задачи.",
      },
      // ─── 2. Как пользователь воспринимает интерфейс ──────────────────────────
      {
        title: "Как пользователь воспринимает интерфейс",
        content: (
          <>
            <TextSection emoji="👤" title="Первые секунды решают всё">
              <p>Когда пользователь открывает интерфейс, он действует {H("очень быстро")}:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">сканирует экран</li>
                <li className="ms-[27px]">ищет знакомые элементы</li>
                <li className="ms-[27px]">пытается понять, что можно сделать</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Ожидания пользователя">
              <p>Если интерфейс соответствует ожиданиям — пользователь начинает пользоваться им {H("почти сразу")}.</p>
              <p>Если нет — возникает путаница и желание уйти.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где ничто не отвлекает от покупки наушников?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="what-is-ux-lesson" index={1} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="what-is-ux-lesson" index={1} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Цена и переход к оплате находятся на экране товара. Посторонние предложения не мешают покупке.",
        incorrectFeedback: "Цена и переход к оплате находятся на экране товара. Посторонние предложения не мешают покупке.",
      },
      // ─── 3. Простота интерфейса ───────────────────────────────────────────────
      {
        title: "Простота интерфейса",
        content: (
          <>
            <TextSection emoji="✨" title="Когнитивная нагрузка">
              <p>Каждый элемент интерфейса требует внимания. Чем больше элементов:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">тем сложнее ориентироваться</li>
                <li className="ms-[27px]">тем больше времени нужно на решение</li>
              </ul>
              <p>Это называется {H("когнитивная нагрузка")}.</p>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Как снизить нагрузку">
              <p>Хороший UX снижает когнитивную нагрузку:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">показывает только нужные элементы</li>
                <li className="ms-[27px]">выделяет главное действие</li>
                <li className="ms-[27px]">убирает лишнее</li>
              </ul>
            </TextSection>
          </>
        ),
        quizQuestion: "Где оставлены только данные для входа по email?",
        quizLabel: "Закрепим!",
        quizLeftNode: <PortableTheoryExample lessonId="what-is-ux-lesson" index={2} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="what-is-ux-lesson" index={2} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Для входа нужны email и пароль. Имя и город в этом сценарии добавляют необязательные поля.",
        incorrectFeedback: "Для входа нужны email и пароль. Имя и город в этом сценарии добавляют необязательные поля.",
      },
      // ─── 4. Проблемы UX ──────────────────────────────────────────────────────
      {
        title: "Проблемы UX",
        content: (
          <>
            <TextSection emoji="⚠️" title="Что мешает пользователю">
              <p>Плохой UX возникает, когда интерфейс {H("мешает выполнить задачу")}.</p>
              <p>Типичные проблемы:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">слишком много шагов</li>
                <li className="ms-[27px]">непонятные кнопки</li>
                <li className="ms-[27px]">перегруженный экран</li>
                <li className="ms-[27px]">нелогичная структура</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="📉" title="Результат плохого UX">
              <p>Такие проблемы создают {H("фрустрацию")}.</p>
              <p>В результате пользователь может уйти из продукта — и не вернуться.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где меню подтверждает, что открыт раздел курсов?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="what-is-ux-lesson" index={3} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="what-is-ux-lesson" index={3} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "В меню выделены «Курсы», а заголовок подтверждает текущий раздел. Не нужно угадывать своё положение.",
        incorrectFeedback: "В меню выделены «Курсы», а заголовок подтверждает текущий раздел. Не нужно угадывать своё положение.",
      },
    ],
  },

  // ═══ USER FLOW ═══════════════════════════════════════════════════════════════
  "user-flow-lesson": {
    lessonId: "user-flow-lesson",
    title: "User Flow",
    duration: "7 мин",
    level: "Новенький",
    heroImage: "color",
    sections: [
      // ─── 1. User Flow — путь пользователя ────────────────────────────────────
      {
        title: "User Flow — путь пользователя",
        content: (
          <>
            <TextSection emoji="🧭" title="Что такое User Flow">
              <p>{H("User Flow")} — это последовательность действий пользователя в продукте.</p>
              <p>Это путь от входа в интерфейс до результата. Например:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">1 — открыть товар</li>
                <li className="ms-[27px]">2 — добавить в корзину</li>
                <li className="ms-[27px]">3 — оформить заказ</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Признаки хорошего User Flow">
              <p>Хороший User Flow:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">{H("короткий")} — минимум шагов</li>
                <li className="ms-[27px]">{H("понятный")} — каждый шаг ясен</li>
                <li className="ms-[27px]">{H("предсказуемый")} — пользователь знает, что будет дальше</li>
              </ul>
            </TextSection>
          </>
        ),
        quizQuestion: "Где регистрация не требует ненужной анкеты?",
        quizLabel: "Закрепим!",
        quizLeftNode: <PortableTheoryExample lessonId="user-flow-lesson" index={0} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="user-flow-lesson" index={0} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Оба пути заканчиваются созданием аккаунта, но короткий путь не требует анкеты, ненужной для входа.",
        incorrectFeedback: "Оба пути заканчиваются созданием аккаунта, но короткий путь не требует анкеты, ненужной для входа.",
      },
      // ─── 2. Цель пользователя ────────────────────────────────────────────────
      {
        title: "Цель пользователя",
        content: (
          <>
            <TextSection emoji="🎯" title="Сценарий строится вокруг цели">
              <p>Каждый сценарий должен строиться вокруг {H("цели пользователя")}.</p>
              <p>Пользователь должен быстро понять:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">что здесь можно сделать</li>
                <li className="ms-[27px]">как это сделать</li>
                <li className="ms-[27px]">что произойдёт дальше</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⚡" title="Ясность = скорость">
              <p>Когда цель {H("ясна с первого взгляда")}, пользователь быстрее принимает решения.</p>
              <p>Главное действие должно быть видно сразу — без поиска.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где кнопка ясно ведёт к записи на курс?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="user-flow-lesson" index={1} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="user-flow-lesson" index={1} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "«Записаться на курс» называет результат действия. «Подробнее» не объясняет, как перейти к записи.",
        incorrectFeedback: "«Записаться на курс» называет результат действия. «Подробнее» не объясняет, как перейти к записи.",
      },
      // ─── 3. Шаги пользователя ────────────────────────────────────────────────
      {
        title: "Шаги пользователя",
        content: (
          <>
            <TextSection emoji="🪜" title="Из чего состоит путь">
              <p>Любая задача в интерфейсе состоит из {H("шагов")}.</p>
              <p>Каждый шаг требует:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">внимания</li>
                <li className="ms-[27px]">времени</li>
                <li className="ms-[27px]">принятия решения</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Меньше лишних шагов">
              <p>UX-дизайн старается {H("убрать лишние переходы")}.</p>
              <p>При этом сохраняют необходимые данные, понятность и подтверждение результата.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где покупка одного товара требует меньше переходов?",
        quizLabel: "Закрепим!",
        quizLeftNode: <PortableTheoryExample lessonId="user-flow-lesson" index={2} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="user-flow-lesson" index={2} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Адрес уже сохранён. Можно перейти от товара к оплате без отдельного экрана корзины; оба пути заканчиваются «Готово».",
        incorrectFeedback: "Адрес уже сохранён. Можно перейти от товара к оплате без отдельного экрана корзины; оба пути заканчиваются «Готово».",
      },
      // ─── 4. Ошибки сценариев ─────────────────────────────────────────────────
      {
        title: "Ошибки сценариев",
        content: (
          <>
            <TextSection emoji="⚠️" title="Когда сценарий ломается">
              <p>Проблемы возникают, когда сценарий:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">слишком длинный</li>
                <li className="ms-[27px]">содержит лишние действия</li>
                <li className="ms-[27px]">имеет запутанные переходы</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="💡" title="Friction — трение в интерфейсе">
              <p>Такие сценарии создают {H("трение (friction)")} — сопротивление, которое мешает пользователю двигаться вперёд.</p>
              <p>Задача UX-дизайна — сделать путь {H("максимально простым")}.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где переходы ведут к покупке без возвратов?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="user-flow-lesson" index={3} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="user-flow-lesson" index={3} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Путь последовательно ведёт от каталога к товару, оплате и завершению. Нет возвратов между каталогом и корзиной.",
        incorrectFeedback: "Путь последовательно ведёт от каталога к товару, оплате и завершению. Нет возвратов между каталогом и корзиной.",
      },
    ],
  },

  // ═══ СТРУКТУРА ИНТЕРФЕЙСА ════════════════════════════════════════════════════
  "interface-structure-lesson": {
    lessonId: "interface-structure-lesson",
    title: "Структура интерфейса",
    duration: "7 мин",
    level: "Новенький",
    heroImage: "color",
    sections: [
      // ─── 1. Экран как система блоков ─────────────────────────────────────────
      {
        title: "Экран как система блоков",
        content: (
          <>
            <TextSection emoji="🧱" title="Информационные блоки">
              <p>Любой экран можно представить как набор {H("информационных блоков")}. Например:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">заголовок</li>
                <li className="ms-[27px]">описание</li>
                <li className="ms-[27px]">карточки</li>
                <li className="ms-[27px]">кнопки</li>
                <li className="ms-[27px]">формы</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Зачем нужна структура">
              <p>Блоки помогают {H("организовать информацию")}.</p>
              <p>Когда структура понятна, пользователь быстрее читает интерфейс и находит нужное.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где описание отделено от программы курса?",
        quizLabel: "Закрепим!",
        quizLeftNode: <PortableTheoryExample lessonId="interface-structure-lesson" index={0} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="interface-structure-lesson" index={0} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Описание и программа оформлены отдельными смысловыми блоками. Их не нужно вычитывать из сплошного абзаца.",
        incorrectFeedback: "Описание и программа оформлены отдельными смысловыми блоками. Их не нужно вычитывать из сплошного абзаца.",
      },
      // ─── 2. Группировка информации ───────────────────────────────────────────
      {
        title: "Группировка информации",
        content: (
          <>
            <TextSection emoji="📦" title="Принцип близости">
              <p>UX использует {H("принцип близости элементов")}.</p>
              <p>Если элементы связаны между собой, они должны:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">находиться рядом</li>
                <li className="ms-[27px]">иметь одинаковые отступы</li>
                <li className="ms-[27px]">образовывать единый блок</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Результат группировки">
              <p>Так пользователь {H("быстрее понимает смысл")} интерфейса — без дополнительных объяснений.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где контакты отделены от настроек безопасности?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="interface-structure-lesson" index={1} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="interface-structure-lesson" index={1} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Имя и email собраны вместе, пароль и вход по коду — в другой группе. В перемешанном списке эти связи не видны.",
        incorrectFeedback: "Имя и email собраны вместе, пароль и вход по коду — в другой группе. В перемешанном списке эти связи не видны.",
      },
      // ─── 3. Логика экрана ────────────────────────────────────────────────────
      {
        title: "Логика экрана",
        content: (
          <>
            <TextSection emoji="🧭" title="Естественный порядок чтения">
              <p>Информация должна располагаться в {H("естественном порядке")} чтения. Например:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">1 — заголовок</li>
                <li className="ms-[27px]">2 — описание</li>
                <li className="ms-[27px]">3 — цена</li>
                <li className="ms-[27px]">4 — кнопка действия</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Почему это важно">
              <p>Такой порядок помогает пользователю {H("быстро понять интерфейс")} без дополнительных объяснений.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где товар, цена и покупка идут в понятном порядке?",
        quizLabel: "Закрепим!",
        quizLeftNode: <PortableTheoryExample lessonId="interface-structure-lesson" index={2} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="interface-structure-lesson" index={2} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Сначала описание наушников, затем цена и кнопка «Купить». Не приходится искать данные после кнопки.",
        incorrectFeedback: "Сначала описание наушников, затем цена и кнопка «Купить». Не приходится искать данные после кнопки.",
      },
      // ─── 4. Сканирование экрана ──────────────────────────────────────────────
      {
        title: "Сканирование экрана",
        content: (
          <>
            <TextSection emoji="👀" title="Сначала заголовки">
              <p>Чтобы найти нужную информацию, пользователь часто сначала просматривает {H("заголовки и подзаголовки")}.</p>
              <p>Назовите блоки по содержанию: например, «Описание» и «Программа курса».</p>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="📖" title="Разбейте текст по смыслу">
              <p>Размещайте пояснение сразу под его подзаголовком. Отделяйте разные темы небольшим интервалом.</p>
              <p>Так нужный раздел можно найти, {H("не читая весь экран подряд")}.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где быстрее найти программу курса?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="interface-structure-lesson" index={3} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="interface-structure-lesson" index={3} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Подзаголовок «Программа» сразу указывает на «Теорию и практику». В сплошном тексте нужный фрагмент приходится искать.",
        incorrectFeedback: "Подзаголовок «Программа» сразу указывает на «Теорию и практику». В сплошном тексте нужный фрагмент приходится искать.",
      },
    ],
  },

  // ═══ ОСНОВНЫЕ ЭЛЕМЕНТЫ ИНТЕРФЕЙСА ════════════════════════════════════════════
  "interface-elements-lesson": {
    lessonId: "interface-elements-lesson",
    title: "Основные элементы интерфейса",
    duration: "8 мин",
    level: "Новенький",
    heroImage: "color",
    sections: [
      // ─── 1. Кнопки и действия ────────────────────────────────────────────────
      {
        title: "Кнопки и действия",
        content: (
          <>
            <TextSection emoji="🔘" title="Что показывают кнопки">
              <p>Кнопки показывают, {H("какое действие можно выполнить")}.</p>
              <p>В интерфейсе обычно есть:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">{H("главное действие")} — самое важное</li>
                <li className="ms-[27px]">{H("второстепенные действия")} — дополнительные</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Требования к главной кнопке">
              <p>Главное действие должно:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">выделяться визуально</li>
                <li className="ms-[27px]">быть самым заметным</li>
                <li className="ms-[27px]">иметь {H("понятное название")}</li>
              </ul>
            </TextSection>
          </>
        ),
        quizQuestion: "Где название кнопки объясняет, как записаться?",
        quizLabel: "Закрепим!",
        quizLeftNode: <PortableTheoryExample lessonId="interface-elements-lesson" index={0} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="interface-elements-lesson" index={0} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "«Записаться на курс» называет действие. «Открыть» не сообщает, что именно произойдёт.",
        incorrectFeedback: "«Записаться на курс» называет действие. «Открыть» не сообщает, что именно произойдёт.",
      },
      // ─── 2. Формы и ввод данных ──────────────────────────────────────────────
      {
        title: "Формы и ввод данных",
        content: (
          <>
            <TextSection emoji="⌨️" title="Как делать удобные формы">
              <p>Формы позволяют пользователю {H("вводить информацию")}.</p>
              <p>Чтобы форма была удобной:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">у каждого поля должна быть {H("подпись (label)")}</li>
                <li className="ms-[27px]">количество полей — {H("минимальное")}</li>
                <li className="ms-[27px]">структура формы — {H("простая")}</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Простота повышает заполняемость">
              <p>Чем проще форма, тем выше вероятность, что пользователь её заполнит и не бросит на полпути.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где понятно, куда написать свой вопрос?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="interface-elements-lesson" index={1} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="interface-elements-lesson" index={1} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Поля «Email» и «Сообщение» подписаны. Ясно, где оставить контакт и где написать вопрос.",
        incorrectFeedback: "Поля «Email» и «Сообщение» подписаны. Ясно, где оставить контакт и где написать вопрос.",
      },
      // ─── 3. Навигация ────────────────────────────────────────────────────────
      {
        title: "Навигация",
        content: (
          <>
            <TextSection emoji="🧭" title="Что даёт навигация">
              <p>Навигация показывает {H("структуру продукта")}.</p>
              <p>Она помогает ответить на три вопроса:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">где я нахожусь</li>
                <li className="ms-[27px]">куда могу перейти</li>
                <li className="ms-[27px]">как вернуться назад</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Предсказуемость — ключ">
              <p>Хорошая навигация делает интерфейс {H("предсказуемым")}.</p>
              <p>Пользователь всегда знает, где он находится и что будет дальше.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где в меню отмечен текущий раздел курсов?",
        quizLabel: "Закрепим!",
        quizLeftNode: <PortableTheoryExample lessonId="interface-elements-lesson" index={2} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="interface-elements-lesson" index={2} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Выделенный пункт «Курсы» показывает текущее положение в меню; остальные пункты остаются нейтральными.",
        incorrectFeedback: "Выделенный пункт «Курсы» показывает текущее положение в меню; остальные пункты остаются нейтральными.",
      },
      // ─── 4. Информационные блоки ─────────────────────────────────────────────
      {
        title: "Информационные блоки",
        content: (
          <>
            <TextSection emoji="📦" title="Карточки и контейнеры">
              <p>Карточки и контейнеры помогают {H("структурировать информацию")}. Например:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">карточки товаров</li>
                <li className="ms-[27px]">блоки курса</li>
                <li className="ms-[27px]">секции страницы</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Блоки ускоряют восприятие">
              <p>Когда информация разделена на блоки, пользователь {H("быстрее понимает экран")} и находит нужное.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где описание и программа курса разделены на блоки?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="interface-elements-lesson" index={3} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="interface-elements-lesson" index={3} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Отдельные блоки «Описание» и «Программа» помогают найти нужные сведения. Кнопка записи расположена после информации.",
        incorrectFeedback: "Отдельные блоки «Описание» и «Программа» помогают найти нужные сведения. Кнопка записи расположена после информации.",
      },
    ],
  },

  // ═══ ОШИБКИ UX ═══════════════════════════════════════════════════════════════
  "ux-errors-lesson": {
    lessonId: "ux-errors-lesson",
    title: "Ошибки UX",
    duration: "8 мин",
    level: "Новенький",
    heroImage: "color",
    sections: [
      // ─── 1. Сложный сценарий ─────────────────────────────────────────────────
      {
        title: "Сложный сценарий",
        content: (
          <>
            <TextSection emoji="⚠️" title="Слишком много шагов">
              <p>Слишком длинные сценарии — {H("частая ошибка UX")}.</p>
              <p>Когда пользователь должен пройти много шагов:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">возрастает вероятность ошибки</li>
                <li className="ms-[27px]">пользователь может устать</li>
                <li className="ms-[27px]">процесс может прерваться</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Принцип минимума действий">
              <p>Хороший UX {H("минимизирует количество действий")}.</p>
              <p>Каждый лишний шаг — это риск, что пользователь не завершит задачу.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где из регистрации убран ненужный шаг?",
        quizLabel: "Закрепим!",
        quizLeftNode: <PortableTheoryExample lessonId="ux-errors-lesson" index={0} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="ux-errors-lesson" index={0} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Аккаунт создаётся без анкеты, которая не нужна для входа. Подтверждение email и завершение сохранены.",
        incorrectFeedback: "Аккаунт создаётся без анкеты, которая не нужна для входа. Подтверждение email и завершение сохранены.",
      },
      // ─── 2. Непонятная логика ────────────────────────────────────────────────
      {
        title: "Непонятная логика",
        content: (
          <>
            <TextSection emoji="❓" title="Когда результат действия непредсказуем">
              <p>Интерфейс становится сложным, когда пользователь {H("не понимает результат действия")}.</p>
              <p>Например:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">непонятные кнопки без подписей</li>
                <li className="ms-[27px]">скрытые функции</li>
                <li className="ms-[27px]">неожиданные переходы</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Пользователь должен предсказывать">
              <p>Хороший UX позволяет {H("предсказать результат")} каждого действия.</p>
              <p>Если пользователь не уверен, что произойдёт — он не нажмёт кнопку.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где понятно, какая кнопка меняет пароль?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="ux-errors-lesson" index={1} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="ux-errors-lesson" index={1} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "«Изменить пароль» прямо называет результат. По надписи «Действие 1» его предсказать нельзя.",
        incorrectFeedback: "«Изменить пароль» прямо называет результат. По надписи «Действие 1» его предсказать нельзя.",
      },
      // ─── 3. Плохая структура ─────────────────────────────────────────────────
      {
        title: "Плохая структура",
        content: (
          <>
            <TextSection emoji="🧩" title="Хаотичное расположение">
              <p>Когда элементы расположены хаотично:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">нет группировки</li>
                <li className="ms-[27px]">нарушена {H("иерархия")}</li>
                <li className="ms-[27px]">элементы перемешаны</li>
              </ul>
              <p>Такой интерфейс {H("сложно читать")} и сложно понимать.</p>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Структура помогает ориентироваться">
              <p>Хорошая структура помогает пользователю {H("быстро ориентироваться")} — без усилий и лишних поисков.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Где личные данные не смешаны с безопасностью?",
        quizLabel: "Закрепим!",
        quizLeftNode: <PortableTheoryExample lessonId="ux-errors-lesson" index={2} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="ux-errors-lesson" index={2} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Имя и email отделены от пароля и входа по коду. Так настройки не приходится искать в перемешанном списке.",
        incorrectFeedback: "Имя и email отделены от пароля и входа по коду. Так настройки не приходится искать в перемешанном списке.",
      },
      // ─── 4. Перегруженный экран ──────────────────────────────────────────────
      {
        title: "Перегруженный экран",
        content: (
          <>
            <TextSection emoji="📉" title="Визуальный шум">
              <p>Слишком большое количество элементов создаёт {H("визуальный шум")}.</p>
              <p>Человек не понимает:</p>
              <ul className="list-disc flex flex-col gap-[4px]">
                <li className="ms-[27px]">куда смотреть</li>
                <li className="ms-[27px]">что важнее</li>
                <li className="ms-[27px]">какое действие главное</li>
              </ul>
            </TextSection>
            <ContentDivider />
            <TextSection emoji="⭐" title="Меньше — значит лучше">
              <p>Лучший интерфейс — {H("простой и сфокусированный")}.</p>
              <p>На экране должно быть только то, что нужно пользователю прямо сейчас.</p>
            </TextSection>
          </>
        ),
        quizQuestion: "Какой экран не отвлекает от продолжения урока?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="ux-errors-lesson" index={3} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="ux-errors-lesson" index={3} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "На экране остаются курс и продолжение урока. Акции и новости не отвлекают от текущего обучения.",
        incorrectFeedback: "На экране остаются курс и продолжение урока. Акции и новости не отвлекают от текущего обучения.",
      },
    ],
  },

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
        quizQuestion: "Где экран использует элементы показанного набора?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="what-is-ui-kit-lesson" index={0} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="what-is-ui-kit-lesson" index={0} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Кнопка, поле и карточка на экране повторяют формы и цвета элементов набора. Другой экран использует произвольное оформление.",
        incorrectFeedback: "Кнопка, поле и карточка на экране повторяют формы и цвета элементов набора. Другой экран использует произвольное оформление.",
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
            <p>Для повторяющихся элементов создают {H("компоненты")}.</p>
            <p>👉 Вместо того чтобы рисовать их каждый раз заново, дизайнер создаёт их один раз и использует повторно.</p>
          </div>
        ),
        quizQuestion: "Где элементы разложены по своим категориям?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="what-is-ui-kit-lesson" index={1} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="what-is-ui-kit-lesson" index={1} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "В «Кнопках» находится кнопка, в «Полях» — поле ввода, в «Карточках» — карточка курса. Типы не перемешаны.",
        incorrectFeedback: "В «Кнопках» находится кнопка, в «Полях» — поле ввода, в «Карточках» — карточка курса. Типы не перемешаны.",
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
            <p>UI Kit решает это: одинаковые элементы следуют общим правилам.</p>
          </div>
        ),
        quizQuestion: "Где новый цвет применился на обоих экранах?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="what-is-ui-kit-lesson" index={2} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="what-is-ui-kit-lesson" index={2} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "После изменения кнопки в наборе обе связанные кнопки стали синими. Независимые копии сохранили старый цвет.",
        incorrectFeedback: "После изменения кнопки в наборе обе связанные кнопки стали синими. Независимые копии сохранили старый цвет.",
      },
      {
        title: "Зачем нужен UI Kit",
        content: (
          <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
            <p><strong className="opacity-100">Скорость</strong> — не нужно каждый раз заново рисовать элементы.</p>
            <p><strong className="opacity-100">Консистентность</strong> — элементы на разных экранах оформлены по общим правилам.</p>
            <p><strong className="opacity-100">Упрощение разработки</strong> — разработчик понимает, какие элементы использовать.</p>
            <p><strong className="opacity-100">Меньше ошибок</strong> — нет случайных размеров, цветов и отступов.</p>
            <p>👉 UI Kit — это способ сделать дизайн {H("предсказуемым и управляемым")}.</p>
          </div>
        ),
        quizQuestion: "Где карточки курсов используют общую структуру?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="what-is-ui-kit-lesson" index={3} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="what-is-ui-kit-lesson" index={3} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "В обеих карточках название, длительность и кнопка стоят на одинаковых местах. Содержимое меняется, структура сохраняется.",
        incorrectFeedback: "В обеих карточках название, длительность и кнопка стоят на одинаковых местах. Содержимое меняется, структура сохраняется.",
      },
    ],
  },

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
              <li className="ms-[27px]">например: «Отправить», «Купить», «Продолжить»</li>
            </ul>
            <p>Если кнопка непонятна — пользователь не будет действовать.</p>
          </div>
        ),
        quizQuestion: "Где кнопка ясно предлагает купить курс?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="ui-elements-lesson" index={0} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="ui-elements-lesson" index={0} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "«Купить курс» называет действие и объект. «Выполнить» не объясняет результат нажатия.",
        incorrectFeedback: "«Купить курс» называет действие и объект. «Выполнить» не объясняет результат нажатия.",
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
        quizQuestion: "Где понятно, какое поле предназначено для email?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="ui-elements-lesson" index={1} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="ui-elements-lesson" index={1} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Постоянная подпись «Email» объясняет назначение поля. «Поле 2» не подсказывает, какие данные вводить.",
        incorrectFeedback: "Постоянная подпись «Email» объясняет назначение поля. «Поле 2» не подсказывает, какие данные вводить.",
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
        quizQuestion: "Где карточки имеют одинаковый порядок элементов?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="ui-elements-lesson" index={2} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="ui-elements-lesson" index={2} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "В каждой карточке сначала название и длительность, затем «Открыть курс». Порядок и оформление не меняются.",
        incorrectFeedback: "В каждой карточке сначала название и длительность, затем «Открыть курс». Порядок и оформление не меняются.",
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
        quizQuestion: "Где иконки выполнены в одном стиле?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="ui-elements-lesson" index={3} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="ui-elements-lesson" index={3} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "У иконок одинаковый размер и толщина линий. Нет случайного смешения заливки и контурного рисунка.",
        incorrectFeedback: "У иконок одинаковый размер и толщина линий. Нет случайного смешения заливки и контурного рисунка.",
      },
    ],
  },

  "element-states-lesson": {
    lessonId: "element-states-lesson",
    title: "Сетка и отступы",
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
        quizQuestion: "Где карточки выстроены по общей сетке?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="element-states-lesson" index={0} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="element-states-lesson" index={0} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Карточки занимают одинаковые колонки. Их края выровнены, элементы не смещаются случайным образом.",
        incorrectFeedback: "Карточки занимают одинаковые колонки. Их края выровнены, элементы не смещаются случайным образом.",
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
        quizQuestion: "Где расстояния между этапами одинаковые?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="element-states-lesson" index={1} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="element-states-lesson" index={1} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Между этапами плана выдержан один интервал. Случайного дополнительного разрыва перед домашней работой нет.",
        incorrectFeedback: "Между этапами плана выдержан один интервал. Случайного дополнительного разрыва перед домашней работой нет.",
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
        quizQuestion: "Где строки уроков имеют одинаковый ритм?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="element-states-lesson" index={2} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="element-states-lesson" index={2} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Строки одной высоты и повторяющиеся интервалы создают ровный ритм. Размеры не меняются от строки к строке.",
        incorrectFeedback: "Строки одной высоты и повторяющиеся интервалы создают ровный ритм. Размеры не меняются от строки к строке.",
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
        quizQuestion: "Где данные выровнены по левому краю?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="element-states-lesson" index={3} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="element-states-lesson" index={3} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Имя, email и город начинаются на одной линии. Это позволяет читать список без скачков взгляда в стороны.",
        incorrectFeedback: "Имя, email и город начинаются на одной линии. Это позволяет читать список без скачков взгляда в стороны.",
      },
    ],
  },

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
            <p>Вы создаёте кнопку один раз → используете везде.</p>
          </div>
        ),
        quizQuestion: "Где изменение кнопки обновило оба экрана?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="figma-components-lesson" index={0} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="figma-components-lesson" index={0} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Цвет изменили один раз в наборе, и обе связанные кнопки обновились. Отдельные копии остались прежними.",
        incorrectFeedback: "Цвет изменили один раз в наборе, и обе связанные кнопки обновились. Отдельные копии остались прежними.",
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
        quizQuestion: "Где состояния одной кнопки различимы?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="figma-components-lesson" index={1} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="figma-components-lesson" index={1} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Обычная кнопка, наведение и отключённое состояние выглядят по-разному. Название действия и размеры при этом одинаковые.",
        incorrectFeedback: "Обычная кнопка, наведение и отключённое состояние выглядят по-разному. Название действия и размеры при этом одинаковые.",
      },
      {
        title: "Переиспользование",
        content: (
          <div className="font-['Roboto_Condensed:Regular',sans-serif] font-normal leading-[24px] text-[#f1f2fb] opacity-80 w-full flex flex-col gap-[8px]">
            <p>Когда вы используете компонент:</p>
            <ul className="list-disc flex flex-col gap-[4px]">
              <li className="ms-[27px]">изменяете его в одном месте</li>
              <li className="ms-[27px]">→ он обновляется везде</li>
            </ul>
            <p>👉 Это {H("экономит время")} и убирает ошибки.</p>
          </div>
        ),
        quizQuestion: "Где новое скругление применилось ко всем карточкам?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="figma-components-lesson" index={2} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="figma-components-lesson" index={2} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Скругление изменено в общем компоненте и повторяется на обоих экранах. Независимые карточки остались прямоугольными.",
        incorrectFeedback: "Скругление изменено в общем компоненте и повторяется на обоих экранах. Независимые карточки остались прямоугольными.",
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
        quizQuestion: "Где кнопка, поле и карточка находятся в своих группах?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="figma-components-lesson" index={3} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="figma-components-lesson" index={3} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Каждый тип элемента лежит в своей категории. Нужный компонент не приходится искать среди чужих типов.",
        incorrectFeedback: "Каждый тип элемента лежит в своей категории. Нужный компонент не приходится искать среди чужих типов.",
      },
    ],
  },

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
            <p>Для каждой кнопки подготовьте состояния: обычное, при наведении и отключённое. Тип действия и состояние — разные свойства.</p>
            <p>👉 Это {H("база любого интерфейса")}.</p>
          </div>
        ),
        quizQuestion: "Где показаны три разных состояния кнопки?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="creating-ui-kit-lesson" index={0} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="creating-ui-kit-lesson" index={0} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Для одного действия показаны обычное состояние, наведение и отключение. Состояния различимы, размеры и подпись едины.",
        incorrectFeedback: "Для одного действия показаны обычное состояние, наведение и отключение. Состояния различимы, размеры и подпись едины.",
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
        quizQuestion: "Где видны обычное поле, фокус и ошибка?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="creating-ui-kit-lesson" index={1} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="creating-ui-kit-lesson" index={1} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Нейтральная рамка обозначает обычное поле, синяя — фокус, красная — ошибку. Размеры полей не меняются.",
        incorrectFeedback: "Нейтральная рамка обозначает обычное поле, синяя — фокус, красная — ошибку. Размеры полей не меняются.",
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
        quizQuestion: "Где понятно, какие данные вводить в форму?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="creating-ui-kit-lesson" index={2} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="creating-ui-kit-lesson" index={2} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "У имени, email и пароля есть постоянные подписи. Безымянные «Поле 1», «Поле 2», «Поле 3» не объясняют назначение.",
        incorrectFeedback: "У имени, email и пароля есть постоянные подписи. Безымянные «Поле 1», «Поле 2», «Поле 3» не объясняют назначение.",
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
        quizQuestion: "Где карточки обновились после изменения в наборе?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="creating-ui-kit-lesson" index={3} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="creating-ui-kit-lesson" index={3} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Обе карточки повторяют новое скругление общего компонента. Независимые копии не изменились.",
        incorrectFeedback: "Обе карточки повторяют новое скругление общего компонента. Независимые копии не изменились.",
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
        quizQuestion: "Где уведомления имеют единую структуру?",
        quizLabel: "Проверим",
        quizLeftNode: <PortableTheoryExample lessonId="creating-ui-kit-lesson" index={4} correct={false} />,
        quizRightNode: <PortableTheoryExample lessonId="creating-ui-kit-lesson" index={4} correct={true} />,
        quizLeftCorrect: false,
        quizRightCorrect: true,
        correctFeedback: "Успех, ошибка и информация имеют одинаковые поля, скругления и размеры. Цвет сообщает тип сообщения, а не меняет его композицию.",
        incorrectFeedback: "Успех, ошибка и информация имеют одинаковые поля, скругления и размеры. Цвет сообщает тип сообщения, а не меняет его композицию.",
      },
    ],
  },
};