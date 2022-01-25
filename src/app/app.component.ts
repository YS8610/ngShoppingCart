import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularShoppingCart';

  inventories = [
    {name:"apple", pic:"../assets/apple.png"},
    {name:"orange", pic:"../assets/orange.png"},
    {name:"pear", pic:"../assets/pear.png"},
    {name:"durian", pic:"../assets/durian.png"},
    {name:"grape", pic:"../assets/grape.png"}
  ];

  cart = [
    {name:"apple",count:0},
    {name:"orange",count:0},
    {name:"pear",count:0},
    {name:"durian",count:0},
    {name:"grape",count:0}
  ];

  onAddedInven(newItem:string){
    for (let i in this.cart){
      if (this.cart[i].name == newItem){
        this.cart[i].count++;
        console.log(this.cart[i].name + " " + this.cart[i].count);
      }
    }
  }

  onRemoveditem(item:any){
    console.log(item);
  }


  apple = this.cart[0];
  orange = this.cart[1];
  pear = this.cart[2];
  durian = this.cart[3];
  grape = this.cart[4];
}
