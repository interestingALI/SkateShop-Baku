import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './shop-page.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { FiltersComponent } from './filters/filters.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from '../pipes/filter.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        ShopPageComponent,
        ProductsComponent,
        ProductItemComponent,
        FiltersComponent,
        CartComponent,
        CartItemComponent,
        LoadingSpinnerComponent,
        FilterPipe,
        SortPipe,
    ],
    imports: [
        CommonModule,
        SimpleNotificationsModule.forRoot(),
        BrowserAnimationsModule,
        NgbModule,
        FormsModule
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