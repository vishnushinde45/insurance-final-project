import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-insurance-plans',
  templateUrl: './show-insurance-plans.component.html',
  styleUrls: ['./show-insurance-plans.component.css']
})
export class ShowInsurancePlansComponent implements OnInit {

  constructor(private insuranceService:InsuranceService,private router:Router) { }

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
    this.router.navigate(['home/view-more-plan'],{ queryParams: { 'id': planId } })

  }


}
