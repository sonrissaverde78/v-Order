import { Component, OnInit } from '@angular/core';
import { CustomerHeadernavbarService } from 'src/app/services/shared/customer-headernavbar.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styles: [
  ]
})
export class ProductlistComponent implements OnInit {

  productList  = [];
  productListName: string = 'initMePlease';
  constructor(public mainMenuService: CustomerHeadernavbarService) {
    if (this.mainMenuService.getCurrentProductList() === 'initPlease'){
      this.mainMenuService.setProduclistTo('Desserts');
      this.productListName = 'Sugerncias';
      this.productList  = this.mainMenuService.getProductsMenu ();
    } else {
      this.productListName = this.mainMenuService.getCurrentProductList();
      this.productList  = this.mainMenuService.getProductsMenu ();
    }
   }


  ngOnInit(): void {
  }

}
