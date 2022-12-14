import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private employeeService:EmployeeService,private router:Router) { }

  adminId:any;
  ngOnInit(): void {
    this.adminId=sessionStorage.getItem('adminId');

  }
message:boolean=false;
  addEmployeeForm=this.formBuilder.group({
    fullName:new FormControl("",Validators.required),
    username:new FormControl("",Validators.required),
    state:new FormControl("",Validators.required),
    city:new FormControl("",Validators.required),
    emailId:new FormControl("",[Validators.required,Validators.email])
  });

  Employee:any;
  errorMessage:any;
  
  addEmployee(){
     this.employeeService.addEmployeeByAdmin(this.addEmployeeForm.value,this.adminId).subscribe((res)=>{
      this.Employee=res;
      console.log(this.Employee);
      this.message=true;
      this.addEmployeeForm.reset({ });

     },(err)=>{
      this.errorMessage="unable to add, please try again";
      console.log(err);
      
     });
  }
  get getControl(){
    return this.addEmployeeForm.controls;
  }
  removeMesssag(){
    this.message=false;
  }
}
