import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

interface Event {
  title: string;
  description: string;
  date: string;
  image: string;
  loading?: boolean;
  visible?: boolean;
  url?: string;
  startDate?: string; // ISO ex: 2026-09-26T10:00
  endDate?: string;   // ISO
  location?: string;
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'] // Correction ici
})
export class EventComponent implements OnInit {
  events: Event[] = [
	{
      title: 'Surf & Rescue Games ',
      description: 'Sauvetage cotier et initiation surf - Apprendre les gestes qui sauvent ... et surfe tes premières vagues.',
      date: 'Samedi 26 Septembre 2026 à 10h à 17h',
      startDate: '2026-09-26T10:00',
      endDate: '2026-09-26T17:00',
      location: 'Cap Fréhel, Côtes-d\'Armor, Bretagne',
      image: 'event11.jpg',
      loading: true,
      visible: true,
      url: 'https://www.helloasso.com/associations/storm-surfing-association/evenements/surf-and-rescue-games' },
 /*
    {
      title: 'Entrainement piscine',
      description: 'Entrainement sur la gestion du stress aquatique avec WatermanSport à la piscine de Lamballe',
      date: 'Samedi 10 Janvier 2026 à 17H30',
      image: 'event9.jpg',
      loading: true,
      visible: true,
      url: 'https://www.helloasso.com/associations/storm-surfing-association/evenements/storm-surfing-association-projection-glisse-le-09-01-2026-a-20h30-2',
    },
 */
  ];

  pastEvents = [
    {
      title: 'Projection cinéma ',
      description: 'Deuxième édition glisse au cinéma du casino de Pleneuf Val Andre avec l équipe de WatermanSport',
      date: 'Vendredi 09 Janvier 2026 à 20h30',
      image: 'event10.jpg',
      loading: true,
      visible: true,
      url: 'https://www.helloasso.com/associations/storm-surfing-association/evenements/storm-surfing-association-projection-glisse-le-09-01-2026-a-20h30-2'
    },
    {
      title: 'Entrainement piscine',
      description: 'Entrainement sur la gestion du stress aquatique avec WatermanSport à la piscine de Lamballe',
      date: 'Samedi 10 Janvier 2026 à 17H30',
      image: 'event9.jpg',
      loading: true,
      visible: true,
      url: 'https://www.helloasso.com/associations/storm-surfing-association/evenements/storm-surfing-association-projection-glisse-le-09-01-2026-a-20h30-2',
    },
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

  constructor(private router: Router, @Inject(DOCUMENT) private doc: Document) {}

  ngOnInit() {
    // Déclencher l'animation d'entrée après un court délai
    setTimeout(() => {
      this.isVisible = true;
    }, 100);

    this.injectEventJsonLd();
  }

  /** Injecte des données structurées schema.org Event pour les événements à venir. */
  private injectEventJsonLd(): void {
    const upcoming = this.events.filter(e => e.startDate);
    if (!upcoming.length) { return; }
    const data = upcoming.map(e => ({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: e.title.trim(),
      description: e.description,
      startDate: e.startDate,
      endDate: e.endDate ?? e.startDate,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      image: e.image ? `https://storm-surfing.fr/${e.image}` : undefined,
      url: e.url,
      location: {
        '@type': 'Place',
        name: e.location ?? 'Cap Fréhel',
        address: { '@type': 'PostalAddress', addressRegion: 'Bretagne', addressCountry: 'FR' }
      },
      organizer: {
        '@type': 'Organization',
        name: 'Storm Surfing Association',
        url: 'https://storm-surfing.fr/'
      }
    }));
    const existing = this.doc.getElementById('ld-events');
    if (existing) { existing.remove(); }
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ld-events';
    script.text = JSON.stringify(data.length === 1 ? data[0] : data);
    this.doc.head.appendChild(script);
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
