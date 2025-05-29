// src\app\app.routes.ts

import { Routes } from '@angular/router';
import { ThematicsComponent } from './components/thematics/thematics.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result.component';

export const routes: Routes = [
  { path: '', component: ThematicsComponent },
  { path: 'quiz/:theme', component: QuizComponent },
  { path: 'result', component: ResultComponent },
];
