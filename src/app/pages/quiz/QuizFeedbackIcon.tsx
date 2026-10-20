import { PartyPopperIcon } from "./QuizIcons";
import { FistIcon } from "../theory/ui/Icons";

/** The same result icon in every quiz and screen size. */
export function QuizFeedbackIcon({ correct }: { correct: boolean }) {
  return (
    <span aria-hidden="true" className="inline-flex shrink-0 items-center justify-center w-[27px] h-[27px]">
      {correct ? <PartyPopperIcon /> : <FistIcon />}
    </span>
  );
}
