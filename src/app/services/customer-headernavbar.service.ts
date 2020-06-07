import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerHeadernavbarService {

  customerProductsMenu: any = [
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
  constructor() { }
}
