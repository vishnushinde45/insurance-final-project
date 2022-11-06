import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-nav',
  templateUrl: './employee-nav.component.html',
  styleUrls: ['./employee-nav.component.css']
})
export class EmployeeNavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClickLogOut(){
    sessionStorage.clear();
       this.router.navigate(['']);
  }

}
