// src\app\components\thematics\thematics.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Topic } from '../../models/topic.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thematics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thematics.component.html',
})
export class ThematicsComponent {
  topics: Topic[];

  constructor(
    private readonly quizService: QuizService,
    private readonly router: Router,
  ) {
    this.topics = this.quizService.getTopics();
  }

  selectTheme(topic: Topic) {
    this.router.navigate(['/quiz', topic.themeData]);
  }
}
