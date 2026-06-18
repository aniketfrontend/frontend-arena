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
  const incrementScore = useBattleStore((state) => state.incrementScore);

  const score = useBattleStore((state) => state.score);

  const xp = useBattleStore((state) => state.xp);

  const resetBattle = useBattleStore((state) => state.resetBattle);

  const currentQuestionIndex = useBattleStore(
    (state) => state.currentQuestionIndex
  );

  const nextQuestion = useBattleStore((state) => state.nextQuestion);

  const selectedAnswer = useBattleStore((state) => state.selectedAnswer);

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold text-white">🏆 Victory!</h1>

        <p className="mt-6 text-slate-300">
          Score: {score} / {questions.length}
        </p>

        <p className="mt-3 text-cyan-300">+{xp} XP</p>

        <Button className="mt-8 cursor-pointer" onClick={resetBattle}>
          Play Again
        </Button>
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
      <QuestionCard
        question={currentQuestion}
        onAnswerCorrect={incrementScore}
      />

      {selectedAnswer && (
        <div className="mt-8 flex justify-center">
          <Button className="cursor-pointer" onClick={nextQuestion}>
            Next Question
          </Button>
        </div>
      )}
    </>
  );
}
