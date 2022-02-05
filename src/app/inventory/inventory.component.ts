import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  cart : {name:string, count:number}[] = []

  constructor(private cartSvc:CartService) { }

  ngOnInit(): void {
    this.cart = this.cartSvc.cart;
  }

  onAddedInven(newItem:string){
    for (let i in this.cartSvc.cart){
      if (this.cartSvc.cart[i].name == newItem){
        this.cartSvc.cart[i].count++;
        // console.log(this.cart[i].name + " " + this.cart[i].count);
      }
    }
  }
}
