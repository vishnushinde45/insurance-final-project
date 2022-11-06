import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-change-password-employee',
  templateUrl: './change-password-employee.component.html',
  styleUrls: ['./change-password-employee.component.css']
})
export class ChangePasswordEmployeeComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private employeeService:EmployeeService) { }
  employeeId:any
  ngOnInit(): void {
    this.employeeId=sessionStorage.getItem('employeeId');
  }

  changePasswordForm=this.formBuilder.group({
    oldPassword:new FormControl(),
    newPassword:new FormControl(),
    
  });

  onClickChangePassword(){
      this.employeeService.changePassword(this.changePasswordForm.value,this.employeeId).subscribe((res)=>{
        alert("Password changed successfully");
      },(err)=>{
        alert("old password is incorrect")
      })
  }

}
