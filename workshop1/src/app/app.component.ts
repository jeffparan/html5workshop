import { Component } from '@angular/core';
import { LineItem } from './model';

export { LineItem } from './model';

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

  deleteTheImage(index: number) {
    //deleteTheImage(index: number) {
      //console.log("app.component: deleting the image", data);
      console.log("app.component: deleting the image", index);
      this.cart.splice(index, 1);      
    }

}
