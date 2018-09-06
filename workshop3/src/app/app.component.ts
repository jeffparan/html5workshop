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

  constructor(private starwarsSvc: StarWarsService, private starwarsStorageSvc: StarwarsStorageService){}
  //constructor(private starwarsStorageSvc: StarwarsStorageService){}

  search(){
    console.log('people ID : >>> ', this.form.value.peopleID);
    
    this.starwarsStorageSvc.find(this.form.value.peopleID)
      .then(
        (result) => {
          console.log('from cache : >>> ', result);
          return (null);
        },
        this.starwarsSvc.searchPeople.bind(this.starwarsSvc)
        // (err) => {
        //   console.log('not found : >>> ', err);
        // }
      )
      .then(this.starwarsStorageSvc.save.bind(this.starwarsStorageSvc))
      .catch(err => {
        console.log('error : >>> ', err);
      })
      
        /*

                .then(
          (result) => {
            this.starwarsStorageSvc.save.bind(this.starwarsStorageSvc)
          }

        )
        .catch(err => {
          console.log('error : >>> ', err);
        })


        .then(this.starwarsStorageSvc.save.bind(this.starwarsStorageSvc))
        .catch(err => {
          console.log('error : >>> ', err);
        })



        this.starwarsSvc.searchPeople(this.form.value.peopleID)
      
      .then(this.starwarsStorageSvc.save.bind(this.starwarsStorageSvc))
      
      // .then(result => {
      //   console.log('result : >>> ', result);        
      //   this.starwarsStorageSvc.save(result);
      // })


      .catch(err => {
        console.log('result : >>> ', err);        
      })

    */
    
    this.form.resetForm();
  }
}
