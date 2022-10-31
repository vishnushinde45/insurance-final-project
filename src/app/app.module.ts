import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { HttpClient } from  '@angular/common/http';
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
    ViewCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
