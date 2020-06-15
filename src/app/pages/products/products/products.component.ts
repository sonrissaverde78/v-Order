import { Component, OnInit } from '@angular/core';
import { CustomerHeadernavbarService } from '../../../services/shared/customer-headernavbar.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  productList  = [];
  constructor(public mainMenuService: CustomerHeadernavbarService) {
    this.productList  = this.mainMenuService.getProductsMenu ('Desserts');
   }

  

  ngOnInit(): void {

  }

}
