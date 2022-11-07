import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';
import { AuthAdminService } from '../auth-admin.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private insuranceService:InsuranceService,private router:Router,
    private authAdminService:AuthAdminService) { }

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
    this.authAdminService.logout();
       sessionStorage.clear();
       this.router.navigate(['']);
  }

}
