import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { TitleStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PageTitleStrategy } from './seo/page-title.strategy';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { JoinComponent } from './join/join.component';
import { ContactComponent } from './contact/contact.component';
import { ArchivesComponent } from './archives/archives.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    JoinComponent,
    ContactComponent,
    ArchivesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    { provide: TitleStrategy, useClass: PageTitleStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
