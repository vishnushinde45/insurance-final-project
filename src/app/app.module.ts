import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { HttpClient } from  '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { HomeNavComponent } from './home/home-nav/home-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerNavComponent } from './customer/customer-nav/customer-nav.component';
import { CustomerRegistrationComponent } from './customer/customer-registration/customer-registration.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { ViewCustomersComponent } from './admin/view-customers/view-customers.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { ViewEmployeesComponent } from './admin/view-employees/view-employees.component';
import { AddInsuranceTypeComponent } from './admin/add-insurance-type/add-insurance-type.component';
import { ViewInsuranceSchemesComponent } from './admin/view-insurance-schemes/view-insurance-schemes.component';
import { AddInsuranceSchemeComponent } from './admin/add-insurance-scheme/add-insurance-scheme.component';
import { AddInsurancePlanComponent } from './admin/add-insurance-plan/add-insurance-plan.component';
import { AddTaxSettingComponent } from './admin/add-tax-setting/add-tax-setting.component';
import { AgentNavComponent } from './agent/agent-nav/agent-nav.component';
import { AgentLoginComponent } from './agent/agent-login/agent-login.component';
import { AgentDashboardComponent } from './agent/agent-dashboard/agent-dashboard.component';
import { AddCustomerComponent } from './agent/add-customer/add-customer.component';
import { ViewInsurancePlansComponent } from './customer/view-insurance-plans/view-insurance-plans.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    HomeFooterComponent,
    HomeNavComponent,
    CustomerLoginComponent,
    CustomerNavComponent,
    CustomerRegistrationComponent,
    CustomerDashboardComponent,
    AdminLoginComponent,
    PageNotFoundComponent,
    AdminDashboardComponent,
    AdminNavComponent,
    ViewCustomersComponent,
    AddEmployeeComponent,
    ViewEmployeesComponent,
    AddInsuranceTypeComponent,
    ViewInsuranceSchemesComponent,
    AddInsuranceSchemeComponent,
    AddInsurancePlanComponent,
    AddTaxSettingComponent,
    AgentNavComponent,
    AgentLoginComponent,
    AgentDashboardComponent,
    AddCustomerComponent,
    ViewInsurancePlansComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
