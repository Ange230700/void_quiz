// src\app\services\quiz.service.ts
import { Injectable } from '@angular/core';
import * as popData from '../../data/popCultureQuiz';
import { QuizQuestion } from '../models/question.model';
import { FeedbackMessages } from '../models/feedback.model';
import { feedbackMessagesByTopic } from '../../data/feedbackMessagesByTopic';
import { topicsList } from '../../data/topicsList';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly topics = topicsList;
  private readonly questionsMap: Record<string, QuizQuestion[]> = {
    'films-et-series': popData.popCultureQuiz,
    // ... import and map other quizzes: musicQuiz, harryPotterQuiz, etc.
  };
  private readonly feedbackMap = feedbackMessagesByTopic;

  getTopics() {
    return this.topics;
  }

  getQuestions(theme: string): QuizQuestion[] {
    return this.questionsMap[theme] || [];
  }

  getFeedback(theme: string): FeedbackMessages {
    return this.feedbackMap[theme];
  }
}
