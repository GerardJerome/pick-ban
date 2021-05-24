import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapShowerComponent } from './map-shower/map-shower.component';


@NgModule({
  declarations: [
    AppComponent,
    MapShowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBYnp4bpPJxClix8vwJYAIzp7F1EzFZrAg",
      authDomain: "wantedpickandban.firebaseapp.com",
      storageBucket: "wantedpickandban.appspot.com",
      projectId: "wantedpickandban",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
