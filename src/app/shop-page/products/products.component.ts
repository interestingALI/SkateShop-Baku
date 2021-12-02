import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import {Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {


  productsList:Product[]=[]
  wishlist: number[]= []
  @Input() color = '';
  @Input() SortbyParam = '';
  @Input() SortDirection = 'asc';
  @Input() category = '';
  @Input() from= '';
  @Input() to = '';
  
  
  constructor(private wishlistService: WishlistService, private productService: ProductService, @Inject(DOCUMENT) private document: Document){}
  showSpinner:boolean = true;

//////////////////////////////  scroll to top  ///////////////////
  windowScrolled: boolean;
    @HostListener("window:scroll", [])
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        } 
        else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.scrollTo(0, 0);
        }
    }
//////////////////////////////////////////////////////////////////


  ngOnInit(): void {
    this.loadProducts()
    this.loadWishlist()
  }

  loadProducts(){
    this.productService.getProducts().subscribe((products) => {
      this.productsList = products;  
      this.showSpinner = false;
    })
  }

  loadWishlist(){
    this.wishlistService.getWishlist().subscribe(productIds => this.wishlist = productIds)
  }

  
}

