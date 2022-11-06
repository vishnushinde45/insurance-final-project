import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { CustomerService } from '../customer-service.service';
@Component({
  selector: 'app-change-password-customer',
  templateUrl: './change-password-customer.component.html',
  styleUrls: ['./change-password-customer.component.css']
})
export class ChangePasswordCustomerComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private customerService:CustomerService) { }
  customerId:any
  ngOnInit(): void {
    this.customerId=sessionStorage.getItem('customerId');
  }

  changePasswordForm=this.formBuilder.group({
    oldPassword:new FormControl(),
    newPassword:new FormControl(),
    
  });

  onClickChangePassword(){
      this.customerService.changePassword(this.changePasswordForm.value,this.customerId).subscribe((res)=>{
        alert("Password changed successfully");
      },(err)=>{
        alert("old password is incorrect")
      })
  }
}
