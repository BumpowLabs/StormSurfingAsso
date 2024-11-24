import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { JoinComponent } from './join/join.component';

const routes: Routes = [
  {path: "", component: HomeComponent, data: { animation: 'Page1' }},
  {path: "home", component: HomeComponent, data: { animation: 'Page1' }},
  {path: "event", component: EventComponent, data: { animation: 'Page2' }},
  {path: "join", component: JoinComponent, data: { animation: 'Page3' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
