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
message:boolean=false;
  
  addCustomerForm=this.formBuilder.group({
    fullName:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    emailId:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    dateOfBirth:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    pincode:new FormControl('',Validators.required),
    nomineeName:new FormControl('',Validators.required),
    mobileNo:new FormControl('',Validators.required),
    nomineeRelation:new FormControl('',Validators.required),
  });

  
  addCustomer(){
     this.customerService.addCustomerByAgent(this.addCustomerForm.value,this.id).subscribe((res)=>{
      console.log(res);
      this.message=true;
      
     },(err)=>{
      console.log(err);
      
     });
  }
  get getControl(){
    return this.addCustomerForm.controls;
  }
  removeMesssag(){
    this.message=false;
  }

}
