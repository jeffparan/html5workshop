import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films.component';
import { FilmsDetailsComponent } from './components/films-details.component';
import { SakilaService } from './sakila.service';
import { AppRouteModule } from './app-route.module';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmsDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouteModule
  ],
  providers: [SakilaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
