import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})

export class ShopPageComponent implements OnInit {

  color=''
  SortbyParam=''
  SortDirection='asc'
  category=''

  constructor() { }
  
  isMobileLayout = window.innerWidth <= 768;
  ngOnInit(): void {
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 768;
  }

  onSortDirection(){
    if(this.SortDirection == 'desc'){
      this.SortDirection = 'asc'
    } else {
      this.SortDirection = 'desc'
    }
  }

  filterByColor(color){
    this.color = color;
  }

  filterByCategory(category){
    this.category = category;
  }
  
}
