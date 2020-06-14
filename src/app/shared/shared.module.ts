import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { CompanybarheaderComponent } from './companybarheader/companybarheader.component';
import { CustomerHeadernavbarComponent } from './customer-headernavbar/customer-headernavbar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    BreadcrumsComponent,
    CompanybarheaderComponent,
    CustomerHeadernavbarComponent,
    NopagefoundComponent,
    SidebarComponent
],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumsComponent,
    CompanybarheaderComponent,
    CustomerHeadernavbarComponent,
    NopagefoundComponent,
    SidebarComponent
  ],
})
export class SharedModule { }
