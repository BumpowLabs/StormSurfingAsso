import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Event {
  title: string;
  description: string;
  date: string;
  image: string;
  loading?: boolean;
  visible?: boolean;
  url?: string;
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'] // Correction ici
})
export class EventComponent implements OnInit {
  events: Event[] = [
    {
      title: 'Projection cinéma Pleneuf Val-André "Lost in The Train"',
      description: 'Soirée surf avec la présence de Aurel Jacob.',
      date: 'Vendredi 10 Janvier 2025 à 20h30',
      image: 'event1.jpg',
      loading: true,
      visible: true,
      url: 'https://www.helloasso.com/associations/frehel-surf-n-ride/evenements/soiree-surf',
    },
    {
      title: 'Projection cinéma Pleneuf Val-André "Fun First"',
      description: 'Soirée surf avec la présence de Ian Fontaine.',
      date: 'Vendredi 10 Janvier 2025 à 20h30',
      image: 'event2.jpg',
      loading: true,
      visible: true,
      url: 'https://www.helloasso.com/associations/frehel-surf-n-ride/evenements/soiree-surf',
    },
    {
      title: 'Projection cinéma Pleneuf Val-André "Be You"',
      description: 'Soirée surf avec la présence de Maelys Jouault.',
      date: 'Vendredi 10 Janvier 2025 à 20h30',
      image: 'event3.jpg',
      loading: true,
      visible: true,
      url: 'https://www.helloasso.com/associations/frehel-surf-n-ride/evenements/soiree-surf'
    },
  ];

  isVisible = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Déclencher l'animation d'entrée après un court délai
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

  // Gérer le chargement des images
  onImageLoad(event: Event) {
    event.loading = false;
  }

  // Animation au défilement
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    this.events.forEach((event, index) => {
      const element = document.querySelector(`#event-${index}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        event.visible = isVisible;
      }
    });
  }

  // Navigation
  navigateToEventDetails(eventId: number) {
    // À implémenter : navigation vers les détails de l'événement
    this.router.navigate(['/event', eventId]);
  }

  // Gestion des erreurs d'image
  onImageError(event: Event) {
    event.image = 'assets/placeholder.jpg'; // Image par défaut en cas d'erreur
  }
}
