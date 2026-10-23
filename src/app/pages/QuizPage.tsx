import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useUser } from '../context/UserContext';
import PageTransition from '../components/PageTransition';
import { CloseButton } from './quiz/CloseButton';
import { CardAMockup, CardBMockup } from './quiz/QuizCardMockups';
import { CompareUIQuiz } from './quiz/CompareUIQuiz';
import XpCounter from '../components/XpCounter';

const LESSON_ID = 'onboarding-quiz';
const QUESTION_ID = 'quiz-contrast-screens';
const OPTIONS = [
  { label: 'А', description: 'Основная кнопка выделяется на фоне остальных элементов', content: <CardAMockup /> },
  { label: 'Б', description: 'Основная кнопка сливается с остальными элементами', content: <CardBMockup /> },
];

/** The introductory question uses the same card, feedback and button layout as lesson quizzes. */
export default function QuizPage() {
  const navigate = useNavigate();
  const { getLessonProgress, updateQuestionState } = useUser();
  const [earnedXP, setEarnedXP] = useState(0);
  const alreadyAwarded = !!getLessonProgress(LESSON_ID).questions[QUESTION_ID]?.xpAwarded;

  return <PageTransition>
    <div className="relative min-h-screen w-full flex justify-center items-center pt-[76px] pb-[24px]" style={{ background: '#282F33', minHeight: '100dvh' }}>
      <div className="fixed top-[20px] left-[20px] z-10"><CloseButton onClick={() => navigate('/welcome')} /></div>
      <div className="fixed top-[20px] right-[20px] z-10"><XpCounter /></div>
      <CompareUIQuiz
        question="На каком экране легче заметить основную кнопку?"
        compareOptions={OPTIONS}
        correctAnswer="А"
        explanation="Основная кнопка выделяется контрастом — интерфейс читается быстрее."
        onAnswer={correct => {
          setEarnedXP(correct && !alreadyAwarded ? 25 : 0);
          updateQuestionState(LESSON_ID, QUESTION_ID, correct, 25);
        }}
        onContinue={() => navigate('/lessons')}
        continueLabel="Перейти к урокам"
        earnedXP={earnedXP}
        isReplay={alreadyAwarded}
        mobileNaturalW={404}
        mobileNaturalH={367}
      />
    </div>
  </PageTransition>;
}
