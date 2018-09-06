import {NgModule} from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import {UsersComponent} from './users/users.component';
import {LoginComponent} from './login/login.component';
import {ListComponent} from './list/list.component';
import {ForgotComponent} from './forgot/forgot.component';

const routes:Routes=[
    {path:'login',component:UsersComponent},
    {path:'',component:UsersComponent},
    {path:'register', component:LoginComponent},
    {path:'list',component:ListComponent},
    {path:'Details',component:ForgotComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
export const routingComponents = [UsersComponent,LoginComponent,ListComponent]