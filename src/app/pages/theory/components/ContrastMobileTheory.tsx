import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import type { TheoryMobileLayoutProps } from "./TheoryMobileLayout";
import { getLessonIcon } from "../../../data/lesson-icons";
import { MobileHeader } from "../../../components/MobileShell";
import BottomTabBar from "../../../components/BottomTabBar";
import { QuizFeedbackIcon } from "../../quiz/QuizFeedbackIcon";
import { QUIZ_CARD_BACKGROUNDS, QUIZ_CARD_BORDERS } from "../../quiz/quizCardStyles";
import { LESSONS } from "../../../data/lessons";
import "./ContrastMobileTheory.css";

export function BalanceExample({ correct }: { correct: boolean }) {
  return <div className="balance-example">
    <h3>Управление задачами</h3>
    {["Создать", "Экспорт", "Настройки"].map((label, index) => <div key={label} className={`balance-example-action ${correct ? index === 0 ? "primary" : "secondary" : `noisy noisy-${index}`}`}>{label}</div>)}
  </div>;
}
type Answer = { selected: "left" | "right" | null; checked: boolean };

function RealExample({ node, compact }: { node: React.ReactNode; compact: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    const element = ref.current!;
    const measure = () => setScale(Math.min(1.8, Math.max(.1, (element.clientWidth - 20) / 186)));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div className="real-example" ref={ref}>
    <div style={{ width: 186 * scale, height: (compact ? 162 : 231) * scale, position: "relative", flexShrink: 0 }}>
      <div className={`real-figure ${compact ? "compact" : ""}`} style={{ width: 186, height: 231, transform: `scale(${scale})`, transformOrigin: "top left", "--preview-radius": `${15 / scale}px` } as React.CSSProperties}>{node}</div>
    </div>
  </div>;
}

export function ContrastMobileTheory(props: TheoryMobileLayoutProps) {
  const lesson = props.lessonData;
  const navigate = useNavigate();
  const scroll = props.mobileScrollRef;
  const [extraOpen, setOpen] = useState<Set<number>>(new Set());
  const open = new Set([...props.openSections, ...extraOpen]);
  const [active, setActive] = useState(() => [...props.openSections][0] ?? 0);
  const [reached, setReached] = useState(0);
  const [pending, setPending] = useState<Record<number, "left" | "right">>({});
  const answers: Answer[] = lesson.sections.map((_, index) => { const state = props.accordionStates[index] ?? {selectedAnswer: null, showFeedback: false}; return ({selected: (pending[index] ?? state.selectedAnswer) as Answer["selected"], checked: state.showFeedback}); });
  useEffect(() => { const index = [...props.openSections].at(-1); if (index !== undefined) setActive(index); }, [props.openSections]);
  const answer = answers[active] ?? answers[0];
  const completed = answers.filter(item => item.checked).length;
  const correctAt = (index: number) => answers[index].selected === "left" ? lesson.sections[index].quizLeftCorrect : lesson.sections[index].quizRightCorrect;
  const xp = props.xp;
  const available = Math.max(reached, ...lesson.sections.map((_, index) => props.isUnlocked(index) ? index : 0));

  function reveal(element: HTMLElement | null, align = false) {
    const container = scroll.current;
    if (!container || !element) return;
    const bounds = container.getBoundingClientRect(), target = element.getBoundingClientRect();
    if (align || target.top < bounds.top + 12 || target.bottom > bounds.bottom - 12) {
      container.scrollTo({ top: Math.max(0, container.scrollTop + target.top - bounds.top - 12), behavior: "smooth" });
    }
  }
  function toggle(index: number) {
    if (index > available) return;
    setActive(index);
    setOpen(prev => { const next = new Set(prev); next.delete(index); return next; });
    props.handleToggle(index);
  }

  function choose(index: number, selected: "left" | "right", element: HTMLElement) {
    if (answers[index].checked) return;
    setActive(index);
    setPending(prev => ({...prev, [index]: selected}));
    requestAnimationFrame(() => reveal(element));
  }
  function proceed() {
    if (!answer.selected) return;
    if (!answer.checked) {
      setReached(prev => Math.max(prev, Math.min(active + 1, lesson.sections.length - 1)));
      setOpen(prev => new Set([...prev, Math.min(active + 1, lesson.sections.length - 1)]));
      props.handleAnswerSelect(active, answer.selected, !!correctAt(active));
      requestAnimationFrame(() => reveal(scroll.current?.querySelector(`[data-feedback="${active}"]`) ?? null));
    } else if (active < lesson.sections.length - 1) {
      const next = active + 1;
      props.handleContinue(active);
      setReached(prev => Math.max(prev, next));
      setActive(next);
      setOpen(prev => new Set([...prev, next]));
      requestAnimationFrame(() => reveal(scroll.current?.querySelector(`[data-section="${next}"]`) ?? null, true));
    } else {
      props.handleContinue(active);
    }
  }
  return <main className="real-theory-screen">
    <MobileHeader title="Теория" showBack onBack={() => navigate("/lessons")} xp={xp} streak={props.streak} />
    <div className="real-scroll" ref={scroll}>
      <div className="real-hero"><img src={getLessonIcon(lesson.lessonId)} alt="" /></div>
      <div className="real-title"><h1>{lesson.title}</h1><div><span>⌛ {lesson.duration}</span><span className="real-counter">Микроквизы {completed}/{lesson.sections.length}</span></div></div>
      <button className="contrast-quiz-link" onClick={() => { const quizId = LESSONS.find(item => item.lessonId === lesson.lessonId)?.quizId || lesson.lessonId; navigate(`/lesson-quiz?quizId=${quizId}&lessonId=${lesson.lessonId}`); }}>Перейти к квизу</button>
      <div className="real-sections">
        {lesson.sections.slice(0, available + 1).map((section, index) => {
          const current = answers[index], unlocked = index <= available;
          return <section key={index} data-section={index} className="real-section">
            <button className="real-section-header" aria-expanded={open.has(index)} disabled={!unlocked} onClick={() => toggle(index)}>
              <span className={`section-dot ${current.checked ? (correctAt(index) ? "done" : "wrong") : ""}`}>{current.checked ? (correctAt(index) ? "✓" : "!") : ""}</span>
              <span>{section.title}</span><span className="section-chevron">{open.has(index) ? "⌃" : "⌄"}</span>
            </button>
            {open.has(index) && <div className="real-section-body">
              <div className="real-content">{section.content}</div>
              <div className="real-divider"><span>Закрепим</span></div>
              <h2 className="real-question">{section.quizQuestion}</h2>
              <p className="real-hint">Выберите один вариант: нажмите на карточку.</p>
              <div className="real-choices" role="group" aria-label="Варианты ответа">
                {(["left", "right"] as const).map((side, optionIndex) => {
                  const selected = current.selected === side;
                  const correct = side === "left" ? section.quizLeftCorrect : section.quizRightCorrect;
                  const state = current.checked && selected ? (correct ? "correct" : "incorrect") : selected ? "selected" : "idle";
                  const letter = optionIndex ? "Б" : "А";
                  return <button key={side} className="real-choice" aria-label={`Выбрать вариант ${letter}`} aria-pressed={selected} disabled={current.checked} onClick={event => choose(index, side, event.currentTarget)} style={{ background: state === "idle" || state === "selected" ? "#282f33" : QUIZ_CARD_BACKGROUNDS[state], borderColor: QUIZ_CARD_BORDERS[state] ?? "transparent" }}>
                    <span className="real-choice-label"><span className="real-radio" />Вариант {letter}</span>
                    <RealExample compact={index < 2 || (section.title === "Правило баланса" || section.title === "Контраст цвета")} node={(section.title === "Правило баланса" || section.title === "Контраст цвета") ? <BalanceExample correct={correct} /> : side === "left" ? section.quizLeftNode : section.quizRightNode} />
                  </button>;
                })}
              </div>
              {current.checked && <div data-feedback={index} className={`real-feedback ${correctAt(index) ? "good" : "bad"}`} role="status"><strong><QuizFeedbackIcon correct={correctAt(index)} />{correctAt(index) ? "Верно!" : "Не совсем верно"}</strong><p>{correctAt(index) ? section.correctFeedback : section.incorrectFeedback}</p></div>}
            </div>}
          </section>;
        })}
      </div>
    </div>
    <div className="real-action"><button disabled={!answer.selected} onClick={proceed}>{!answer.checked ? "Проверить ответ" : active === lesson.sections.length - 1 ? "Начать квиз" : "Продолжить"}</button></div>
    <div className="real-navigation"><BottomTabBar /></div>
  </main>;
}
