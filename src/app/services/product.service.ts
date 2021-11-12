import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product 1', 'A neat description for item! Very nice. Very nice.', 100),
    new Product(2, 'Product 2', 'A neat description for item! Very nice. Very nice.', 200),
    new Product(3, 'Product 3', 'A neat description for item! Very nice. Very nice.', 50),
    new Product(4, 'Product 4', 'A neat description for item! Very nice. Very nice.', 120),
    new Product(5, 'Product 5', 'A neat description for item! Very nice. Very nice.', 30),
    new Product(6, 'Product 6', 'A neat description for item! Very nice. Very nice.'),
    new Product(7, 'Product 7', 'A neat description for item! Very nice. Very nice.', 20),
    new Product(8, 'Product 8', 'A neat description for item! Very nice. Very nice.', 60),
  ]

  constructor() { }

  getProducts():Product[]{
    return this.products
  }
}
