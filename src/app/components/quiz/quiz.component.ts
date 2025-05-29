// src\app\components\quiz\quiz.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { QuizQuestion } from '../../models/question.model';
import { FeedbackMessages } from '../../models/feedback.model';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { interval, Subscription, take } from 'rxjs';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, ImageModule, ButtonModule, ProgressBarModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
  ],
})
export class QuizComponent implements OnInit {
  theme!: string;
  questions: QuizQuestion[] = [];
  feedback!: FeedbackMessages;
  currentIndex = 0;
  score = 0;
  showResult = false;
  selectedChoice: string | null = null;
  timerValue = 20; // seconds
  timerSub?: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly quizService: QuizService,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.theme = this.route.snapshot.paramMap.get('theme')!;
    this.questions = this.quizService.getQuestions(this.theme);
    this.feedback = this.quizService.getFeedback(this.theme);
    this.startTimer();
  }

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

  answer(choice: string) {
    if (this.selectedChoice) return; // already answered
    this.selectedChoice = choice;
    if (choice === this.currentQuestion.answer) {
      this.score++;
    }
  }

  startTimer() {
    this.timerSub?.unsubscribe();
    this.timerValue = 20;
    this.timerSub = interval(1000)
      .pipe(take(20))
      .subscribe(() => {
        this.timerValue--;
        if (this.timerValue === 0) {
          this.answer(''); // auto-skip / mark wrong
        }
      });
  }

  next() {
    this.startTimer();
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.selectedChoice = null; // reset for next question
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

  ngOnDestroy() {
    this.timerSub?.unsubscribe();
  }
}
