// src\app\components\thematics\thematics.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Topic } from '../../models/topic.model';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-thematics',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './thematics.component.html',
})
export class ThematicsComponent {
  topics: Topic[];
  private readonly descriptions: Record<string, string> = {
    'films-et-series':
      'Testez vos connaissances sur vos films et séries cultes !',
    musique: 'Êtes-vous vraiment incollable sur la musique ?',
    'harry-potter': 'Plongez dans l’univers magique de Poudlard !',
    'jeux-videos': 'Prouvez que vous êtes le boss des jeux vidéo !',
    citations: 'À quel point maîtrisez-vous les grandes citations ?',
    marvel: 'Montrez votre savoir sur l’univers Marvel !',
    disney: 'Retombez en enfance avec nos quizz Disney !',
  };

  constructor(
    private readonly quizService: QuizService,
    private readonly router: Router,
  ) {
    this.topics = this.quizService.getTopics();
  }

  getDescription(theme: string) {
    return this.descriptions[theme] || '';
  }

  selectTheme(topic: Topic) {
    this.router.navigate(['/quiz', topic.themeData]);
  }
}
