// src\app\services\quiz.service.ts
import { Injectable } from '@angular/core';
import * as popData from '../../data/popCultureQuiz';
import * as musicData from '../../data/musicQuiz';
import * as harryPotterData from '../../data/harryPotterQuiz';
import * as videoGamesData from '../../data/videoGamesQuiz';
import * as citationsData from '../../data/quoteQuiz';
import * as marvelData from '../../data/marvelQuiz';
import * as disneyData from '../../data/disneyQuiz';
import { QuizQuestion } from '../models/question.model';
import { FeedbackMessages } from '../models/feedback.model';
import { feedbackMessagesByTopic } from '../../data/feedbackMessagesByTopic';
import { topicsList } from '../../data/topicsList';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly topics = topicsList;
  private readonly questionsMap: Record<string, QuizQuestion[]> = {
    'films-et-series': popData.popCultureQuiz,
    musique: musicData.musicQuiz,
    'harry-potter': harryPotterData.harryPotterQuiz,
    'jeux-videos': videoGamesData.videoGamesQuiz,
    citations: citationsData.quoteQuiz,
    marvel: marvelData.marvelQuiz,
    disney: disneyData.disneyQuiz,
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
