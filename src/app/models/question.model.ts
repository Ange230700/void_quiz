// src\app\models\question.model.ts
export interface QuizQuestion {
  question: string;
  choices: string[];
  answer: string;
  image?: string;
}
