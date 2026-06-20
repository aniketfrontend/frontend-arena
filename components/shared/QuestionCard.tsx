"use client";

import { Button } from "@/components/ui/button";
import { Question } from "@/types/question";
import { useBattleStore } from "@/store/battle-store";

interface QuestionCardProps {
  question: Question;
  onAnswerCorrect: () => void;
}

export default function QuestionCard({
  question,
  onAnswerCorrect,
}: QuestionCardProps) {
  const selectedAnswer = useBattleStore((state) => state.selectedAnswer);

  const selectAnswer = useBattleStore((state) => state.selectAnswer);

  const handleAnswerClick = (option: string) => {
    // Prevent multiple selections
    if (selectedAnswer) return;

    // Save selected answer
    selectAnswer(option);

    // Increase score if answer is correct
    if (option === question.correctAnswer) {
      onAnswerCorrect();
    }
  };

  return (
    <div
      className="
        rounded-3xl
        border border-white/10
        bg-slate-900/70
        border-slate-700
        p-8
        backdrop-blur-xl
      "
    >
      <h2
        className="mb-10 text-2xl font-bold text-white text-3xl
          font-bold
          leading-relaxed"
      >
        {question.question}
      </h2>

      <div className="flex flex-col gap-4">
        {question.options.map((option) => (
          <Button
            key={option}
            variant="outline"
            disabled={!!selectedAnswer}
            onClick={() => handleAnswerClick(option)}
            className={`
              w-full
              max-w-md
              justify-start
              rounded-2xl
              py-6
              text-white
              cursor-pointer
              transition-all

              ${
                selectedAnswer
                  ? option === question.correctAnswer
                    ? "bg-emerald-500/20 border-emerald-400"
                    : option === selectedAnswer
                    ? "border-red-400 bg-red-500/20"
                    : "border-white/10 bg-slate-900/70 border-slate-700"
                  : "border-white/10 bg-slate-900/70 border-slate-700"
              }
              `}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}
