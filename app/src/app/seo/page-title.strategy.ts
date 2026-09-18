import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from './seo';

/**
 * Stratégie de titre centralisée : à chaque navigation (y compris pendant le
 * prerender côté serveur), met à jour le <title>, la meta description, le lien
 * canonical et les balises Open Graph / Twitter en fonction de la route active.
 *
 * Les métadonnées de chaque route sont lues depuis `route.data` :
 *   { title: '...', data: { description: '...' } }
 */
@Injectable()
export class PageTitleStrategy extends TitleStrategy {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly doc: Document,
  ) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    // Titre de page (défini par la propriété `title` de la route)
    const pageTitle = this.buildTitle(snapshot);
    const fullTitle = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
    this.title.setTitle(fullTitle);

    // Récupère les données de la route la plus profonde
    let route = snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const description: string =
      route.data?.['description'] ??
      "Club et esprit de surf au Cap Fréhel, en Bretagne (Côtes-d'Armor).";

    // URL canonique = domaine + chemin, sans query ni fragment
    const path = snapshot.url.split('#')[0].split('?')[0];
    const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;

    // Meta description
    this.meta.updateTag({ name: 'description', content: description });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:image', content: DEFAULT_OG_IMAGE });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    // Lien canonical (créé s'il n'existe pas)
    let link: HTMLLinkElement | null = this.doc.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
  }
}
