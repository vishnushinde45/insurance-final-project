import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';

@Component({
  selector: 'app-view-insurance-schemes',
  templateUrl: './view-insurance-schemes.component.html',
  styleUrls: ['./view-insurance-schemes.component.css']
})
export class ViewInsuranceSchemesComponent implements OnInit {

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
