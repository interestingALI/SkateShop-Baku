import { Injectable } from '@angular/core';
import { wishlistUrl } from '../config/api';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { account } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist(){
    return this.http.get(wishlistUrl).pipe(
      map(( result: any[]) => {
        let productIds = []
        if(result){
          Object.values(result).forEach(item => productIds.push(item.id))
        }
        return productIds
      })
    )
  }

  addToWishlist(productId){
    return this.http.post(wishlistUrl, { id: productId })
  }

  removeFromWishlist(productId){
    const wishlistRef = firebase.database().ref('/' + account[0] + '_user' + '/wishlist');
    

    const itemQuery = wishlistRef.orderByChild("id").equalTo(productId);

    let itemRef:any = ''
    itemQuery.get().then((snapshot) => {
      snapshot.forEach((productSnapshot) => {
        itemRef = firebase.database().ref('/' + account[0] + '_user' + '/wishlist' + '/' + productSnapshot.key);
      })
      itemRef.remove()
    })
  }
}
