"use client";

import { Button } from "@/components/ui/button";
import { Question } from "@/types/question";
import { useBattleStore } from "@/store/battle-store";

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const selectedAnswer = useBattleStore((state) => state.selectedAnswer);

  const selectAnswer = useBattleStore((state) => state.selectAnswer);

  return (
    <div
      className="
        rounded-3xl
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
      "
    >
      <h2 className="mb-10 text-2xl font-bold text-white">
        {question.question}
      </h2>

      <div className="flex flex-col gap-4">
        {question.options.map((option) => (
          <Button
            key={option}
            variant="outline"
            onClick={() => selectAnswer(option)}
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
                selectedAnswer === option
                  ? "border-cyan-400 bg-cyan-500/20"
                  : "border-white/10 bg-white/5"
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
