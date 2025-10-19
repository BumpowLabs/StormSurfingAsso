import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ChangeDetectorRef } from '@angular/core';

interface Photo {
  src: string;
  thumb?: string;
  title?: string;
  date?: string;   // ex: "27 Juin 2025"
  year?: number;
  loading?: boolean;
}

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}

  photos: Photo[] = [
    { src: 'gal1.jpeg', thumb: 'gal1.jpeg', title: 'Concert Sell The Kids', date: '27 Juin 2025', loading: true },
    { src: 'gal2.jpeg', thumb: 'gal2.jpeg', title: 'Concert Sell The Kids', date: '27 Juin 2025', loading: true },
    { src: 'gal3.jpeg', thumb: 'gal3.jpeg', title: 'Concert Sell The Kids', date: '27 Juin 2025', loading: true },
    { src: 'gal4.jpeg', thumb: 'gal4.jpeg', title: 'Concert Sell The Kids', date: '27 Juin 2025', loading: true },
    { src: 'gal5.jpeg', thumb: 'gal5.jpeg', title: 'Concert Sell The Kids', date: '27 Juin 2025', loading: true },
    // Ajoutez vos photos ici...
  ];

  lightbox = { open: false, index: 0 };

  get currentPhoto(): Photo | undefined {
    return this.photos[this.lightbox.index];
  }

  ngOnInit(): void {
    // Calcul de l'année depuis la date (si fournie)
    this.photos = this.photos.map(p => ({
      ...p,
      year: p.year ?? this.extractYear(p.date),
      loading: p.loading ?? true
    }));
  }

  openLightbox(index: number) {
    this.lightbox = { open: true, index };
  }

  closeLightbox() {
    console.log('closeLightbox called', new Date().toISOString());
    this.lightbox.open = false;
    // s'assurer que l'affichage est mis à jour immédiatement
    this.cdr.detectChanges();
    // reset index after closing to avoid stale references to currentPhoto
    setTimeout(() => { this.lightbox.index = 0; }, 200);
  }

  next() {
    if (!this.photos.length) return;
    this.lightbox.index = (this.lightbox.index + 1) % this.photos.length;
  }

  prev() {
    if (!this.photos.length) return;
    this.lightbox.index = (this.lightbox.index - 1 + this.photos.length) % this.photos.length;
  }

  onImageError(p: Photo) {
    p.src = p.src || '';
    p.thumb = 'assets/placeholder.jpg';
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(ev: KeyboardEvent) {
    if (!this.lightbox.open) return;
    if (ev.key === 'Escape') this.closeLightbox();
    if (ev.key === 'ArrowRight') this.next();
    if (ev.key === 'ArrowLeft') this.prev();
  }

  private extractYear(date?: string): number | undefined {
    if (!date) return undefined;
    // Essaye ISO / numériques
    const iso = new Date(date);
    if (!isNaN(iso.getTime())) return iso.getFullYear();

    // Ex: "27 Juin 2025"
    const normalized = date.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const m = normalized.match(/(\d{1,2})\s+[a-z]+?\s+(\d{4})/);
    if (m) return Number(m[2]);

    // Ex: "2024"
    const y = date.match(/\b(19|20)\d{2}\b/);
    return y ? Number(y[0]) : undefined;
  }
}
