import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './customer/customer-registration/customer-registration.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found/page-not-found.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ViewCustomersComponent } from './admin/view-customers/view-customers.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'customer/login',component:CustomerLoginComponent},
  {path:'customer/register',component:CustomerRegistrationComponent},
  {path:'customer/dashboard',component:CustomerDashboardComponent},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'admin/dashboard',component:AdminDashboardComponent},
  {path:'admin/view-customers',component:ViewCustomersComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
