import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './customer/customer-registration/customer-registration.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'customer/login',component:CustomerLoginComponent},
  {path:'customer/register',component:CustomerRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
