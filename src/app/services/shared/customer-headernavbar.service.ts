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
}
