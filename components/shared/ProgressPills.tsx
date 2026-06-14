"use client";

interface ProgressPillsProps {
  totalQuestions: number;
  currentQuestionIndex: number;
}

export default function ProgressPills({
  totalQuestions,
  currentQuestionIndex,
}: ProgressPillsProps) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3">
      {Array.from({ length: totalQuestions }).map((_, index) => {
        let content = "○";
        let styles = "border-white/20 bg-white/5 text-slate-400";

        if (index < currentQuestionIndex) {
          content = "✓";

          styles = "border-green-400/40 bg-green-500/20 text-green-300";
        } else if (index === currentQuestionIndex) {
          content = "●";

          styles = "border-cyan-400/40 bg-cyan-500/20 text-cyan-300";
        }

        return (
          <div
            key={index}
            className={`
              flex h-10 w-10 items-center justify-center
              rounded-full border
              text-sm font-semibold
              backdrop-blur-xl
              transition-all duration-300
              ${styles}
            `}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
