import React, { useLayoutEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router";
import { LESSON_CONTENT } from "../../src/app/data/lesson-content";
import { presentTheorySections } from "../../src/app/utils/theoryPresentation";
import { getLessonIcon } from "../../src/app/data/lesson-icons";
import { MobileHeader } from "../../src/app/components/MobileShell";
import BottomTabBar from "../../src/app/components/BottomTabBar";
import { QuizFeedbackIcon } from "../../src/app/pages/quiz/QuizFeedbackIcon";
import { QUIZ_CARD_BACKGROUNDS, QUIZ_CARD_BORDERS } from "../../src/app/pages/quiz/quizCardStyles";
import "../../src/styles/index.css";
import "./style.css";

const original = LESSON_CONTENT["contrast-lesson"];
const lesson = { ...original, sections: presentTheorySections(original.sections, original.lessonId) };
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

function TheoryPreview() {
  const scroll = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(() => new Set([0]));
  const [active, setActive] = useState(0);
  const [reached, setReached] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(() => lesson.sections.map(() => ({ selected: null, checked: false })));
  const answer = answers[active];
  const completed = answers.filter(item => item.checked).length;
  const correctAt = (index: number) => answers[index].selected === "left" ? lesson.sections[index].quizLeftCorrect : lesson.sections[index].quizRightCorrect;
  const xp = answers.reduce((sum, item, index) => sum + (item.checked && correctAt(index) ? 15 : 0), 0);

  function reveal(element: HTMLElement | null, align = false) {
    const container = scroll.current;
    if (!container || !element) return;
    const bounds = container.getBoundingClientRect(), target = element.getBoundingClientRect();
    if (align || target.top < bounds.top + 12 || target.bottom > bounds.bottom - 12) {
      container.scrollTo({ top: Math.max(0, container.scrollTop + target.top - bounds.top - 12), behavior: "smooth" });
    }
  }
  function toggle(index: number) {
    if (index > reached) return;
    setActive(index);
    setOpen(prev => { const next = new Set(prev); next.has(index) ? next.delete(index) : next.add(index); return next; });
  }
  function choose(index: number, selected: "left" | "right", element: HTMLElement) {
    if (answers[index].checked) return;
    setActive(index);
    setAnswers(prev => prev.map((value, i) => i === index ? { selected, checked: false } : value));
    requestAnimationFrame(() => reveal(element));
  }
  function proceed() {
    if (!answer.selected) return;
    if (!answer.checked) {
      setReached(prev => Math.max(prev, Math.min(active + 1, lesson.sections.length - 1)));
      setOpen(prev => new Set([...prev, Math.min(active + 1, lesson.sections.length - 1)]));
      setAnswers(prev => prev.map((value, i) => i === active ? { ...value, checked: true } : value));
      requestAnimationFrame(() => reveal(scroll.current?.querySelector(`[data-feedback="${active}"]`) ?? null));
    } else if (active < lesson.sections.length - 1) {
      const next = active + 1;
      setReached(prev => Math.max(prev, next));
      setActive(next);
      setOpen(prev => new Set([...prev, next]));
      requestAnimationFrame(() => reveal(scroll.current?.querySelector(`[data-section="${next}"]`) ?? null, true));
    } else {
      setActive(0); setReached(0); setOpen(new Set([0]));
      setAnswers(lesson.sections.map(() => ({ selected: null, checked: false })));
      scroll.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  return <main className="real-theory-screen">
    <MobileHeader title="Теория" showBack onBack={() => scroll.current?.scrollTo({ top: 0, behavior: "smooth" })} xp={xp} streak={0} />
    <div className="real-scroll" ref={scroll}>
      <div className="real-hero"><img src={getLessonIcon(lesson.lessonId)} alt="" /></div>
      <div className="real-title"><h1>{lesson.title}</h1><div><span>⌛ {lesson.duration}</span><span className="real-counter">Микроквизы {completed}/{lesson.sections.length}</span></div></div>
      <div className="real-sections">
        {lesson.sections.slice(0, reached + 1).map((section, index) => {
          const current = answers[index], unlocked = index <= reached;
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
                  return <button key={side} className="real-choice" aria-label={`Выбрать вариант ${letter}`} aria-pressed={selected} disabled={current.checked} onClick={event => choose(index, side, event.currentTarget)} style={{ background: state === "idle" || state === "selected" ? "#22282b" : QUIZ_CARD_BACKGROUNDS[state], borderColor: state === "selected" ? "#bbc6cb" : QUIZ_CARD_BORDERS[state] ?? "#475257" }}>
                    <span className="real-choice-label"><span className="real-radio" />Вариант {letter}</span>
                    <RealExample compact={index < 4} node={side === "left" ? section.quizLeftNode : section.quizRightNode} />
                  </button>;
                })}
              </div>
              {current.checked && <div data-feedback={index} className={`real-feedback ${correctAt(index) ? "good" : "bad"}`} role="status"><strong><QuizFeedbackIcon correct={correctAt(index)} />{correctAt(index) ? "Верно!" : "Не совсем верно"}</strong><p>{correctAt(index) ? section.correctFeedback : section.incorrectFeedback}</p></div>}
            </div>}
          </section>;
        })}
      </div>
    </div>
    <div className="real-action"><button disabled={!answer.selected} onClick={proceed}>{!answer.checked ? "Проверить ответ" : active === lesson.sections.length - 1 ? "Посмотреть сначала" : "Продолжить"}</button></div>
    <div className="real-navigation" inert=""><BottomTabBar /></div>
  </main>;
}
createRoot(document.getElementById("root")!).render(<MemoryRouter initialEntries={["/contrast"]}><TheoryPreview /></MemoryRouter>);
