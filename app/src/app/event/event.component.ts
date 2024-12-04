import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'] // Correction ici
})
export class EventComponent implements OnInit {
  events = [
    {
      title: 'Projection cinéma Pleneuf Val-André "Lost in The Train"',
      description: 'Soirée surf avec la présence de Aurel Jacob.',
      date: 'Vendredi 10 Janvier 2025 à 20h30',
      image: 'event1.jpg',
      url: 'https://www.helloasso.com/associations/frehel-surf-n-ride/evenements/soiree-surf',
    },
    {
      title: 'Projection cinéma Pleneuf Val-André "Fun First"',
      description: 'Soirée surf avec la présence de Ian Fontaine.',
      date: 'Vendredi 10 Janvier 2025 à 20h30',
      image: 'event2.jpg',
      url: 'https://www.helloasso.com/associations/frehel-surf-n-ride/evenements/soiree-surf',
    },
    {
      title: 'Projection cinéma Pleneuf Val-André "Be You"',
      description: 'Soirée surf avec la présence de Maelys Jouault.',
      date: 'Vendredi 10 Janvier 2025 à 20h30',
      image: 'event3.jpg',
      url: 'https://www.helloasso.com/associations/frehel-surf-n-ride/evenements/soiree-surf',
    },
  ];

  constructor(private router: Router) {} // Placez le constructeur au début

}
