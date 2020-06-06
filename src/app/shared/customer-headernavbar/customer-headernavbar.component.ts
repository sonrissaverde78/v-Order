import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-headernavbar',
  templateUrl: './customer-headernavbar.component.html',
  styles: [
  ]
})
export class CustomerHeadernavbarComponent implements OnInit {

  ShoppingCart: string = 'ShopingCart';
  constructor() { }

  ngOnInit(): void {
  }

}
