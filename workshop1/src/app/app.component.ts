import { Component } from '@angular/core';
import { LineItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cart: LineItem[] = [];

  processLineItem(LineItem: LineItem){
    this.cart.push(LineItem);
    console.log("cart = ", this.cart);
  }
}
