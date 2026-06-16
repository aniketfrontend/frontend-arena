import { create } from "zustand";

interface BattleStore {
  currentQuestionIndex: number;
  selectedAnswer: string | null;

  score: number;
  xp: number;

  selectAnswer: (answer: string) => void;

  incrementScore: () => void;

  nextQuestion: () => void;

  resetBattle: () => void;
}

export const useBattleStore = create<BattleStore>((set) => ({
  currentQuestionIndex: 0,

  selectedAnswer: null,

  score: 0,

  xp: 0,

  selectAnswer: (answer) =>
    set({
      selectedAnswer: answer,
    }),

  incrementScore: () =>
    set((state) => ({
      score: state.score + 1,
      xp: state.xp + 10,
    })),

  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,

      selectedAnswer: null,
    })),

  resetBattle: () =>
    set({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      score: 0,
      xp: 0,
    }),
}));
