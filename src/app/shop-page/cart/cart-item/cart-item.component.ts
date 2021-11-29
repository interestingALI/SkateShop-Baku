import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem:any
  @Output() removeTheItem = new EventEmitter<any>();
  cartItems: any[];
  
  

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }


  removeFromCart(cartItem){

    this.removeTheItem.emit(cartItem)

  }


}
