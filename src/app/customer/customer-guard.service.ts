import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthCustomerService } from './auth-customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuardService implements CanActivate {

  constructor(private authCustomerService:AuthCustomerService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.authCustomerService.isAuthenticated()){
      return true;
    }else{
         this.router.navigate(['']);
         return false;
    }
  }
}
