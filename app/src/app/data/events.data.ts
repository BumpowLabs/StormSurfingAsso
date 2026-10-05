// Pages de détail des événements passés (une entrée = une page SEO).
// Pour ajouter un événement : copier un bloc et renseigner les champs.

export interface EventPage {
  slug: string;              // identifiant d'URL : /evenements/<slug>
  title: string;             // titre affiché (H1)
  date: string;              // date lisible
  startDateIso?: string;     // ex: '2025-12-06' (données structurées)
  location: string;          // lieu (SEO local)
  heroImage: string;         // image de bandeau (dans public/)
  video?: string;            // vidéo optionnelle (mp4 dans public/)
  partner?: { name: string; url: string };  // partenaire + lien
  offer?: string;            // encart offre spéciale (optionnel)
  intro: string;             // phrase d'accroche
  paragraphs: string[];      // corps du texte
  images: string[];          // galerie (fichiers dans public/)
  seoTitle: string;          // <title> (sans le nom du site, ajouté automatiquement)
  seoDescription: string;    // meta description
}

export const EVENT_PAGES: EventPage[] = [
  {
    slug: 'seance-yoga-surf-sables-dor',
    title: 'Séance Yoga & Surf aux Sables-d’Or',
    date: '6 & 7 décembre 2025',
    startDateIso: '2025-12-06',
    location: 'Sables-d’Or-les-Pins, Côtes-d’Armor',
    heroImage: 'event5.jpg',
    intro:
      'Séance Yoga & Surf aux Sables-d’Or, dans les Côtes-d’Armor : une journée entre énergie de l’océan et sérénité du yoga.',
    paragraphs: [
      'Au programme, une initiation surf encadrée par Maëlys Jouault, figure de proue du surf féminin en Bretagne. Maëlys s’est adaptée à chaque pratiquant, prodiguant ses conseils et son apprentissage aussi bien aux débutants qu’aux surfeurs plus avancés.',
      'Après l’effort et le plaisir des vagues, la journée s’est prolongée par une séance de yoga pour étirer, relâcher et retrouver le calme : l’équilibre parfait entre l’intensité de l’eau et la détente sur le sable.',
      'Un grand merci à toutes et à tous pour ce moment de partage sur le spot des Sables-d’Or-les-Pins, dans les Côtes-d’Armor.',
    ],
    images: ['gal6.jpeg', 'gal7.jpeg', 'gal8.jpeg', 'gal9.jpeg', 'gal10.jpeg', 'gal11.jpeg'],
    seoTitle: 'Séance Yoga & Surf aux Sables-d’Or (Côtes-d’Armor)',
    seoDescription:
      'Retour sur la séance Yoga & Surf de la Storm Surfing Association aux Sables-d’Or : initiation surf avec Maëlys Jouault, figure du surf féminin breton, suivie d’une séance de yoga. Côtes-d’Armor, Bretagne.',
  },
  {
    slug: 'soiree-concert-sell-the-kids',
    title: 'Soirée concert Sell The Kids au Café de la Plage',
    date: '27 juin 2025',
    startDateIso: '2025-06-27',
    location: 'Café de la Plage, Côtes-d’Armor',
    heroImage: 'event3.jpg',
    intro:
      'Retour sur notre soirée concert avec Sell The Kids au Café de la Plage, en Côtes-d’Armor.',
    paragraphs: [
      'Le groupe Sell The Kids a fait vibrer le Café de la Plage le temps d’une soirée placée sous le signe de la musique, du partage et de l’esprit surf.',
      'Membres, amis et curieux se sont retrouvés pour un concert convivial, dans l’ambiance chaleureuse qui fait l’identité de la Storm Surfing Association.',
      'Merci à Sell The Kids et à toutes celles et ceux qui sont venus faire vivre cette soirée en bord de mer.',
    ],
    images: ['gal1.jpeg', 'gal2.jpeg', 'gal3.jpeg', 'gal4.jpeg', 'gal5.jpeg'],
    seoTitle: 'Soirée concert Sell The Kids au Café de la Plage (Côtes-d’Armor)',
    seoDescription:
      'Retour en images sur la soirée concert Sell The Kids organisée par la Storm Surfing Association au Café de la Plage, en Côtes-d’Armor. Musique, surf et convivialité.',
  },
  {
    slug: 'entrainement-piscine-lamballe',
    title: 'Entraînement piscine : gestion du stress aquatique à Lamballe',
    date: '10 janvier 2026',
    startDateIso: '2026-01-10',
    location: 'Piscine de Lamballe, Côtes-d’Armor',
    heroImage: 'event9.jpg',
    intro:
      'Séance d’entraînement à la piscine de Lamballe, dédiée à la gestion du stress aquatique, en partenariat avec WatermanSport.',
    paragraphs: [
      'Encadrée par Pass 22, cette session a permis à chacun de travailler la gestion du stress sous l’eau : apnée, relâchement et confiance, des fondamentaux essentiels pour progresser et surfer en sécurité.',
      'Un entraînement idéal pour préparer la saison, apprendre à gérer les situations de wipeout et gagner en sérénité dans les vagues.',
      'Merci à WatermanSport et à Pass 22 pour l’accueil, et à tous les participants pour leur engagement.',
    ],
    images: ['gal16.jpeg', 'gal17.jpeg', 'gal18.jpeg'],
    seoTitle: 'Entraînement piscine – gestion du stress aquatique à Lamballe',
    seoDescription:
      'Retour sur la séance d’entraînement de la Storm Surfing Association à la piscine de Lamballe : gestion du stress aquatique et apnée avec WatermanSport. Côtes-d’Armor.',
  },
  {
    slug: 'surf-rescue-games-2026',
    title: 'Surf & Rescue Games 2026',
    date: '26 septembre 2026',
    startDateIso: '2026-09-26',
    location: 'Plage des Grèves d’En Bas, Côtes-d’Armor',
    heroImage: 'rescuegame2026-1.jpeg',
    video: 'rescuegame2026.mp4',
    partner: { name: 'Pass 22', url: 'https://www.pass22.fr/accueil' },
    offer:
      'Suite à cette journée, Pass 22 propose aux membres de la Storm Surfing Association une adhésion spéciale à tarif préférentiel.',
    intro:
      'Sous un grand soleil et des conditions optimales, le premier Surf & Rescue Games, organisé en collaboration avec Pass 22, s’est tenu sur la plage des Grèves d’En Bas, en Côtes-d’Armor.',
    paragraphs: [
      'Au programme : initiation au rescue board, bouée tractée et mises en situation de sauvetage côtier, pour apprendre les gestes qui sauvent tout en s’amusant.',
      'Pour clôturer la journée, une compétition par équipes entre surfeurs et sauveteurs autour de 3 épreuves, âprement disputées dans la bonne humeur.',
      'La journée s’est terminée autour d’un petit goûter crêpes, pour se restaurer et partager un dernier moment convivial tous ensemble.',
    ],
    images: ['rescuegame2026-1.jpeg', 'rescuegame2026-2.jpeg', 'rescuegame2026-3.jpeg', 'rescuegame2026-4.jpeg', 'rescuegame2026-5.jpeg', 'rescuegame2026-6.jpeg', 'rescuegame2026-7.jpeg', 'rescuegame2026-8.jpeg', 'rescuegame2026-9.jpeg', 'rescuegame2026-10.jpeg', 'rescuegame2026-11.jpeg', 'rescuegame2026-12.jpeg', 'rescuegame2026-13.jpeg', 'rescuegame2026-14.jpeg', 'rescuegame2026-15.jpeg', 'rescuegame2026-16.jpeg', 'rescuegame2026-17.jpeg', 'rescuegame2026-18.jpeg', 'rescuegame2026-19.jpeg', 'rescuegame2026-20.jpeg', 'rescuegame2026-21.jpeg', 'rescuegame2026-22.jpeg'],
    seoTitle: 'Surf & Rescue Games 2026 — plage des Grèves d’En Bas (Côtes-d’Armor)',
    seoDescription:
      'Retour sur le premier Surf & Rescue Games de la Storm Surfing Association sur la plage des Grèves d’En Bas : initiation rescue board, bouée tractée et compétition surfeurs / sauveteurs. Côtes-d’Armor, Bretagne.',
  },
  {
    slug: 'projection-cinema-janvier-2026',
    title: 'Projection surf XXL & soutien au 29Hood',
    date: '9 janvier 2026',
    startDateIso: '2026-01-09',
    location: 'Cinéma du casino de Pléneuf-Val-André, Côtes-d’Armor',
    heroImage: 'event10.jpg',
    intro:
      'En janvier 2026, la Storm Surfing Association a investi le cinéma du casino de Pléneuf-Val-André pour une soirée sous le signe du très gros surf.',
    paragraphs: [
      'Sur grand écran, place aux images impressionnantes de surf XXL : vagues géantes, sessions hors normes et riders qui repoussent les limites. De quoi faire rêver — et frissonner — toute la salle.',
      'La soirée a aussi été marquée par un beau moment : la remise d’un chèque de l’association au 29Hood, pour soutenir leur participation au championnat du monde de surf club, en Australie. Une belle façon d’encourager nos représentants sur la scène internationale.',
      'Merci à toutes et à tous d’être venus partager ce moment — et bonne chance au 29Hood pour l’Australie !',
      'Un grand merci au Casino de Pléneuf-Val-André et à Pierre, qui nous soutiennent sur cet événement.',
    ],
    images: ['cine2026.jpeg', 'cine2026-1.jpeg', 'cine2026-2.jpeg'],
    seoTitle: 'Projection surf XXL & soutien au 29Hood — Pléneuf-Val-André',
    seoDescription:
      'Retour sur la soirée projection de la Storm Surfing Association au cinéma de Pléneuf-Val-André : images de surf XXL et remise d’un chèque au 29Hood pour le championnat du monde de surf club en Australie.',
  },
];

export function findEventPage(slug: string): EventPage | undefined {
  return EVENT_PAGES.find((e) => e.slug === slug);
}
