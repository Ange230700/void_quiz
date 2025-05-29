// src/app/components/result/result.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './result.component.html',
})
export class ResultComponent implements OnInit {
  score = history.state.score ?? 0;
  total = history.state.total ?? 0;
  message = history.state.message ?? 'Bonne continuation !';
  percentage = 0;

  constructor(
    private readonly router: Router,
    private readonly messageService: MessageService,
  ) {}

  ngOnInit() {
    this.percentage = this.total
      ? Math.round((this.score / this.total) * 100)
      : 0;

    this.messageService.add({
      severity: this.getSeverity(),
      summary: 'Quiz terminé',
      detail: `${this.score} / ${this.total} (${this.percentage}%)`,
      life: 4000,
    });
  }

  getSeverity(): 'success' | 'info' | 'warn' | 'error' {
    const ratio = this.total ? this.score / this.total : 0;
    if (ratio === 1) return 'success';
    if (ratio >= 0.8) return 'info';
    if (ratio >= 0.6) return 'warn';
    return 'error';
  }

  restart() {
    this.router.navigate(['/']);
  }
}
