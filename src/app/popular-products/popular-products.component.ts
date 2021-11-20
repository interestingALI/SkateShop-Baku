import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.scss']
})
export class PopularProductsComponent implements OnInit {

  productsList:Product[]=[]

  
  constructor(private productService: ProductService){}


  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productsList = products;  
    })
  }

}
