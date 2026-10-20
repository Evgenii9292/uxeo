/** Shared answer states for text answers, previews, and theory microquizzes. */
export type QuizCardState = "idle" | "selected" | "correct" | "incorrect" | "dimmed";

export const QUIZ_CARD_BACKGROUNDS: Record<QuizCardState, string> = {
  idle: "linear-gradient(172deg, rgb(44,53,56) 2%, rgb(56,67,72) 99%)",
  selected: "linear-gradient(172deg, rgb(55,66,70) 2%, rgb(56,67,72) 99%)",
  correct: "linear-gradient(172deg, rgba(58,81,67,0.5) 2%, rgba(56,72,62,0.5) 99%)",
  incorrect: "linear-gradient(172deg, rgba(92,53,53,0.5) 2%, rgba(72,58,56,0.5) 99%)",
  dimmed: "linear-gradient(172deg, rgba(44,53,56,0.5) 2%, rgba(56,67,72,0.5) 99%)",
};

export const QUIZ_CARD_BORDERS: Record<QuizCardState, string | undefined> = {
  idle: undefined,
  selected: "#798589",
  correct: "#00932f",
  incorrect: "#9f3500",
  dimmed: undefined,
};
