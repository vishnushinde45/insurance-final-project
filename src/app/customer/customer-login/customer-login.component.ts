import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { CustomerService } from '../customer-service.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  formSubmitted:boolean= false;
  constructor(private formBuilder:FormBuilder,private customerService:CustomerService,private router:Router) { }

  customerLoginDetails=this.formBuilder.group({
    username:new FormControl("",[Validators.required,Validators.minLength(5),Validators.pattern('^[a-zA-z]+$')]),
    password:new FormControl("",[Validators.required,Validators.minLength(5),Validators.pattern('^[a-zA-Z0-9]+$')]),
    
  });
  
  ngOnInit(): void {
  }

 responseData:any;
  onLoginClick(){
   this.customerService.customerLogin(this.customerLoginDetails.value).subscribe((res)=>{
      this.responseData=res;
      this.router.navigate(['customer/dashboard'],{ queryParams: { 'id': this.responseData.id } })
      sessionStorage.setItem('username',this.responseData.username);
   },((err)=>{
              console.log(err);
              
   }));

  
    
  }
  addCustomer(){
    this.customerService.addCustomer(this.customerLoginDetails.value);
    this.formSubmitted = true;
 }
  get getControl(){
    return this.customerLoginDetails.controls;
  }
}
