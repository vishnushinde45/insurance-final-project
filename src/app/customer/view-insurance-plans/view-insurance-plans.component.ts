import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';
@Component({
  selector: 'app-view-insurance-plans',
  templateUrl: './view-insurance-plans.component.html',
  styleUrls: ['./view-insurance-plans.component.css']
})
export class ViewInsurancePlansComponent implements OnInit {

  constructor(private insuranceService:InsuranceService) { }

  insurancePlans:any;
  
  ngOnInit(): void {

    this.insuranceService.getInsurancePlans().subscribe((res)=>{
      this.insurancePlans=res;
      console.log(this.insurancePlans);
    },(err)=>{
      console.log(err);
      
    });
  }

  displayPlan:boolean=true;
  insuranceSchemeId:any;

  insuranceTypeId:any
  
  onChangeType(event:any){
    console.log(event.target.value);
    this.insuranceTypeId=event.target.value
    this.displayPlan=false;
    
      
    
  }
  onChangeScheme(event:any){
    this.insuranceSchemeId=event.target.value;
    console.log(this.insuranceSchemeId);
    
  }

}

