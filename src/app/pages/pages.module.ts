import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';


import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.router';
import { ProductsComponent } from './products/products/products.component';
import { ProductCardComponent } from '../components/product-card/product-card/product-card.component';

@NgModule({
  declarations: [
    PagesComponent,
    AboutComponent,
    DashboardComponent,
    ProductsComponent,
    ProductCardComponent
  ],
  exports: [
    AboutComponent,
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],
})
export class PagesModule { }
