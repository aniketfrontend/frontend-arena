"use client";

import { useEffect, useRef, useState } from "react";
import QuestionCard from "./QuestionCard";
import ProgressPills from "./ProgressPills";
import { Question } from "@/types/question";
import { useBattleStore } from "@/store/battle-store";
import { Button } from "@/components/ui/button";

interface BattleClientProps {
  topicId: string;
}

export default function BattleClient({ topicId }: BattleClientProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;

    hasFetched.current = true;

    async function fetchQuestions() {
      try {
        setIsLoading(true);

        const response = await fetch(`/api/questions?topic=${topicId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }

        const data = await response.json();

        setQuestions(data);
        resetBattle();
      } catch {
        setError("Failed to summon questions ⚔️");
      } finally {
        setIsLoading(false);
      }
    }

    fetchQuestions();
  }, [topicId]);

  const incrementScore = useBattleStore((state) => state.incrementScore);

  const score = useBattleStore((state) => state.score);

  const xp = useBattleStore((state) => state.xp);

  const resetBattle = useBattleStore((state) => state.resetBattle);

  const currentQuestionIndex = useBattleStore(
    (state) => state.currentQuestionIndex
  );

  const nextQuestion = useBattleStore((state) => state.nextQuestion);

  const selectedAnswer = useBattleStore((state) => state.selectedAnswer);

  const currentQuestion =
    currentQuestionIndex < questions.length
      ? questions[currentQuestionIndex]
      : null;

  if (isLoading) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-4xl font-bold text-white">
          ✨ Summoning {topicId.toUpperCase()} Questions
        </h2>

        <p className="mt-4 text-slate-400">
          The AI sages are preparing your battle...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-4xl text-red-400">Failed to summon questions ⚔️</h2>

        <p>{error}</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="text-white">No questions available.</div>;
  }

  if (!currentQuestion && questions.length > 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold text-white">🏆 Victory!</h1>

        <p className="mt-6 text-slate-300">
          Score: {score} / {questions.length}
        </p>

        <p className="mt-3 text-cyan-300">+{xp} XP</p>

        <Button
          className="mt-8 cursor-pointer"
          onClick={() => {
            resetBattle();
          }}
        >
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
