import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  events = [
    {
      title: 'Projection cinéma Pleneuf Val-André Lost in The Swell',
      description: 'Un événement en plein air pour regarder les meilleurs films de surf.',
      date: 'Vendredi 10 Janvier 2025',
      image: 'event1.jpg',
    },
    {
      title: 'A venir ... ',
      description: "D'autres événements arriveront d'ici Avril 2025.",
      date: 'Avril 2025',
      image: 'https://i0.wp.com/www.unikore.fr/wp-content/uploads/2019/01/coming-soon.png?fit=1200%2C345&ssl=1',
    },
    {
      title: 'A venir ... ',
      description: "D'autres événements arriveront d'ici Avril 2025.",
      date: 'Avril 2025',
      image: 'https://i0.wp.com/www.unikore.fr/wp-content/uploads/2019/01/coming-soon.png?fit=1200%2C345&ssl=1',
    },
  ];

  constructor(private router: Router) {}

}
