import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products/products.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: ProductsComponent }, //DashboardComponent },
            { path: 'about', component: AboutComponent },
            { path: 'prodsA', component: ProductsComponent },
            { path: 'prodsB', component: ProductsComponent },
            { path: '', redirectTo: '/prodsA', pathMatch: 'full'},
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild ( pagesRoutes );
