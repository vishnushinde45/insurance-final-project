import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }
  employeeData:any;

  employeeLoginDetails=this.formBuilder.group({
    username:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-z]+$')]),
    password:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]),
    
  });

  onLoginClick(){
    this.employeeService.employeeLogin(this.employeeLoginDetails.value).subscribe((res)=>{
      this.employeeData=res;
      this.router.navigate(['employee/dashboard'],{ queryParams: { 'id': this.employeeData.id } })
      alert("Login Successfully!")
      sessionStorage.setItem('employeeId',this.employeeData.id )
      sessionStorage.setItem('username',this.employeeData.username);
   },((err:any)=>{
              console.log("Invalid Credentials");
              
              
   }));
  }
  

}
