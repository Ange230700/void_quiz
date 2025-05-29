// src/data/types.ts
export interface Topic {
  /** Display name */
  name: string;
  /** Machine-friendly theme key */
  themeData: string;
}

export interface QuizQuestion {
  /** Question text */
  question: string;
  /** Choice options */
  choices: string[];
  /** Correct answer */
  answer: string;
  /** Optional image URL */
  image?: string;
}

export interface FeedbackMessages {
  perfect: string;
  high: string;
  medium: string;
  low: string;
  fail: string;
}
