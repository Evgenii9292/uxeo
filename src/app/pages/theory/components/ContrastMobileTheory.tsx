import { RaisedButton } from "../../../components/RaisedButton";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import type { TheoryMobileLayoutProps } from "./TheoryMobileLayout";
import { getLessonIcon } from "../../../data/lesson-icons";
import { MobileHeader } from "../../../components/MobileShell";
import BottomTabBar from "../../../components/BottomTabBar";
import { QuizFeedbackIcon } from "../../quiz/QuizFeedbackIcon";
import { QUIZ_CARD_BACKGROUNDS, QUIZ_CARD_BORDERS } from "../../quiz/quizCardStyles";
import { LESSONS } from "../../../data/lessons";
import { ChevronIcon, TimeIcon } from "../ui/Icons";
import { getTheoryReviewTarget } from "../../../utils/theoryReviewLink";
export { BalanceExample } from "./ContrastTheoryExample";
import "./ContrastMobileTheory.css";

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
  const location = useLocation();
  const reviewTarget = getTheoryReviewTarget(location.search, lesson.sections.length);
  const reviewedLink = useRef<string | null>(null);
  useEffect(() => {
    if (!reviewTarget || !props.openSections.has(reviewTarget.index)) return;
    const linkKey = `${lesson.lessonId}:${location.key}:${location.search}`;
    if (reviewedLink.current === linkKey) return;
    const timer = window.setTimeout(() => {
      const container = scroll.current;
      const section = container?.querySelector<HTMLElement>(`[data-section="${reviewTarget.index}"]`);
      const target = reviewTarget.focus === "theory" ? section?.querySelector<HTMLElement>(".real-section-body") : section?.querySelector<HTMLElement>("[data-theory-question]");
      if (!container || !target) return;
      reviewedLink.current = linkKey;
      container.scrollTo({ top: Math.max(0, container.scrollTop + target.getBoundingClientRect().top - container.getBoundingClientRect().top - 12) });
    }, 350);
    return () => window.clearTimeout(timer);
  }, [location.key, location.search, lesson.lessonId, props.openSections]);
  const feedbackScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (feedbackScrollTimer.current !== null) clearTimeout(feedbackScrollTimer.current);
  }, []);
  const [openOverrides, setOpenOverrides] = useState<Record<number, boolean>>({});
  const open = new Set(lesson.sections.flatMap((_, index) => (openOverrides[index] ?? props.openSections.has(index)) ? [index] : []));
  const [active, setActive] = useState(() => [...props.openSections][0] ?? 0);
  const [reached, setReached] = useState(0);
  const [pending, setPending] = useState<Record<number, "left" | "right">>({});
  useEffect(() => {
    if (!reviewTarget) return;
    setOpenOverrides({});
    setActive(reviewTarget.index);
  }, [location.key, location.search, lesson.lessonId]);
  const answers: Answer[] = lesson.sections.map((_, index) => { const state = props.accordionStates[index] ?? {selectedAnswer: null, showFeedback: false}; return ({selected: (pending[index] ?? state.selectedAnswer) as Answer["selected"], checked: state.showFeedback}); });
  useEffect(() => { const index = [...props.openSections].at(-1); if (index !== undefined) setActive(index); }, [props.openSections]);
  const answer = answers[active] ?? answers[0];
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
  function cancelFeedbackScroll() {
    if (feedbackScrollTimer.current !== null) clearTimeout(feedbackScrollTimer.current);
    feedbackScrollTimer.current = null;
  }
  function revealAnswer(index: number) {
    cancelFeedbackScroll();
    // Let the next accordion finish opening before measuring the answer group.
    feedbackScrollTimer.current = setTimeout(() => {
      feedbackScrollTimer.current = null;
      const container = scroll.current;
      const feedback = container?.querySelector<HTMLElement>(`[data-feedback="${index}"]`);
      if (!container || !feedback) return;
      const bounds = container.getBoundingClientRect();
      const controls = container.parentElement?.querySelector<HTMLElement>(".real-action");
      const visibleBottom = Math.min(bounds.bottom, controls?.getBoundingClientRect().top ?? bounds.bottom);
      const visibleHeight = visibleBottom - bounds.top;
      if (visibleHeight <= 0) return;
      const feedbackBounds = feedback.getBoundingClientRect();
      const answerTop = container.scrollTop + feedbackBounds.top - bounds.top;
      const target = Math.max(0, answerTop + feedbackBounds.height / 2 - visibleHeight / 2);
      container.scrollTo({ top: target, behavior: "smooth" });
    }, 320);
  }
  function toggle(index: number) {
    cancelFeedbackScroll();
    if (index > available) return;
    setActive(index);
    setOpenOverrides(prev => ({ ...prev, [index]: !open.has(index) }));
    if (!open.has(index) && !props.openSections.has(index)) props.handleToggle(index);
  }

  function choose(index: number, selected: "left" | "right", element: HTMLElement) {
    if (answers[index].checked) return;
    cancelFeedbackScroll();
    setActive(index);
    setPending(prev => ({...prev, [index]: selected}));
    requestAnimationFrame(() => reveal(element));
  }
  function proceed() {
    if (!answer.selected) return;
    if (!answer.checked) {
      setReached(prev => Math.max(prev, Math.min(active + 1, lesson.sections.length - 1)));
      setOpenOverrides(prev => ({ ...prev, [Math.min(active + 1, lesson.sections.length - 1)]: true }));
      props.handleAnswerSelect(active, answer.selected, !!correctAt(active));
      revealAnswer(active);
      if (active < lesson.sections.length - 1) setActive(active + 1);
    } else {
      props.handleContinue(active);
    }
  }
  return <main className="real-theory-screen">
    <MobileHeader title="Теория" showBack onBack={() => navigate("/lessons")} xp={xp} streak={props.streak} />
    <div className="real-scroll" ref={scroll} onScroll={event => props.setMobileScrollY(event.currentTarget.scrollTop)}>
        {/* Hero icon — no bg, centered */}
        <div className="flex items-center justify-center" style={{ height: '200px' }}>
          <div className="relative flex items-center justify-center" style={{ width: 128, height: 128 }}>
            <img
              src={getLessonIcon(lesson.lessonId)}
              alt=""
              style={{ width: 104, height: 104, objectFit: "contain", filter: "brightness(0) invert(1)", maskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.3) 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.3) 100%)", transform: `translateY(${props.mobileScrollY * 0.25}px)`, opacity: Math.max(0.5, 1 - props.mobileScrollY / 180), willChange: "transform, opacity", position: "relative", zIndex: 1 }}
            />
          </div>
        </div>

        {/* Title + meta */}
        <div className="px-[16px] pb-[16px]">
          <div className="flex items-end justify-between gap-[10px]">
            <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[27.5px] text-[#f4f5fc] text-[28px]">
              {lesson.title}
            </p>
            <div className="flex flex-col items-end gap-[10px] shrink-0 pb-[4px]">
              <div className="flex gap-[5px] items-center">
                <TimeIcon />
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-[20px] text-[#f1f7fb] text-[16px]">{lesson.duration}</p>
              </div>
              <div
                className="flex items-center gap-[6px] h-[24px] px-[9px] rounded-full"
                style={{ background: "#404D52" }}
              >
                <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-none text-[#798589] text-[11px] whitespace-nowrap">
                  Микроквизы
                </p>
                {props.completedSectionsCount === props.totalSections ? (
                  <div className="flex items-center justify-center w-[16px] h-[16px] rounded-full bg-[#00d043]">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : (
                  <p className="font-['Roboto_Condensed:Medium',sans-serif] font-medium leading-none text-[#F1F2FB] text-[11px] whitespace-nowrap">
                    {props.completedSectionsCount}/{props.totalSections}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      <div className="real-sections">
        {lesson.sections.slice(0, available + 1).map((section, index) => {
          const current = answers[index], unlocked = index <= available;
          return <section key={index} data-section={index} className="real-section">
            <button className="real-section-header" aria-expanded={open.has(index)} disabled={!unlocked} onClick={() => toggle(index)}>
              <span className={`section-dot ${current.checked ? (correctAt(index) ? "done" : "wrong") : ""}`}>{current.checked ? (correctAt(index) ? "✓" : "!") : ""}</span>
              <span>{section.title}</span><span className="section-chevron"><ChevronIcon isOpen={open.has(index)} isLocked={!unlocked} /></span>
            </button>
            <div className="real-accordion" aria-hidden={!open.has(index)} style={{ gridTemplateRows: open.has(index) ? "1fr" : "0fr" }}><div className="real-accordion-inner"><div className="real-section-body">
              <div className="real-content">{section.content}</div>
              <div className="real-divider"><span>Закрепим</span></div>
              <h2 data-theory-question className="real-question">{section.quizQuestion}</h2>
              <p className="real-hint">Выберите один вариант: нажмите на карточку.</p>
              <div className="real-choices" role="group" aria-label="Варианты ответа">
                {(["left", "right"] as const).map((side, optionIndex) => {
                  const selected = current.selected === side;
                  const correct = side === "left" ? section.quizLeftCorrect : section.quizRightCorrect;
                  const state = current.checked && selected ? (correct ? "correct" : "incorrect") : selected ? "selected" : "idle";
                  const letter = optionIndex ? "Б" : "А";
                  return <button key={side} className="real-choice" aria-label={`Выбрать вариант ${letter}`} aria-pressed={selected} disabled={current.checked || !open.has(index)} onClick={event => choose(index, side, event.currentTarget)} style={{ background: state === "idle" || state === "selected" ? "#282f33" : QUIZ_CARD_BACKGROUNDS[state], borderColor: QUIZ_CARD_BORDERS[state] ?? "transparent" }}>
                    <span className="real-choice-label"><span className="real-radio" />Вариант {letter}</span>
                    <RealExample compact={true} node={side === "left" ? section.quizLeftNode : section.quizRightNode} />
                  </button>;
                })}
              </div>
              {current.checked && <div data-feedback={index} className={`real-feedback ${correctAt(index) ? "good" : "bad"}`} role="status"><strong><QuizFeedbackIcon correct={correctAt(index)} />{correctAt(index) ? "Верно!" : "Не совсем верно"}</strong><p>{correctAt(index) ? section.correctFeedback : section.incorrectFeedback}</p></div>}
            </div></div></div>
          </section>;
        })}
      </div>
    </div>
    <div className="real-action"><RaisedButton disabled={!answer.selected || (answer.checked && active < lesson.sections.length - 1)} onClick={proceed}>{answer.checked && active === lesson.sections.length - 1 ? "Начать квиз" : "Проверить ответ"}</RaisedButton>{active < lesson.sections.length - 1 && <RaisedButton tone="gray" className="real-start-quiz" aria-label="Начать квиз без теории" title="Начать квиз" onClick={() => { const quizId = LESSONS.find(item => item.lessonId === lesson.lessonId)?.quizId || lesson.lessonId; navigate(`/lesson-quiz?quizId=${encodeURIComponent(quizId)}&lessonId=${encodeURIComponent(lesson.lessonId)}`); }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 5 10 7-10 7V5Z" fill="currentColor" /></svg></RaisedButton>}</div>
    <div className="real-navigation"><BottomTabBar /></div>
  </main>;
}
