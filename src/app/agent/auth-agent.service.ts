import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthAgentService {

  constructor() { }
  loggedIn:boolean=false;

  login(){
    this.loggedIn=true;
  }

  logout(){
    this.loggedIn=false;
  }

  isAuthenticated(){
    return this.loggedIn;
  }
}
