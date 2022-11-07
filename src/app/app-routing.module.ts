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

import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { ShowInsurancePlansComponent } from './home/show-insurance-plans/show-insurance-plans.component';
import { HomeViewMorePlanComponent } from './home/home-view-more-plan/home-view-more-plan.component';
import { AddAgentComponent } from './employee/add-agent/add-agent.component';
import { SendMailtoCustomerComponent } from './agent/send-mailto-customer/send-mailto-customer.component';

import { AboutComponent } from './home/about/about.component';
import { AgentProfileComponent } from './agent/agent-profile/agent-profile.component';
import { AgentChangePasswordComponent } from './agent/agent-change-password/agent-change-password.component';
import { AgentViewCustomersComponent } from './agent/agent-view-customers/agent-view-customers.component';
import { AdminViewAgentsComponent } from './admin/admin-view-agents/admin-view-agents.component';
import { AdminViewCommisionComponent } from './admin/admin-view-commision/admin-view-commision.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminChangePasswordComponent } from './admin/admin-change-password/admin-change-password.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { WithdrawAmountComponent } from './agent/withdraw-amount/withdraw-amount.component';
import { AgentViewPolicyPaymentsComponent } from './agent/agent-view-policy-payments/agent-view-policy-payments.component';
import { EmployeeViewAgentsComponent } from './employee/employee-view-agents/employee-view-agents.component';
import { ViewCommisionEmployeeComponent } from './employee/view-commision-employee/view-commision-employee.component';
import { ViewPolicyPaymentsEmployeeComponent } from './employee/view-policy-payments-employee/view-policy-payments-employee.component';
import { ViewSchemesEmployeeComponent } from './employee/view-schemes-employee/view-schemes-employee.component';
import { ViewPolicyPaymentsAdminComponent } from './admin/view-policy-payments-admin/view-policy-payments-admin.component';
import { ChangePasswordCustomerComponent } from './customer/change-password-customer/change-password-customer.component';
import { ViewCustomersEmployeeComponent } from './employee/view-customers-employee/view-customers-employee.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { ChangePasswordEmployeeComponent } from './employee/change-password-employee/change-password-employee.component';
import { ViewCommisionWithdrawlsEmployeeComponent } from './employee/view-commision-withdrawls-employee/view-commision-withdrawls-employee.component';
import { ViewCommisionWithdrawlsAdminComponent } from './admin/view-commision-withdrawls-admin/view-commision-withdrawls-admin.component';
import { UploadDocumentsComponent } from './customer/upload-documents/upload-documents.component';
import { AdminGuardService } from './admin/admin-guard.service';
import { AgentGuardService } from './agent/agent-guard.service';
import { CustomerGuardService } from './customer/customer-guard.service';
import { EmployeeGuardService } from './employee/employee-guard.service';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'customer/login',component:CustomerLoginComponent},
  {path:'customer/register',component:CustomerRegistrationComponent,canActivate:[CustomerGuardService]},
  {path:'customer/dashboard',component:CustomerDashboardComponent,canActivate:[CustomerGuardService]},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'admin/dashboard',component:AdminDashboardComponent,canActivate:[AdminGuardService]},
  {path:'admin/view-customers',component:ViewCustomersComponent},
  {path:'admin/add-employee',component:AddEmployeeComponent,canActivate:[AdminGuardService]},
  {path:'admin/view-employees',component:ViewEmployeesComponent,canActivate:[AdminGuardService]},
  {path:'admin/add-insurance-type',component:AddInsuranceTypeComponent,canActivate:[AdminGuardService]},
   {path:'admin/view-insurance-schemes',component:ViewInsuranceSchemesComponent,canActivate:[AdminGuardService]},
   {path:'admin/add-insurance-scheme',component:AddInsuranceSchemeComponent,canActivate:[AdminGuardService]},
   {path:'admin/add-insurance-plan',component:AddInsurancePlanComponent,canActivate:[AdminGuardService]},
   {path:'admin/add-insurance-setting',component:AddTaxSettingComponent,canActivate:[AdminGuardService]},
   {path:'agent/login',component:AgentLoginComponent},
   {path:'agent/dashboard',component:AgentDashboardComponent,canActivate:[AgentGuardService]},
   {path:'agent/add-customer/:id',component:AddCustomerComponent,canActivate:[AgentGuardService]},
   {path:'customer/view-insurance-plans',component:ViewInsurancePlansComponent,canActivate:[CustomerGuardService]},
   {path:'customer/view-more-plan',component:ViewMorePlanComponent,canActivate:[CustomerGuardService]},
   {path:'customer/view-insurance-account',component:CustomerInsuranceAccountComponent,canActivate:[CustomerGuardService]},
   {path:'customer/view-more-insurance-account/:id',component:CustomerViewMoreInsuranceAccountComponent,canActivate:[CustomerGuardService]},
   {path:'employee/login',component:EmployeeLoginComponent},
   {path:'agent/view-commision',component:ViewCommisionComponent,canActivate:[AgentGuardService]},

   {path:'employee/dashboard',component: EmployeeDashboardComponent,canActivate:[EmployeeGuardService]},
   {path:'employee/add-agent',component:AddAgentComponent,canActivate:[EmployeeGuardService]},
   {path:'show-insurance-plans',component:ShowInsurancePlansComponent},
   {path:'home/view-more-plan',component:HomeViewMorePlanComponent},
   {path:'agent/send-mail',component:SendMailtoCustomerComponent,canActivate:[AgentGuardService]},
   {path:'home/about',component:AboutComponent},
   {path:'agent/profile',component:AgentProfileComponent,canActivate:[AgentGuardService]},
   {path:'agent/change-password',component:AgentChangePasswordComponent,canActivate:[AgentGuardService]},
   {path:'agent/view-customers',component:AgentViewCustomersComponent,canActivate:[AgentGuardService]},
   {path:'admin/view-agents',component:AdminViewAgentsComponent,canActivate:[AdminGuardService]},
   {path:'admin/view-commision',component:AdminViewCommisionComponent,canActivate:[AdminGuardService]},
   {path:'admin/profile',component:AdminProfileComponent,canActivate:[AdminGuardService]},
   {path:'admin/change-password',component:AdminChangePasswordComponent,canActivate:[AdminGuardService]},
   {path:'customer/profile',component:CustomerProfileComponent,canActivate:[CustomerGuardService]},
   {path:'agent/withdraw-amount',component:WithdrawAmountComponent,canActivate:[AgentGuardService]},
   {path:'agent/view-policy-payments',component:AgentViewPolicyPaymentsComponent,canActivate:[AgentGuardService]},
   {path:'employee/view-agents',component:EmployeeViewAgentsComponent,canActivate:[EmployeeGuardService]},
   {path:'employee/view-commision',component:ViewCommisionEmployeeComponent,canActivate:[EmployeeGuardService]},
   {path:'employee/view-policy-payment',component:ViewPolicyPaymentsEmployeeComponent,canActivate:[EmployeeGuardService]},
   {path:'employee/view-insurance-plans',component:ViewSchemesEmployeeComponent,canActivate:[EmployeeGuardService]},
   {path:'admin/view-policy-payment',component:ViewPolicyPaymentsAdminComponent,canActivate:[AdminGuardService]},
   {path:'customer/change-password',component:ChangePasswordCustomerComponent,canActivate:[CustomerGuardService]},
   {path:'employee/view-customers',component:ViewCustomersEmployeeComponent,canActivate:[EmployeeGuardService]},
   {path:'employee/profile',component:EmployeeProfileComponent,canActivate:[EmployeeGuardService]},
   {path:'employee/change-password',component:ChangePasswordEmployeeComponent,canActivate:[EmployeeGuardService]},
   {path:'employee/view-commision-withdrawls',component:ViewCommisionWithdrawlsEmployeeComponent,canActivate:[EmployeeGuardService]},
   {path:'admin/view-commision-withdrawls',component:ViewCommisionWithdrawlsAdminComponent,canActivate:[AdminGuardService]},
   {path:'customer/upload-documents',component:UploadDocumentsComponent,canActivate:[CustomerGuardService]},
  {path:'**',component:PageNotFoundComponent},

 
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
