import { Component, OnInit } from '@angular/core';
import { CustomerHeadernavbarService } from '../../services/shared/customer-headernavbar.service';

@Component({
  selector: 'app-customer-headernavbar',
  templateUrl: './customer-headernavbar.component.html',
  styles: [
  ]
})
export class CustomerHeadernavbarComponent implements OnInit {

  ShoppingCart: string = 'ShopingCart';
  menuMain = [];

  shopName: string = 'ShopName';



  constructor(public mainMenuService: CustomerHeadernavbarService) {
    this.menuMain = this.mainMenuService.buildMainMenu();
    this.shopName = this.mainMenuService.shopName;
  }


  ngOnInit(): void {
    // console.log('ngOnInit_-_Starts');
    // console.log('ngOnInit: ' + this.mainMenuService.productsMainMenu[0].titulo );
  }

}
