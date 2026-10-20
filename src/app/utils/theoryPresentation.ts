import { shuffled } from "./quizSession";
import type { AccordionSection } from "../data/lesson-content";

// Stable positions keep restored answers attached to the same visual example.
export function presentTheorySections<T extends Pick<AccordionSection, "quizLeftNode" | "quizRightNode" | "quizLeftCorrect" | "quizRightCorrect">>(sections: T[], lessonId: string): T[] {
  const seed = [...lessonId].reduce((hash, char) => Math.imul(hash, 31) + char.charCodeAt(0) | 0, 17);
  const swaps = shuffled(sections.map((_, index) => index % 2 === 0), seed);
  return sections.map((section, index) => swaps[index] ? {
    ...section,
    quizLeftNode: section.quizRightNode,
    quizRightNode: section.quizLeftNode,
    quizLeftCorrect: section.quizRightCorrect,
    quizRightCorrect: section.quizLeftCorrect,
  } : section);
}
