import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { MessengerService } from 'src/app/services/messenger.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = []

  cartTotal = 0

  constructor(private msg: MessengerService, private cartService: CartService, private http: HttpClient, private modalService: NgbModal) { }
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
    console.log()
    this.cartService.getCartItems().subscribe((items:CartItem[]) => {
      this.cartItems = items;
      this.calcTotal()
    })
  }

  clearCart(){
    this.cartService.getCartItems().subscribe((items:CartItem[]) => {
      this.cartItems = [];
    })
    this.cartService.clearCart()
  }

  removeFromCart(itemRemoved){
    this.cartService.getCartItems().subscribe((items:CartItem[]) => {
      for (let i of items) {
        if (i.id == itemRemoved.id) {
          i.qty--
          if (i.qty == 0) {
            items.splice(items.indexOf(i), 1)
          }
          this.cartItems = items;
          this.calcTotal();
          break;
        }
      }
    })

    this.cartService.removeFromCart(itemRemoved)
  }

  calcTotal(){
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
