import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  employeeId:any
  employee:any;
  ngOnInit(): void {
    this.employeeId=sessionStorage.getItem('employeeId');
    this.employeeService.getEmployee(this.employeeId).subscribe((res)=>{
      this.employee=res;
      console.log(this.employee);
      
    },(err)=>{
      alert("error occured in showing your profile..")
    })

  }

}
