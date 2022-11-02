import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private insuranceService:InsuranceService) { }

  insuranceTypes:any;
  ngOnInit(): void {
    this.insuranceService.getInsuranceTypes().subscribe((res)=>{
      this.insuranceTypes=res;
      console.log(this.insuranceTypes);
      
    },(err)=>{
      console.log(err);
      
    });
  }

}
