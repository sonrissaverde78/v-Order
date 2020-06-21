import { Component, OnInit } from '@angular/core';
import { CustomerHeadernavbarService } from '../../services/shared/customer-headernavbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-headernavbar',
  templateUrl: './customer-headernavbar.component.html',
  styles: [
  ]
})
export class CustomerHeadernavbarComponent implements OnInit {

  reloadPage: boolean = true;
  ShoppingCart: string = 'ShopingCart';
  menuMain = [];

  shopName: string = 'ShopName';



  constructor(public mainMenuService: CustomerHeadernavbarService, public navigator: Router) {
    this.menuMain = this.mainMenuService.buildMainMenu();
    this.shopName = this.mainMenuService.shopName;
  }

  optionSelected(option: string){

    this.mainMenuService.setProduclistTo(option);
    if ((this.reloadPage) === true){
      this.navigator.navigate(['/prodsB']);
      this.reloadPage = false;
    }else{
      this.navigator.navigate(['/prodsA']);
      this.reloadPage = true;
    }

    //   .then(() => {
    //   window.location.reload();
    // });
  }
  ngOnInit(): void {
    // console.log('ngOnInit_-_Starts');
    // console.log('ngOnInit: ' + this.mainMenuService.productsMainMenu[0].titulo );
  }

}
