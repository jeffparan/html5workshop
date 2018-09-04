import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LineItem } from '../model';

interface Fruit{
  image: string;
  label: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  fruitList: Fruit[] = [
    {image: "assets/fruits/acorn_squash.png", label: "Acorn Squash"},
    {image: "assets/fruits/apple.png", label: "Apple"},
    {image: "assets/fruits/carrot.png", label: "Carrot"},
    {image: "assets/fruits/lettuce.png", label: "Lettuce"}
  ]

  fruitImg = "";
  selectedFruit = "";

  @Output()
  newLineItem = new EventEmitter<LineItem> ();

  constructor() { }

  ngOnInit() {
  }

  displayFruit(event: any){
  console.log(event.target.value);
    this.fruitImg = this.fruitList[event.target.value].image;
    this.selectedFruit = this.fruitList[event.target.value].label;
  }

  add(form: NgForm){
    console.log("form: ", form.value);

    const lineItem: LineItem = {
      label: this.selectedFruit,
      quantity: form.value.quantity
    };

    this.newLineItem.next(lineItem);

    form.resetForm;
    this.selectedFruit = "";
    this.fruitImg = ""
  

  }


}
