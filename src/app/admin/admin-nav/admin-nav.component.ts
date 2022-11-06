import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private insuranceService:InsuranceService,private router:Router) { }

  insuranceTypes:any;
  ngOnInit(): void {
    this.insuranceService.getInsuranceTypes().subscribe((res)=>{
      this.insuranceTypes=res;
      console.log(this.insuranceTypes);
      
    },(err)=>{
      console.log(err);
      
    });
  }
  onClickLogOut(){
    sessionStorage.clear();
       this.router.navigate(['']);
  }

}
