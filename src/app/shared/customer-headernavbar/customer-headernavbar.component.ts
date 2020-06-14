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
  jsonMainMenuShop: any = [];
  prodMain  = {};

  constructor(public mainMenuService: CustomerHeadernavbarService) {
    this.menuMain = this.buildProductsMenu(this.mainMenuService.prodMain);
    this.shopName = this.mainMenuService.shopName;
  }

   getJSONTotalKeys(obj: any): number {
     return Object.getOwnPropertyNames(obj).length;
   }

   getJSONKeyString(obj: any, index: number): string {
     const totalFields: number = this.getJSONTotalKeys(obj);
     if ( index < totalFields ){
       const pp = Object.getOwnPropertyNames(obj)[index];
       return pp;
     }else {
       return null;
     }
   }

   buildProductsMenu(productos: string): any{
    const jsonCommerceIDlevel = JSON.parse(productos);
    const totalShops = this.getJSONTotalKeys(jsonCommerceIDlevel);
    const strCommerceId = this.getJSONKeyString(jsonCommerceIDlevel, 0);

    this.jsonMainMenuShop = jsonCommerceIDlevel[strCommerceId];
    const totalOptionsMainMenuShop = this.getJSONTotalKeys(this.jsonMainMenuShop);

    const shopMenuMain = [];
    for (let index0 = 0; index0 < totalOptionsMainMenuShop; index0++){
      const strMainMenuShopOptionId = this.getJSONKeyString(this.jsonMainMenuShop, index0);
      const jsonOptionIdProducts = this.jsonMainMenuShop[strMainMenuShopOptionId];

      const totalProducts = this.getJSONTotalKeys(jsonOptionIdProducts);
// temporal array to insert the key and value for icon and title for the option.
      const arrayLabelAndIconMenu = [];

      for (let index1 = 0; index1 < totalProducts; index1++){
        const strKeyId = this.getJSONKeyString(jsonOptionIdProducts, index1);
        const strKeyIdValue = jsonOptionIdProducts[strKeyId];
        if (strKeyId === 'title'){
          arrayLabelAndIconMenu[strKeyId] = strKeyIdValue;
        }
        if (strKeyId === 'icono'){
          arrayLabelAndIconMenu[strKeyId] = strKeyIdValue;
        }
      }

      shopMenuMain.push(arrayLabelAndIconMenu);
    }
    return shopMenuMain;
   }

  ngOnInit(): void {
    // console.log('ngOnInit_-_Starts');
    // console.log('ngOnInit: ' + this.mainMenuService.productsMainMenu[0].titulo );
  }

}
