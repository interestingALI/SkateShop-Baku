import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = []

  cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) =>{
      this.addProductToCart(product)
    })
  }

  execOnRemove(itemRemoved) {
    itemRemoved.qty -= 1
    if (itemRemoved.qty == 0) {
      this.cartItems.splice(this.cartItems.indexOf(itemRemoved), 1);
    }
    this.calcTotal()
  }

  calcTotal(){
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  addProductToCart(product: Product){
    let productExists = false


    for(let i in this.cartItems){
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }


    if (!productExists) {
      this.cartItems.push({
        productId:product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }

    this.calcTotal()
  }

  

}
