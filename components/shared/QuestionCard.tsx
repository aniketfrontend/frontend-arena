"use client";

import { Button } from "@/components/ui/button";
import { Question } from "@/types/question";

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
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
      <h2 className="mb-8 text-2xl font-bold text-white">
        {question.question}
      </h2>

      <div className="grid gap-4">
        {question.options.map((option) => (
          <Button key={option} variant="outline" className="justify-start">
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}
