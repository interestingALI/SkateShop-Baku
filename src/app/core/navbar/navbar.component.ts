import { Component, OnInit, Output } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {

  isSignedIn = false;
  account = JSON.parse(localStorage.getItem('user')).email
  
  

  loginForm = new FormGroup({
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  })
  signupForm = new FormGroup({
    passwordsU: new FormControl('', Validators.required),
    emailsU: new FormControl('', Validators.required),
  })

  get password(){ return this.loginForm.get('password')}
  get email(){ return this.loginForm.get('email')}
  get passwordsU(){ return this.signupForm.get('passwordsU')}
  get emailsU(){ return this.signupForm.get('emailsU')}



  constructor(private modalService: NgbModal, public firebaseService:FirebaseService) {   
    // burger menu
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
      } else {
        if (!document.getElementById("menu-btn")["checked"]) {
          document.getElementById("header").style.top = '-' + document.getElementById("header").clientHeight + 'px';
        }
        
      }
      prevScrollpos = currentScrollPos;
    }
  }


  ngOnInit(): void {
    console.log(localStorage.getItem('user'))
    if (localStorage.getItem('user')!==null) 
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }

  async onSignup(email:string, password:string){
    await this.firebaseService.signup(email,password)
    if (this.firebaseService.isLoggedIn) 
      this.isSignedIn = true
      this.modalService.dismissAll()
  }
  async onSignin(email:string, password:string){
    await this.firebaseService.signin(email,password)
    if (this.firebaseService.isLoggedIn) 
      this.isSignedIn = true
      this.modalService.dismissAll()
  }


  logout(){
    this.firebaseService.logout()
    this.isSignedIn = false
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }


}
