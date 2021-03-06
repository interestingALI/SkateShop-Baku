import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from "./core/core.module";
import { ShopPageModule } from './shop-page/shop-page.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseService } from './services/firebase.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    PagenotfoundComponent,
    PopularProductsComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    ShopPageModule,
    ReactiveFormsModule,
    FormsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyAZSTvtlt-dPNHj9jlHwufFsVkYQRFiEdE",
    authDomain: "skateshopbaku.firebaseapp.com",
    projectId: "skateshopbaku",
    storageBucket: "skateshopbaku.appspot.com",
    messagingSenderId: "1043263125755",
    appId: "1:1043263125755:web:0584acbd8572b9fc1e585e",
    databaseURL: "https://skateshopbaku-default-rtdb.europe-west1.firebasedatabase.app"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
