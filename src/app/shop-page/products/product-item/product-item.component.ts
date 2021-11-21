import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private service: NotificationsService
  ) { }

  onSuccess(message){
    this.service.success('Success', message, {
      position: ['bottom', 'right'],
      timeOut: 2000,
      animate: 'fade',
      showProgressBar: true
    });
  }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }

}
