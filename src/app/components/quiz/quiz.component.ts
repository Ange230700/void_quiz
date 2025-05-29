// src\app\components\quiz\quiz.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { QuizQuestion } from '../../models/question.model';
import { FeedbackMessages } from '../../models/feedback.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnInit {
  theme!: string;
  questions: QuizQuestion[] = [];
  feedback!: FeedbackMessages;
  currentIndex = 0;
  score = 0;
  showResult = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly quizService: QuizService,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.theme = this.route.snapshot.paramMap.get('theme')!;
    this.questions = this.quizService.getQuestions(this.theme);
    this.feedback = this.quizService.getFeedback(this.theme);
  }

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

  answer(choice: string) {
    if (choice === this.currentQuestion.answer) {
      this.score++;
    }
  }

  next() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    } else {
      this.showResult = true;
    }
  }

  restart() {
    this.router.navigate(['/']);
  }

  /** returns the right feedback text based on your score */
  getFeedbackMessage(): string {
    const ratio = this.score / this.questions.length;
    if (ratio === 1) return this.feedback.perfect;
    if (ratio >= 0.8) return this.feedback.high;
    if (ratio >= 0.6) return this.feedback.medium;
    if (ratio >= 0.4) return this.feedback.low;
    return this.feedback.fail;
  }
}
