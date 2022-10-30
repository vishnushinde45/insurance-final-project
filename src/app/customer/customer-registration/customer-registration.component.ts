import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { HttpClient } from  '@angular/common/http';
import { CustomerService } from '../customer-service.service';


@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private http: HttpClient,private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  addCustomerForm=this.formBuilder.group({
    fullName:new FormControl(),
    username:new FormControl(),
    emailId:new FormControl(),
    password:new FormControl(),
    dateOfBirth:new FormControl(),
    address:new FormControl(),
    state:new FormControl(),
    city:new FormControl(),
    pincode:new FormControl(),
    nomineeName:new FormControl(),
    mobileNo:new FormControl(),
    nomineeRelation:new FormControl(),
  });


  addCustomer(){
     this.customerService.addCustomer(this.addCustomerForm.value);
  }

}
