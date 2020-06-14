import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';


import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.router';


@NgModule({
  declarations: [
    PagesComponent,
    AboutComponent,
    DashboardComponent
  ],
  exports: [
    AboutComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],
})
export class PagesModule { }
