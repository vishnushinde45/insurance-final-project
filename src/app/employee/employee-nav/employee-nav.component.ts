import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthEmployeeService } from '../auth-employee.service';

@Component({
  selector: 'app-employee-nav',
  templateUrl: './employee-nav.component.html',
  styleUrls: ['./employee-nav.component.css']
})
export class EmployeeNavComponent implements OnInit {

  constructor(private router:Router,private authEmployeeService:AuthEmployeeService) { }

  ngOnInit(): void {
  }
  onClickLogOut(){
    this.authEmployeeService.logout();
    sessionStorage.clear();
       this.router.navigate(['']);
  }

}
