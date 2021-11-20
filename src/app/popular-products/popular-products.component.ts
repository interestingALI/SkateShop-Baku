import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.scss']
})
export class PopularProductsComponent implements OnInit {

  popularList:Product[]=[]

  
  constructor(private productService: ProductService){}


  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.popularList =[ products[2], products[5], products[11], ]
    })
  }

}
