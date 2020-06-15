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
            { path: 'dashboard', component: DashboardComponent },
            { path: 'about', component: AboutComponent },
            { path: 'prods', component: ProductsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild ( pagesRoutes );
