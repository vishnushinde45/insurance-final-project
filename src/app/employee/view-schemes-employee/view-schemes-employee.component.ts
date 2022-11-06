import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';

@Component({
  selector: 'app-view-schemes-employee',
  templateUrl: './view-schemes-employee.component.html',
  styleUrls: ['./view-schemes-employee.component.css']
})
export class ViewSchemesEmployeeComponent implements OnInit {

  constructor(private insuranceService:InsuranceService) { }

 
  insuranceTypeId:any;
  
  insurancePlans:any;
  ngOnInit(): void {

    this.insuranceService.getInsurancePlans().subscribe((res)=>{
      this.insurancePlans=res;
      console.log(this.insurancePlans);
      
      
      
    },(err)=>{
      console.log(err);
      
    });
  }
}
