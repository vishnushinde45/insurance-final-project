import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/customer/customer-service.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private customerService:CustomerService,private activatedRoute:ActivatedRoute) { }

  id!:any
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      
     
      });
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
     this.customerService.addCustomerByAgent(this.addCustomerForm.value,this.id).subscribe((res)=>{
      console.log(res);
      
     },(err)=>{
      console.log(err);
      
     });
  }

}
