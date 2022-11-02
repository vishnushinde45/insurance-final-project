import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { EmployeeService } from 'src/app/employee/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  addEmployeeForm=this.formBuilder.group({
    fullName:new FormControl(),
    username:new FormControl(),
    state:new FormControl(),
    city:new FormControl(),
    status:new FormControl(),
  });

  Employee:any;
  errorMessage:any;
  
  addEmployee(){
     this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe((res)=>{
      this.Employee=res;
      console.log(this.Employee);
      
     },(err)=>{
      this.errorMessage=err;
      console.log(err);
      
     });
  }

}
