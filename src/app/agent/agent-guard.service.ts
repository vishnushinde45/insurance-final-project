import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthAgentService } from './auth-agent.service';

@Injectable({
  providedIn: 'root'
})
export class AgentGuardService implements CanActivate {

  constructor(private authAgentService:AuthAgentService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if(this.authAgentService.isAuthenticated()){
        return true;
      }else{
           this.router.navigate(['']);
           return false;
      }
  }
}
