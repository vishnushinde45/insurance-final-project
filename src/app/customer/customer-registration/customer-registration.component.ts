import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { CustomerService } from '../customer-service.service';


@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private customerService:CustomerService) { }

  ngOnInit(): void {
    const formSubmitted = false;
  }
message:boolean=false;

  addCustomerForm=this.formBuilder.group({
    fullName:new FormControl("",[Validators.required]),
    username:new FormControl("",[Validators.required]),
    emailId:new FormControl("",[Validators.email,Validators.required]),
    password:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]),
    dateOfBirth:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    state:new FormControl("",[Validators.required]),
    city:new FormControl("",[Validators.required]),
    pincode:new FormControl("",[Validators.required]),
    nomineeName:new FormControl("",[Validators.required]),
    mobileNo:new FormControl("",[Validators.required]),
    nomineeRelation:new FormControl("",[Validators.required]),
    agentId:new FormControl()
  });

  
  addCustomer(){
     this.customerService.addCustomer(this.addCustomerForm.value);
     this.message=true;
     this.addCustomerForm.reset({ });
  }
  get getControl(){
    return this.addCustomerForm.controls;
  }
  removeMesssag(){
    this.message=false;
  }
}
