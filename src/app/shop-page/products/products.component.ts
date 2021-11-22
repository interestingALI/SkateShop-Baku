import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  productsList:Product[]=[]
  @Input() color = '';
  @Input() SortbyParam = '';
  @Input() SortDirection = 'asc';
  @Input() property = "";
  
  
  constructor(private productService: ProductService){}
  showSpinner:boolean = true;

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productsList = products;  
      this.showSpinner = false;
    })
  }

}

