import { GiphyService } from './shared/giphy/giphy.service';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EventoService } from './shared/evento/evento.service';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventoListComponent } from './evento-list/evento-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EventoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
	BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [EventoService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
