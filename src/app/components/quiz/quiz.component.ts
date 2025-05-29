// src\app\components\quiz\quiz.component.ts
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { QuizQuestion } from '../../models/question.model';
import { FeedbackMessages } from '../../models/feedback.model';
import { Subject, interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { trigger, style, animate, transition } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule,
    ProgressBarModule,
    FormsModule,
    Select,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './quiz.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export class QuizComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  theme!: string;
  questions: QuizQuestion[] = [];
  feedback!: FeedbackMessages;
  currentIndex = 0;
  selectedChoice: string | null = null;
  score = 0;
  timerValue = 20;
  answered = false;
  private timerSub?: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly quizService: QuizService,
    private readonly router: Router,
    private readonly messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.theme = this.route.snapshot.paramMap.get('theme')!;
    this.questions = this.quizService.getQuestions(this.theme);
    this.feedback = this.quizService.getFeedback(this.theme);
    this.startTimer();
  }

  get currentQuestion(): QuizQuestion {
    return this.questions[this.currentIndex];
  }

  get totalQuestions(): number {
    return this.questions.length;
  }

  get selectedChoiceId(): string | null {
    if (!this.selectedChoice) return null;
    const idx = this.currentQuestion.choices.indexOf(this.selectedChoice);
    return `choice-${idx}`;
  }

  get choiceOptions(): { label: string; value: string }[] {
    return this.currentQuestion.choices.map((c) => ({ label: c, value: c }));
  }

  answer(choice: string): void {
    if (this.answered) return; // only once
    this.answered = true;
    this.selectedChoice = choice;

    // cancel the countdown
    this.timerSub?.unsubscribe();

    if (choice === this.currentQuestion.answer) {
      this.score++;
      this.messageService.add({
        severity: 'success',
        summary: 'Bonne réponse !',
        detail: `Score: ${this.score}/${this.totalQuestions}`,
        life: 1500,
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Mauvaise réponse',
        detail: `La bonne réponse était : « ${this.currentQuestion.answer} »`,
        life: 3000,
      });
    }
  }

  next(): void {
    if (this.currentIndex + 1 < this.totalQuestions) {
      this.currentIndex++;
      // reset state
      this.answered = false;
      this.selectedChoice = null;
      this.startTimer();
    } else {
      // quiz is over ⇒ navigate to your standalone ResultComponent
      this.router.navigate(['/result'], {
        state: {
          score: this.score,
          total: this.totalQuestions,
          message: this.getFeedbackMessage(),
        },
      });
    }
  }

  restart(): void {
    this.router.navigate(['/']);
  }

  getProgress(): number {
    return ((this.currentIndex + 1) / this.totalQuestions) * 100;
  }

  trackByChoice(index: number, choice: string): string {
    return choice;
  }

  getFeedbackMessage(): string {
    const ratio = this.score / this.totalQuestions;
    if (ratio === 1) return this.feedback.perfect;
    if (ratio >= 0.8) return this.feedback.high;
    if (ratio >= 0.6) return this.feedback.medium;
    if (ratio >= 0.4) return this.feedback.low;
    return this.feedback.fail;
  }

  private startTimer(): void {
    this.timerValue = 20;
    // make a fresh 20-second countdown
    this.timerSub = interval(1000)
      .pipe(take(20))
      .subscribe({
        next: () => this.timerValue--,
        complete: () => {
          if (!this.answered) {
            this.answer(''); // timeout → force “wrong answer”
          }
        },
      });
  }

  private stopTimer(): void {
    this.destroy$.next();
  }

  private resetTimer(): void {
    this.destroy$ = new Subject<void>();
  }

  ngOnDestroy(): void {
    this.timerSub?.unsubscribe();
  }
}
