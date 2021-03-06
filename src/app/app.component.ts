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
    {name:"grape", pic:"../assets/grape.png"},
    {name:"watermelon", pic:"../assets/watermelon.png"}
  ];

  cart:{name:string, count:number}[]=[];
  constructor(){
     for (let i of this.inventories){
      this.cart.push({name:i.name,count:0})
    }
  }

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
