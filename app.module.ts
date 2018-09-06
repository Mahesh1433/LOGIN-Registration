import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule,routingComponents} from './app-routing.module';

import { ShowHidePasswordModule } from 'ngx-show-hide-password';
//import { UsersComponent } from './users/users.component';
import { HttpModule } from '@angular/http';
import { ForgotComponent } from './forgot/forgot.component';

//import { LoginComponent } from './login/login.component';
//import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ForgotComponent,
    
    
  ],
  imports: [
    BrowserModule, FormsModule,HttpModule,RouterModule,AppRoutingModule, ShowHidePasswordModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
