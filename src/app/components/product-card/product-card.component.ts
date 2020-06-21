import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styles: [
  ]
})
export class ProductCardComponent implements OnInit {
  @Input() inputProductDef = [];
  productDef = [];

  name: string;
  desc: string;
  price: string;
  constructor() { }

  ngOnInit(): void {
    this.productDef = this.inputProductDef;
    // console.log ('this.productDef');
    // console.log (this.productDef['name']);
  }

}
