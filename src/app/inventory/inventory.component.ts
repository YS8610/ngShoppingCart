import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Input() inven !: {name : string, pic : string };
  @Output() onInvenAdd = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    this.onInvenAdd.emit(this.inven.name);
  }
}
