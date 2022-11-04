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
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { ViewEmployeesComponent } from './admin/view-employees/view-employees.component';
import { AddInsuranceTypeComponent } from './admin/add-insurance-type/add-insurance-type.component';
import { ViewInsuranceSchemesComponent } from './admin/view-insurance-schemes/view-insurance-schemes.component';
import { AddInsuranceSchemeComponent } from './admin/add-insurance-scheme/add-insurance-scheme.component';
import { AddInsurancePlanComponent } from './admin/add-insurance-plan/add-insurance-plan.component';
import { AddTaxSettingComponent } from './admin/add-tax-setting/add-tax-setting.component';
import { AgentLoginComponent } from './agent/agent-login/agent-login.component';
import { AgentDashboardComponent } from './agent/agent-dashboard/agent-dashboard.component';
import { AddCustomerComponent } from './agent/add-customer/add-customer.component';
import { ViewInsurancePlansComponent } from './customer/view-insurance-plans/view-insurance-plans.component';
import { ViewMorePlanComponent } from './customer/view-more-plan/view-more-plan.component';
import { CustomerInsuranceAccountComponent } from './customer/customer-insurance-account/customer-insurance-account.component';
import { CustomerViewMoreInsuranceAccountComponent } from './customer/customer-view-more-insurance-account/customer-view-more-insurance-account.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { ViewCommisionComponent } from './agent/view-commision/view-commision.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'customer/login',component:CustomerLoginComponent},
  {path:'customer/register',component:CustomerRegistrationComponent},
  {path:'customer/dashboard',component:CustomerDashboardComponent},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'admin/dashboard',component:AdminDashboardComponent},
  {path:'admin/view-customers',component:ViewCustomersComponent},
  {path:'admin/add-employee',component:AddEmployeeComponent},
  {path:'admin/view-employees',component:ViewEmployeesComponent},
  {path:'admin/add-insurance-type',component:AddInsuranceTypeComponent},
   {path:'admin/view-insurance-schemes',component:ViewInsuranceSchemesComponent},
   {path:'admin/add-insurance-scheme',component:AddInsuranceSchemeComponent},
   {path:'admin/add-insurance-plan',component:AddInsurancePlanComponent},
   {path:'admin/add-insurance-setting',component:AddTaxSettingComponent},
   {path:'agent/login',component:AgentLoginComponent},
   {path:'agent/dashboard',component:AgentDashboardComponent},
   {path:'agent/add-customer/:id',component:AddCustomerComponent},
   {path:'customer/view-insurance-plans',component:ViewInsurancePlansComponent},
   {path:'customer/view-more-plan',component:ViewMorePlanComponent},
   {path:'customer/view-insurance-account',component:CustomerInsuranceAccountComponent},
   {path:'customer/view-more-insurance-account/:id',component:CustomerViewMoreInsuranceAccountComponent},
   {path:'employee/login',component:EmployeeLoginComponent},
   {path:'agent/view-commision',component:ViewCommisionComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
