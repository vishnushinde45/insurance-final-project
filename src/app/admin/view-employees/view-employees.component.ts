import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee/employee.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  Employees:any
  errorMessage:any;
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((res)=>{
      this.Employees=res;
      console.log(this.Employees);
      
    },(err)=>{
        this.errorMessage=err;
    });
  }





}
