import { Question } from "@/types/question";

export const questions: Question[] = [
  {
    id: 1,
    topicId: "react",
    question: "Which hook prevents unnecessary recalculations?",

    options: ["useState", "useEffect", "useMemo", "useRef"],

    correctAnswer: "useMemo",
  },

  {
    id: 2,
    topicId: "react",
    question: "Which hook manages local component state?",

    options: ["useEffect", "useState", "useMemo", "useContext"],

    correctAnswer: "useState",
  },
];
