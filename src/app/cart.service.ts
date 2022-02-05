import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = [
    {name:"apple", count:0},
    {name:"orange", count:0},
    {name:"pear", count:0},
    {name:"durian", count:0},
    {name:"grape", count:0},
    {name:"watermelon", count:0}
  ];

  constructor() { }

  onAddedInven(newItem:string){
    for (let i in this.cart){
      if (this.cart[i].name == newItem){
        this.cart[i].count++;
        // console.log(this.cart[i].name + " " + this.cart[i].count);
      }
    }
  }

  onRemoveditem(item: string){
    // console.log(item);
    for (let i in this.cart){
      if (this.cart[i].name == item){
        this.cart[i].count=0;
      }
    }
  }

}
