import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { MessengerService } from 'src/app/services/messenger.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreditCardValidators } from 'angular-cc-library';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = []

  cartTotal = 0

  constructor(private msg: MessengerService, private cartService: CartService, private http: HttpClient, private modalService: NgbModal, private _fb: FormBuilder) { }
  ngOnInit(): void {
    this.handleSubscription()
    this.loadCartItems()
    ////
    this.form = this._fb.group({
      creditCard: ['', [CreditCardValidators.validateCCNumber]],
      expirationDate: ['', [CreditCardValidators.validateExpDate]],
      cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]] 
    });
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

  //////////////////////////////////

  form: FormGroup;
  submitted: boolean = false;

}
