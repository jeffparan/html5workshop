import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../model';
import { SakilaService } from '../sakila.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css']
})
export class FilmsDetailsComponent implements OnInit {

  film: Film = null;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private sakilaSvc: SakilaService,
    private meta: Meta,
    private title: Title
    ) { }

  ngOnInit() {

    const fid = this.activatedRoute.snapshot.params.fid;
    this.sakilaSvc.getFilm(fid)
      .then(result => {
        console.log('result : ', result);
        this.film = result;        
      })
      .catch(err => {
        console.error('result : ', err);
      })
    console.log('fid : ', fid);

  }

  back() {
    this.router.navigate(['/'], {
      queryParams : { filmid : this.film.film_id }
    })
  }
}
