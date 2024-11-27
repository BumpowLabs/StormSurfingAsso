import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { JoinComponent } from './join/join.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: "", component: HomeComponent, title:"Accueil", data: { animation: 'Page1' }},
  {path: "home", component: HomeComponent, title: "Accueil", data: { animation: 'Page1' }},
  {path: "event", component: EventComponent, title: "Nos Evénements", data: { animation: 'Page2' }},
  {path: "join", component: JoinComponent, title: "Nous Rejoindre", data: { animation: 'Page3' }},
  {path: "contact", component: ContactComponent, title: "Nous Contactez", data: { animation: 'Page4' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
