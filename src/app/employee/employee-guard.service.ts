import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthEmployeeService } from './auth-employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuardService implements CanActivate {

  constructor(private authEmployeeService:AuthEmployeeService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if(this.authEmployeeService.isAuthenticated()){
        return true;
      }else{
           this.router.navigate(['']);
           return false;
      }
  }
}
