import { Component, OnInit } from '@angular/core';
import { StarwarsStorageService } from '../starwars.storage.service';
import { People } from '../model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: People[] = []

  constructor(private swdbSvc: StarwarsStorageService ) { }

  ngOnInit() {
    this.swdbSvc.getAll()
      .then(result => {
        this.people = result;
        console.log('people list : ', this.people);
      })
      .catch(err => {
        console.log('err : ', err);
      })

  }

}
