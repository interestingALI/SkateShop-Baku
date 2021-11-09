import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {

  loginForm = new FormGroup({
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required)
  })

  get password(){ return this.loginForm.get('password')}
  get email(){ return this.loginForm.get('email')}
  get name(){ return this.loginForm.get('name')}


  constructor(private modalService: NgbModal) {   
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


  ngOnInit(): void {}


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }


}
