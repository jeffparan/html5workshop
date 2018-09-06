import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GiphyService, Giphy } from './giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  giphys: Giphy[] = [];

  constructor(private giphySvc: GiphyService){}

  search(form: NgForm){
    console.log('form >>> ', form.value);
    this.giphySvc.search(form.value.searchTerm)
    .then((result: Giphy[]) => {
      this.giphys = result;
      console.log('Giphys : ', this.giphys);
    })
    .catch(err => {
      console.error('Error : ', err);
    }

    )
  }
}
