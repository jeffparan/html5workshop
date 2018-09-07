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
import { AddPeopleComponent } from './components/add-people.component';
import { PeopleListDetailComponent } from './components/people-list-detail.component';

@NgModule({
  declarations: [           //for components
    AppComponent,
    PeopleListComponent,
    AddPeopleComponent,
    PeopleListDetailComponent
  ],
  imports: [                //for modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ApprouteModule
  ],
  providers: [StarWarsService, StarwarsStorageService], //for service
  bootstrap: [AppComponent]
})
export class AppModule { }
