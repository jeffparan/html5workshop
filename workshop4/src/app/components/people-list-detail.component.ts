import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { People } from '../model';
import { StarWarsService } from '../starwars.service';
import { StarwarsStorageService } from '../starwars.storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-people-list-detail',
  templateUrl: './people-list-detail.component.html',
  styleUrls: ['./people-list-detail.component.css']
})

export class PeopleListDetailComponent implements OnInit {

  canShare = false;
  people: People = null;

  constructor(private activatedRouter: ActivatedRoute,
    private swSvc: StarWarsService,
    private swdbSvc: StarwarsStorageService,
    private router: Router,
    private snackBar: MatSnackBar,
    private meta: Meta,
    private title: Title) { }

  ngOnInit() {
    this.canShare = !!navigator['share'];

    const pid = parseInt(this.activatedRouter.snapshot.params.pid);

    this.swdbSvc.find(pid)
      .then(result => {
        console.log('result pdet : ', result);
        this.people = result;        
      })
      .catch(err => {
        console.error('result : ', err);
        this.snackBar.open(this.activatedRouter.snapshot.params.pid, '', {duration : 2000})
        // .afterDismissed().toPromise()

      })
    // console.log('pid : ', pid);
  }

  share() {
    navigator['share']({
      title: `Star Wars!`,
      text: `Sharing ${this.people.name} with the world!`,
      url:`https://jeffparan.github.io/html5workshop`
    })
  }

  back(){
    this.router.navigate(['/']);
  }

}
