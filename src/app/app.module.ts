import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from "./core/core.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseService } from './services/firebase.service';

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
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyAZSTvtlt-dPNHj9jlHwufFsVkYQRFiEdE",
    authDomain: "skateshopbaku.firebaseapp.com",
    projectId: "skateshopbaku",
    storageBucket: "skateshopbaku.appspot.com",
    messagingSenderId: "1043263125755",
    appId: "1:1043263125755:web:0584acbd8572b9fc1e585e"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
