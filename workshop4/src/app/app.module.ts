import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './/material.module';
import { ApprouteModule } from './approute.module';
import { PeopleListComponent } from './components/people-list.component';
import { StarWarsService } from './starwars.service';
import { StarwarsStorageService } from './starwars.storage.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ApprouteModule
  ],
  providers: [StarWarsService, StarwarsStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
