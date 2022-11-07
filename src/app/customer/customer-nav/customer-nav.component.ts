import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCustomerService } from '../auth-customer.service';

@Component({
  selector: 'app-customer-nav',
  templateUrl: './customer-nav.component.html',
  styleUrls: ['./customer-nav.component.css']
})
export class CustomerNavComponent implements OnInit {

  constructor(private router:Router,private authCustomerService:AuthCustomerService) { }

  ngOnInit(): void {
  }

  onClickLogOut(){
    this.authCustomerService.logout();
    sessionStorage.clear();
       this.router.navigate(['']);
  }

}
