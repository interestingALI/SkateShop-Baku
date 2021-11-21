import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './shop-page.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { FiltersComponent } from './filters/filters.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        ShopPageComponent,
        ProductsComponent,
        ProductItemComponent,
        FiltersComponent,
        CartComponent,
        CartItemComponent,
        LoadingSpinnerComponent
    ],
    imports: [
        CommonModule,
        SimpleNotificationsModule.forRoot(),
        BrowserAnimationsModule
    ],
    exports: [
        ShopPageComponent,
        ProductsComponent,
        ProductItemComponent,
        FiltersComponent,
        CartComponent,
        CartItemComponent
    ]
})
export class ShopPageModule { }