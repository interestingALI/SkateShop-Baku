import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../models/cart-item';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]>{

    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result:any[]) => {
        let cartItems: CartItem[] = []

        if(result){
          for(let item of Object.values(result)){
            let productExists = false
            for(let i in cartItems){
              if (cartItems[i].id === item.product.id) {
                cartItems[i].qty++
                productExists = true
                break;
              }
            }
            if (!productExists) {
              cartItems.push(new CartItem(item.id, item.product))
            }
          }
        } else {
          cartItems = []
        }
        return cartItems
      })
    );
  }



  addProductToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl, { product });
  }

  removeFromCart(itemRemoved){

    let account = JSON.parse(localStorage.getItem('user')) === null ? '' : JSON.parse(localStorage.getItem('user')).email
    account == '' ?  account = ['_default', ''] : account = /([^@]+)/.exec(account)

    const cartRef = firebase.database().ref('/' + account[0] + '_user' + '/cart');
    

    const itemQuery = cartRef.orderByChild("product/id").equalTo(itemRemoved.id);

    let itemRef:any = ''
    itemQuery.get().then((snapshot) => {
      snapshot.forEach((productSnapshot) => {
        itemRef = firebase.database().ref('/' + account[0] + '_user' + '/cart' + '/' + productSnapshot.key);
      })
      itemRef.remove()
    })

  }

  clearCart(){

    let account = JSON.parse(localStorage.getItem('user')) === null ? '' : JSON.parse(localStorage.getItem('user')).email
    account == '' ?  account = ['_default', ''] : account = /([^@]+)/.exec(account)

    let adaRef = firebase.database().ref('/' + account[0] + '_user' + '/cart');

    return adaRef.remove()

  }
}
