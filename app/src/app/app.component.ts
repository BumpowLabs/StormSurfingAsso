import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './animations/route-animations'; // Chemin vers ton fichier

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'app';

  constructor() {}

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  
}
