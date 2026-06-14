import { create } from "zustand";

interface BattleStore {
  currentQuestionIndex: number;
  selectedAnswer: string | null;

  selectAnswer: (answer: string) => void;
  nextQuestion: () => void;
}

export const useBattleStore = create<BattleStore>((set) => ({
  currentQuestionIndex: 0,

  selectedAnswer: null,

  selectAnswer: (answer) =>
    set({
      selectedAnswer: answer,
    }),

  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,

      selectedAnswer: null,
    })),
}));
