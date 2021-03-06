import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './shop-page.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from '../pipes/filter.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PriceFilterPipe } from '../pipes/price-filter.pipe';

import { NgxImageZoomModule } from 'ngx-image-zoom';
import { BrowserModule } from '@angular/platform-browser';
import { CreditCardDirectivesModule } from 'angular-cc-library';




@NgModule({
    declarations: [
        ShopPageComponent,
        ProductsComponent,
        ProductItemComponent,
        CartComponent,
        CartItemComponent,
        LoadingSpinnerComponent,
        FilterPipe,
        SortPipe,
        PriceFilterPipe
    ],
    imports: [
        CommonModule,
        SimpleNotificationsModule.forRoot(),
        BrowserAnimationsModule,
        NgbModule,
        BrowserModule,
        FormsModule, 
        CreditCardDirectivesModule,
        NgxImageZoomModule,
        ReactiveFormsModule
    ],
    exports: [
        ShopPageComponent,
        ProductsComponent,
        ProductItemComponent,
        CartComponent,
        CartItemComponent
    ]
})
export class ShopPageModule { }