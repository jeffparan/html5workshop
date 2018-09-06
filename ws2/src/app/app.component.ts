import { Component, OnInit } from '@angular/core';
import { Address } from './model';
import { AddressService } from './address.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  
  private tabs = [
  { label : 'A - E', pattern: /^[a-e].*/i },
    { label : 'F - J', pattern: /^[f-j].*/i },
    { label : 'K - O', pattern: /^[k-o].*/i },
    { label : 'P - T', pattern: /^[p-t].*/i },
    { label : 'U - Z', pattern: /^[u-z].*/i }
  ];

  adds: Address[] = [];

  //private addressSvc: AddressService;
  
  constructor(private addressSvc: AddressService) {
    
  }

  ngOnInit(){
    this.adds = [];
      
    this.addressSvc.findAddress(this.tabs[0].pattern)
    .then(addr => {
      console.log('', addr);
        for (let a of addr)
          this.adds.push({
            name: a.name,
            address: a.address,
            phone: a.phone,
            email: a.email
          })        
    })
    .catch(err => {
      console.error()
    })      
  }

  processAddress(address: Address){
    console.log('address --- >>> ', address);
    this.addressSvc.addNewAddress(address)
    .then(result => {
      console.log("saved: ", result);      
    })
    .catch(err => {
      console.error('err: ', err);
    })
  }

  loadAddress(event: MatTabChangeEvent){
    const patt = this.tabs[event.index].pattern;
    //console.log('tab change : ', this.tabs[event.index].pattern);
    console.log('tab change : ', patt, typeof(patt));
    
    // show in mat list
    this.adds = [];

    this.addressSvc.findAddress(patt)
    .then(addr => {
      console.log('', addr);
        for (let a of addr)
          this.adds.push({
            name: a.name,
            address: a.address,
            phone: a.phone,
            email: a.email
          })
    })

    .catch(err => {
      console.error()
    })
    // show in mat list
  }

}
