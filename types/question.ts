export interface Question {
  id: number;
  topicId: string;
  question: string;
  options: string[];
  correctAnswer: string;
}
