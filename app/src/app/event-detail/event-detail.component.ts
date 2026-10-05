import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventPage, findEventPage } from '../data/events.data';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  event?: EventPage;
  lightbox = { open: false, index: 0 };

  constructor(
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private doc: Document,
  ) {}

  ngOnInit(): void {
    const slug =
      this.route.snapshot.data['slug'] ??
      this.route.snapshot.paramMap.get('slug') ??
      '';
    this.event = findEventPage(slug);
    if (this.event) {
      this.injectJsonLd(this.event);
    }
  }

  get currentImage(): string | undefined {
    return this.event?.images[this.lightbox.index];
  }

  openLightbox(i: number): void {
    this.lightbox = { open: true, index: i };
  }
  closeLightbox(): void {
    this.lightbox.open = false;
  }
  next(): void {
    if (!this.event) return;
    this.lightbox.index = (this.lightbox.index + 1) % this.event.images.length;
  }
  prev(): void {
    if (!this.event) return;
    const n = this.event.images.length;
    this.lightbox.index = (this.lightbox.index - 1 + n) % n;
  }

  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (!this.lightbox.open) return;
    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'ArrowLeft') this.prev();
  }

  /** Données structurées schema.org Event pour le référencement. */
  private injectJsonLd(ev: EventPage): void {
    const data: any = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: ev.title,
      description: ev.seoDescription,
      startDate: ev.startDateIso,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      image: ev.images.map((i) => `https://storm-surfing.fr/${i}`),
      location: {
        '@type': 'Place',
        name: ev.location,
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Bretagne',
          addressCountry: 'FR',
        },
      },
      organizer: {
        '@type': 'Organization',
        name: 'Storm Surfing Association',
        url: 'https://storm-surfing.fr/',
      },
    };
    if (ev.video) {
      data.video = {
        '@type': 'VideoObject',
        name: ev.title,
        description: ev.seoDescription,
        thumbnailUrl: `https://storm-surfing.fr/${ev.heroImage}`,
        contentUrl: `https://storm-surfing.fr/${ev.video}`,
        uploadDate: ev.startDateIso,
      };
    }
    const existing = this.doc.getElementById('ld-event-detail');
    if (existing) existing.remove();
    const s = this.doc.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'ld-event-detail';
    s.text = JSON.stringify(data);
    this.doc.head.appendChild(s);
  }
}
