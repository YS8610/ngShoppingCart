import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() cartAdded !:{name:string, count:number};
  @Output() onRemove = new EventEmitter<string>();


  removeItem(){
    this.onRemove.emit(this.cartAdded.name);
    // console.log(this.cartAdded.name + " is selected for removal")
  }
}
