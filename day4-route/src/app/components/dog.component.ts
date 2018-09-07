import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoCat(){
    this.router.navigate(['/cat']);
  }
}
