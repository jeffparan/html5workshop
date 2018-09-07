import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarsService } from './starwars.service';
import { StarwarsStorageService } from './starwars.storage.service';
import { People } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('form')
  form: NgForm;

  people: People = null;

  constructor(private starwarsSvc: StarWarsService, private starwarsStorageSvc: StarwarsStorageService){}
  //constructor(private starwarsStorageSvc: StarwarsStorageService){}

  search(){
    console.log('people ID : >>> ', this.form.value.peopleID);
    
    this.people = null;

    this.starwarsStorageSvc.find(this.form.value.peopleID)
      .then(
        (result) => {
          console.log('from cache : >>> ', result);
          this.people = result;
          return (null);
        },
        (id) => {
          console.log('not in database : >>> ', id);
          return (id)
        }
      )
      .then(this.starwarsSvc.searchPeople.bind(this.starwarsSvc))
      .then((result:People) => {
        console.log('this.people : >>> ', this.people);
        this.people = this.people || result;
        return (result);
      })
      .then(this.starwarsStorageSvc.save.bind(this.starwarsStorageSvc))
      .catch(err => {
        console.log('error : >>> ', err);
      })
      
    this.form.resetForm();
  }
}
