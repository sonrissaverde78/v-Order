import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServicesModule } from './services/services.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { APP_ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
