import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = []

  cartTotal = 0

  constructor(private msg: MessengerService, private cartService: CartService) { }

  ngOnInit(): void {
    this.handleSubscription()
    this.loadCartItems()
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product: Product) =>{
      this.loadCartItems()
    })
  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items:CartItem[]) => {
      this.cartItems = this.savedItems ? this.savedItems : items;
      this.calcTotal()
    })
    this.savedItems = false
  }

  savedItems:any = false;
  execOnRemove(itemRemoved) {

    this.cartService.getCartItems().subscribe((items:CartItem[]) => {
      
      for (let products of this.cartItems) {
        if (products.id == itemRemoved.id) {
          products.qty -= 1
        }

        if (products.qty == 0) {
          this.cartItems.splice(this.cartItems.indexOf(products), 1);
        }

      }
      
      this.savedItems = this.cartItems
      this.calcTotal()

    })
  }



  

  calcTotal(){
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
