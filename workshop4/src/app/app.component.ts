import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { People } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  people: People = null; 

  //constructor(private starwarsSvc: StarWarsService, private starwarsStorageSvc: StarwarsStorageService){}


  //    console.log('log : >>> ', result);
  //    console.log('error : >>> ', err);
  //    this.form.resetForm();
}
