import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarwarsStorageService } from '../starwars.storage.service';
import { People } from '../model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: People[] = []

  constructor(private swdbSvc: StarwarsStorageService,
    private activatedRouter: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router ) { }

  ngOnInit() {
    this.swdbSvc.getAll()
      .then(result => {
        this.people = result;
        console.log('people list : ', this.people);
      })
      .catch(err => {
        console.log('err : ', err);
      })

      if (this.activatedRouter.snapshot.queryParams.message) {
        console.log('people list : ', this.activatedRouter.snapshot.queryParams.message);
        this.snackBar.open(this.activatedRouter.snapshot.queryParams.message, '', {duration : 2000})
      }

  }

  add() {
    this.router.navigate(['/add'])
  }

}
