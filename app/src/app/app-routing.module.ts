import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { JoinComponent } from './join/join.component';
import { ContactComponent } from './contact/contact.component';
import { ArchivesComponent } from './archives/archives.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
