import { Component, OnInit } from '@angular/core';
import { SakilaService } from '../sakila.service';
import { Summary } from '../model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Summary[] = [];

  constructor(private sakilaSvc: SakilaService) { }

  ngOnInit() {
    this.sakilaSvc.getFilms()
      .then(result => {
        console.log('result :', result);
        this.films = result
      })
      .catch(err => {
        console.error('error : ', err);
      })
  }

}
