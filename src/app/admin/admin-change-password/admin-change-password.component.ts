import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css']
})
export class AdminChangePasswordComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private adminService:AdminService) { }

  adminId:any
  ngOnInit(): void {
    this.adminId=sessionStorage.getItem('adminId');
  }

  changePasswordForm=this.formBuilder.group({
    oldPassword:new FormControl(),
    newPassword:new FormControl(),
    
  });

  onClickChangePassword(){
      this.adminService.changePassword(this.changePasswordForm.value,this.adminId).subscribe((res)=>{
        alert("Password changed successfully");
      },(err)=>{
        alert("old password is incorrect")
      })
  }
}
