import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    


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

}
