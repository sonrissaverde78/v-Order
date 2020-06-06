import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  shopSelection: string = 'Shop Selection';
  mainProducts: string = 'Main Products';
  constructor() { }

  ngOnInit(): void {
  }

}
