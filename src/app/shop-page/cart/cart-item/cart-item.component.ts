import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem:any
  @Output() onRemove = new EventEmitter();


  ngOnInit(): void {
  }

  removeProductFromCart(theItem){
    this.onRemove.emit(theItem);
  }

  

}
