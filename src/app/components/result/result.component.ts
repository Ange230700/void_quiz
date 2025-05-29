// src/app/components/result/result.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="result">
      <h2>Résultat : {{ score }} / {{ total }}</h2>
      <p>{{ message }}</p>
      <button (click)="restart()">Rejouer</button>
    </div>
  `,
})
export class ResultComponent {
  // You can pass these via router state or a service
  score = history.state.score ?? 0;
  total = history.state.total ?? 0;
  message = history.state.message ?? 'Bonne continuation !';

  constructor(private readonly router: Router) {}

  restart() {
    this.router.navigate(['/']);
  }
}
