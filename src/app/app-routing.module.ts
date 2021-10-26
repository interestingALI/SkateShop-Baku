import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ContactComponent } from "./Contact/contact.component";
// import { AboutUsComponent } from "./AboutUs/aboutus.component";
// import { HomeComponent } from "./Home/home.component";

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'Contact',
  //   component: ContactComponent
  // },
  // {
  //   path: 'AboutUs',
  //   component: AboutUsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
