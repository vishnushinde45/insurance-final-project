import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';
import { Router } from '@angular/router';
import { CustomerService } from '../customer-service.service';
@Component({
  selector: 'app-view-insurance-plans',
  templateUrl: './view-insurance-plans.component.html',
  styleUrls: ['./view-insurance-plans.component.css']
})
export class ViewInsurancePlansComponent implements OnInit {

  constructor(private insuranceService:InsuranceService,private router:Router,private customerService:CustomerService) { }

  insurancePlans:any;
  
  ngOnInit(): void {

  

    this.insuranceService.getInsurancePlans().subscribe((res)=>{
      this.insurancePlans=res;
      console.log(this.insurancePlans);
    },(err)=>{
      console.log(err);
      
    });

    
  }
  onViewMoreClick(planId:number){
    this.router.navigate(['customer/view-more-plan'],{ queryParams: { 'id': planId } })

  }


}

