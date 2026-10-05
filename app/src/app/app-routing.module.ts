import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { JoinComponent } from './join/join.component';
import { ContactComponent } from './contact/contact.component';
import { ArchivesComponent } from './archives/archives.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MEMBERS } from './data/members.data';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Accueil',
    data: {
      animation: 'Page1',
      description:
        "Storm Surfing Association : club et esprit de surf au Cap Fréhel, en Bretagne (Côtes-d'Armor). Fondée en hommage à Antoine Mouille pour promouvoir le surf, l'amitié et le partage.",
    },
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Accueil',
    data: {
      animation: 'Page1',
      description:
        "Storm Surfing Association : club et esprit de surf au Cap Fréhel, en Bretagne (Côtes-d'Armor). Fondée en hommage à Antoine Mouille pour promouvoir le surf, l'amitié et le partage.",
    },
  },
  {
    path: 'event',
    component: EventComponent,
    title: 'Nos Événements',
    data: {
      animation: 'Page2',
      description:
        "Les événements de la Storm Surfing Association : initiations surf et sauvetage côtier, séances yoga & surf, projections et soirées conviviales en Côtes-d'Armor.",
    },
  },
  {
    path: 'join',
    component: JoinComponent,
    title: 'Nous rejoindre',
    data: {
      animation: 'Page3',
      description:
        "Rejoignez la Storm Surfing Association : adhérez, participez aux événements et soutenez l'esprit du surf au Cap Fréhel, en Bretagne.",
    },
  },
  {
    path: 'archives',
    component: ArchivesComponent,
    title: 'Archives',
    data: {
      animation: 'Page4',
      description:
        "Retour en images sur les événements passés de la Storm Surfing Association : concerts, séances surf & yoga, projections et entraînements.",
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
    data: {
      animation: 'Page5',
      description:
        "Contactez la Storm Surfing Association : posez vos questions sur nos événements, adhésions et initiations surf au Cap Fréhel (Côtes-d'Armor).",
    },
  },
  {
    path: 'evenements/seance-yoga-surf-sables-dor',
    component: EventDetailComponent,
    title: 'Séance Yoga & Surf aux Sables-d’Or (Côtes-d’Armor)',
    data: {
      animation: 'Page6',
      slug: 'seance-yoga-surf-sables-dor',
      description:
        "Retour sur la séance Yoga & Surf de la Storm Surfing Association aux Sables-d’Or : initiation surf avec Maëlys Jouault, figure du surf féminin breton, suivie d’une séance de yoga. Côtes-d’Armor, Bretagne.",
    },
  },
  {
    path: 'evenements/soiree-concert-sell-the-kids',
    component: EventDetailComponent,
    title: 'Soirée concert Sell The Kids au Café de la Plage',
    data: {
      animation: 'Page6',
      slug: 'soiree-concert-sell-the-kids',
      description:
        'Retour en images sur la soirée concert Sell The Kids de la Storm Surfing Association au Café de la Plage, en Côtes-d’Armor.',
    },
  },
  {
    path: 'evenements/entrainement-piscine-lamballe',
    component: EventDetailComponent,
    title: 'Entraînement piscine : gestion du stress aquatique à Lamballe',
    data: {
      animation: 'Page6',
      slug: 'entrainement-piscine-lamballe',
      description:
        'Retour sur la séance d’entraînement de la Storm Surfing Association à la piscine de Lamballe avec WatermanSport. Côtes-d’Armor.',
    },
  },
  {
    path: 'evenements/surf-rescue-games-2026',
    component: EventDetailComponent,
    title: 'Surf & Rescue Games 2026 — plage des Grèves d’En Bas',
    data: {
      animation: 'Page6',
      slug: 'surf-rescue-games-2026',
      description:
        'Retour sur le premier Surf & Rescue Games de la Storm Surfing Association sur la plage des Grèves d’En Bas : rescue board, bouée tractée et compétition surfeurs / sauveteurs. Côtes-d’Armor.',
    },
  },
  {
    path: 'membres',
    component: MembersComponent,
    title: 'Les membres',
    data: {
      animation: 'Page6',
      description:
        'Découvrez les membres de la Storm Surfing Association : les visages derrière les vagues, leurs parcours et leur passion du surf en Bretagne.',
    },
  },
  {
    path: 'evenements/projection-cinema-janvier-2026',
    component: EventDetailComponent,
    title: 'Projection surf XXL & soutien au 29Hood',
    data: {
      animation: 'Page6',
      slug: 'projection-cinema-janvier-2026',
      description:
        'Soirée projection de surf XXL de la Storm Surfing Association au cinéma de Pléneuf-Val-André et remise d’un chèque au 29Hood pour le championnat du monde de surf club en Australie.',
    },
  },
];

// Une route par membre, générée automatiquement depuis les données (prerendue).
routes.push(
  ...MEMBERS.map((m) => ({
    path: `membres/${m.slug}`,
    component: MemberDetailComponent,
    title: m.seoTitle ?? `${m.firstName}, membre de Storm Surfing`,
    data: { animation: 'Page6', slug: m.slug, description: m.seoDescription },
  })),
);

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
