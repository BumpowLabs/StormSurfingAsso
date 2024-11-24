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
      title: 'Projection cinéma Pleneuf Val-André Lost in The Swell',
      description: 'Un événement en plein air pour regarder les meilleurs films de surf.',
      date: 'Vendredi 10 Janvier 2025',
      image: 'event1.jpg',
    },
    {
      title: 'Projection cinéma Pleneuf Val-André Lost in The Swell',
      description: 'Un événement en plein air pour regarder les meilleurs films de surf.',
      date: 'Vendredi 10 Janvier 2025',
      image: 'event1.jpg',
    },
  ];

  constructor(private router: Router) {}

}
