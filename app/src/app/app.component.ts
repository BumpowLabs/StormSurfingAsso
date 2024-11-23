import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
  events = [
    {
      title: 'Projection cinéma Pleneuf Val-André Lost in The Swell',
      description: 'Un événement en plein air pour regarder les meilleurs films de surf.',
      date: 'Vendredi 10 Janvier 2025',
      image: 'event1.jpg',
    },
    {
      title: 'Compétition de surf local',
      description: 'Rejoignez-nous pour encourager nos surfeurs locaux sur les vagues !',
      date: 'Dimanche 26 Novembre 2024',
      image: 'image2.jpg',
    },
    {
      title: 'Atelier photo : Capture des vagues',
      description: 'Apprenez à capturer des images incroyables de surf avec des pros.',
      date: 'Lundi 27 Novembre 2024',
      image: 'image.jpg',
    },
  ];
}
