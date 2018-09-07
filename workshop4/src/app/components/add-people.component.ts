import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarwarsStorageService } from '../starwars.storage.service';
import { StarWarsService } from '../starwars.service';
import { People } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  // @ViewChild('form')
  // form: NgForm;

  people: People = null;

  constructor(private swdbSvc: StarwarsStorageService, 
    private swSvc: StarWarsService, 
    private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/']);
  }

  add(form: NgForm){
    console.log('people ID : >>> ', form.value.peopleID);
    
    this.people = null;

    this.swdbSvc.find(form.value.peopleID)
      .then(
        (result) => {   //resolved
          this.router.navigate(['/']);
          throw false;
        },
        this.swSvc.searchPeople.bind(this.swSvc)
      )
      .then(this.swdbSvc.save.bind(this.swdbSvc))
      .then(id => {
        console.log('id : >>> ', id);
        this.router.navigate(['/'], {
          queryParams: { message: `Saved ${id}` }
        });
      })
      .catch(err => {
          if (!err){
            return;
          }
          console.log('error : >>> ', err)
          this.router.navigate(['/'], {
            queryParams: { message: `Error: ${err}` }
          });          
      })
      
    form.resetForm();
    //this.router.navigate(['/']);
  }
}
