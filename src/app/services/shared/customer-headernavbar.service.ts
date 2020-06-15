import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class CustomerHeadernavbarService {

    public prodMain: any = '{\
      "R5YbndlwaYYkbpeAHbqdLi0qJaS2":\
      {\
        "desserts":\
          {\
              "title": "Desserts",\
              "icono": "#cake",\
              "-M3fVZPWoSq7va0BwNJb":\
              {\
                  "description": "Description course 1",\
                  "image": "",\
                  "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "Dessert 1",\
                  "price": "10.00"\
              },\
              "-M3fV_2Fo-CPok-KNpWw": \
              {\
                  "description": "Description course 1",\
                  "image": "",\
                  "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "Dessert 2",\
                  "price": "10.00"\
              },\
              "-M3fVa9x7EjuIzR-IT59":\
              { \
                  "description": "Description course 1",\
                  "image": "",\
                  "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name":\
                  "Dessert 3",\
                  "price": "10.00"\
              }\
          },\
          "drinks":\
          {\
              "title": "Drinks",\
              "icono": "#wine",\
              "-M3fVVHXDdI49JdUvPDr":\
              {\
                  "description": "Description course 1",\
                  "image": "",\
                  "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "Drink 1",\
                  "price": "10.00"\
              },\
              "-M3fVWkEOHExsDtba21w":\
              {\
                  "description":\
                  "Description course 1",\
                  "image": "",\
                  "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "Drink 2",\
                  "price": "10.00"\
              },\
              "-M3fVXtArk39ZSDn3pbo":\
              {\
                  "description": "Description course 1",\
                  "image": "",\
                  "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "Drink 3",\
                  "price": "10.00"\
              }\
          },\
          "first_courses":\
          {\
            "title": "First Courses",\
            "icono": "#soup-1",\
            "-M3fRzrM9v57OT86wjAg":\
              {\
                  "description": "Description course 1",\
                  "image": "", "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "course 11",\
                  "price": "10.00"\
              },\
              "-M3fTOQSQFcn3h_UhmzO":\
              {\
                  "description": "Description course 1",\
                  "image": "",\
                  "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "course 1",\
                  "price": "10.00"\
              },\
              "-M3fTPgrhe_mKgZE6hQG":\
              {\
                  "description": "Description course 1",\
                  "image": "",\
                  "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "course 2",\
                  "price": "10.00"\
              },\
              "-M3fTQTY4ZwIeSXsFH7s":\
              {\
                  "description": "Description course 1",\
                  "image": "", "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "course 3",\
                  "price": "10.00"\
              },\
              "-M3fTRGS7rq-7dSJwlWQ":\
              {\
                  "description": "Description course 1",\
                  "image": "",\
                  "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "course 4",\
                  "price": "10.00"\
              }\
          },\
          "second_courses":\
          {\
            "title": "Second Courses",\
            "icono": "#restaurant",\
            "-M3fVPu36ebUfKaaj1Px":\
              {\
                  "description": "Description course 1",\
                  "image": "",\
                  "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "Second 1",\
                  "price": "10.00"\
              },\
              "-M3fVQyhaBTN4ANDqSuu":\
              {\
                  "description": "Description course 1",\
                  "image": "",\
                  "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "Second 2",\
                  "price": "10.00"\
              },\
              "-M3fVSON4kI4HXYVm83u":\
              {\
                  "description": "Description course 1",\
                  "image": "", "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "Second 3",\
                  "price": "10.00"\
                  }\
              },\
          "starters":\
          {\
            "title": "Starters",\
            "icono": "#starter",\
            "-M3fVImUit2tYsKnqq3d":\
              {\
                  "description": "Description course 1", \
                  "image": "", \
                  "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "Starter 0",\
                  "price": "10.00"\
              },\
              "-M3fVJdx0Yu9z91jCYVb":\
              {\
                  "description": "Description course 1", \
                  "image": "",\
                  "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "Starter 2",\
                  "price": "10.00"\
              },\
              "-M3fVN7jNbSiosY8j0ko":\
              {\
                  "description": "Description course 1", \
                  "image": "", "ingredients": [ "Ingrediente 1", "Ingrediente 2" ],\
                  "name": "Starter 3",\
                  "price": "10.00"\
              }\
          }\
      }\
  }';
    shopName: string = 'Restauranti I';
    shopMenuMain = [];
    /*
    productsMainMenu: any = [
      {
        titulo: 'Restaurant Test',
        icono: 'mdi mdi-gauge',
        submenu: [
          { titulo: 'Starters', url: '/starters'},
          { titulo: 'First Courses', url: '/firsts'},
          { titulo: 'SecondCourses', url: '/seconds'},
          { titulo: 'Desserts', url: '/desserts'},
          { titulo: 'Drinks', url: 'drinks'}
        ]
      }
    ];
    */

    constructor() {
        // this.buildProductsMenu(this.productos);

    }

    getJSONTotalKeys(obj: any): number {
        return Object.getOwnPropertyNames(obj).length;
    }

    getJSONKeyString(obj: any, index: number): string {
        const totalFields: number = this.getJSONTotalKeys(obj);
        if (index < totalFields) {
            const pp = Object.getOwnPropertyNames(obj)[index];
            return pp;
        } else {
            return null;
        }
    }

    buildMainMenu(): any {
        const jsonCommerceIDlevel = JSON.parse(this.prodMain);
        const totalShops = this.getJSONTotalKeys(jsonCommerceIDlevel);
        const strCommerceId = this.getJSONKeyString(jsonCommerceIDlevel, 0);

        const jsonMainMenuShop = jsonCommerceIDlevel[strCommerceId];
        const totalOptionsMainMenuShop = this.getJSONTotalKeys(jsonMainMenuShop);


        for (let index0 = 0; index0 < totalOptionsMainMenuShop; index0++) {
            const strMainMenuShopOptionId = this.getJSONKeyString(jsonMainMenuShop, index0);
            const jsonOptionIdProducts = jsonMainMenuShop[strMainMenuShopOptionId];

            const totalProducts = this.getJSONTotalKeys(jsonOptionIdProducts);
            // temporal array to insert the key and value for icon and title for the option.
            const arrayLabelAndIconMenu = [];
            const arrayAux = [];
            for (let index1 = 0; index1 < totalProducts; index1++) {
                const strKeyId = this.getJSONKeyString(jsonOptionIdProducts, index1);
                const strKeyIdValue = jsonOptionIdProducts[strKeyId];
                if (strKeyId === 'title'){
                      arrayLabelAndIconMenu[strKeyId] = strKeyIdValue;
                } else if (strKeyId === 'icono'){
                        arrayLabelAndIconMenu[strKeyId] = strKeyIdValue;
                } else {
                    const totalKeysForProduct = this.getJSONTotalKeys(jsonOptionIdProducts[strKeyId]);
                    const jsonProductDefinition = jsonOptionIdProducts[strKeyId];
                    const arrayProductDefinition = [];
                    for (let i3 = 0; i3 < totalKeysForProduct; i3++){
                        const strKeyId3 = this.getJSONKeyString(jsonProductDefinition, i3);
                        // console.log ('strKeyId3 ' + strKeyId3 );
                        const strKeyIdValue3 = jsonProductDefinition[strKeyId3];
                        // console.log ('strKeyIdValue3 ' + strKeyIdValue3 );
                        arrayProductDefinition[strKeyId3] = strKeyIdValue3;

                    }
                    console.log (arrayProductDefinition);
                    console.log ('*******************************');
                    arrayAux.push(arrayProductDefinition);
                    arrayLabelAndIconMenu['productsList'] = arrayAux;
                   }
            }

            this.shopMenuMain.push(arrayLabelAndIconMenu);
        }
        console.log ('shopMenuMain');
        //console.log (this.shopMenuMain);
        this.getProductsMenu('Desserts');
        return this.shopMenuMain;
    }
    getProductsMenu( strOption: string ): [] {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.shopMenuMain.length; i++){
            if (strOption === this.shopMenuMain[i].title){
                console.log (this.shopMenuMain[i]['productsList']);
                return this.shopMenuMain[i]['productsList'];
            }
        }

    }

}
