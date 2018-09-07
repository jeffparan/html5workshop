import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApprouteModule } from './approute.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { CatComponent } from './components/cat.component';
import { DogComponent } from './components/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,ApprouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
