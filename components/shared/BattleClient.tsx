"use client";

import QuestionCard from "./QuestionCard";
import ProgressPills from "./ProgressPills";
import { Question } from "@/types/question";
import { useBattleStore } from "@/store/battle-store";
import { Button } from "@/components/ui/button";

interface BattleClientProps {
  questions: Question[];
}

export default function BattleClient({ questions }: BattleClientProps) {
  const currentQuestionIndex = useBattleStore(
    (state) => state.currentQuestionIndex
  );

  const nextQuestion = useBattleStore((state) => state.nextQuestion);

  const selectedAnswer = useBattleStore((state) => state.selectedAnswer);

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Battle Complete ⚔️</h2>

        <p className="mt-4 text-slate-400">Results screen coming soon...</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex">
        <ProgressPills
          totalQuestions={questions.length}
          currentQuestionIndex={currentQuestionIndex}
        />
      </div>
      <QuestionCard question={currentQuestion} />

      {selectedAnswer && (
        <div className="mt-8 flex justify-center">
          <Button onClick={nextQuestion}>Next Question</Button>
        </div>
      )}
    </>
  );
}
