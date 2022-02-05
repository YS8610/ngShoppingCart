import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartSvc:CartService) { }

  cart : {name:string, count:number}[] = []

  ngOnInit(): void {
    this.cart = this.cartSvc.cart;
  }

  onRemoveditem(item: string){
    // console.log(item);
    for (let i in this.cartSvc.cart){
      if (this.cartSvc.cart[i].name == item){
        this.cartSvc.cart[i].count=0;
      }
    }
  }
}
