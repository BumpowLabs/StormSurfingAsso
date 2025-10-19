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
      title: 'Séance Yoga & Surf',
      description: 'Offrez-vous une séance unique entre énergie de l’océan et sérénité du yoga.',
      date: 'Samedi 06 et Dimanche 07 Décembre',
      image: 'event5.jpg',
      loading: true,
      visible: true,
      url: 'https://www.helloasso.com/associations/storm-surfing-association/evenements/stage-sportif'
    },
    {
      title: 'Séance Yoga',
      description: 'Offrez-vous un instant de calme et d’harmonie avec le yoga d’Élise.',
      date: 'Samedi 06 Décembre',
      image: 'event6.jpg',
      loading: true,
      visible: true,
      url: 'https://www.helloasso.com/associations/storm-surfing-association/evenements/stage-sportif',
    },
  ];
  pastEvents = [
    {
      title: 'Soirée concert "Sell The Kids"',
      description: 'Retour sur notre soirée concert au café de la plage.',
      date: '27 juin 2025',
      image: 'event3.jpg',
      url: '/evenements/passe/championnat-2024'
    },
	{
      title: 'Projection "Lost in The Train"',
      description: 'Retour sur notre projection au cinéma de Pleneuf Val André.',
      date: '10 janvier 2025',
      image: 'event1.jpg',
      url: '/evenements/passe/championnat-2024'
    },
	{
      title: 'Projection cinéma "Fun First"',
      description: 'Retour sur notre projection au cinéma de Pleneuf Val André.',
      date: '10 janvier 2025',
      image: 'event2.jpg',
      url: '/evenements/passe/championnat-2024'
    },
    {
      title: 'Projection cinéma "Be You"',
      description: 'Retour sur notre projection au cinéma de Pleneuf Val André.',
      date: '10 janvier 2025',
      image: 'event4.jpg',
      url: '/evenements/passe/surf-smile'
    }
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
