import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { NotificationsService } from 'angular2-notifications';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;
  @Input() addedToWishlist: boolean;

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private service: NotificationsService,
    private modalService: NgbModal,
    private wishlistService: WishlistService
  ) { }

  onSuccess(message){
    this.service.success('Success', message, {
      position: ['bottom', 'right'],
      timeOut: 1500,
      animate: 'fade',
      showProgressBar: true,
      clickToClose: true
    });
  }
  Info(message){
    this.service.info('Item Removed', message, {
      position: ['bottom', 'right'],
      timeOut: 1500,
      animate: 'fade',
      showProgressBar: true,
      clickToClose: true
    });
  }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }

  handleAddToWishlist(){
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = true
    })
  }


  handleRemoveFromWishlist(){
    this.wishlistService.removeFromWishlist(this.productItem.id)
    this.addedToWishlist = false
  }

  open(content) {
    this.modalService.open(content, { windowClass : "ModalClassDetails"});
  }

}
