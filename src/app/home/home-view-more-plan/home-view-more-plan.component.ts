import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-view-more-plan',
  templateUrl: './home-view-more-plan.component.html',
  styleUrls: ['./home-view-more-plan.component.css']
})
export class HomeViewMorePlanComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private insuranceService:InsuranceService) { }

  planId:any;
  insurancePlan:any;
  insuranceSchemeId:any;
  insuranceSchemeName:any;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.planId=params['id'];
    })

    this.insuranceService.getInsurancePlan(this.planId).subscribe((res)=>{
      this.insurancePlan=res;
      this.profitRatio=this.insurancePlan.profitRatio;
      this.insuranceSchemeId=this.insurancePlan.insuranceScheme.id;
      this.insuranceSchemeName=this.insurancePlan.insuranceScheme.insuranceSchemeName;
       console.log(res)
    },(err)=>{
   console.log(err);
      
    });
  }

  compoundInterest;
  interestAmount
  showInterest:boolean=false;
  policyTerm;
  investedAmount;
  premiumType;
  profitRatio:any;
  installmentAmount:any;

  onClickCalculateInterest(){
    let a=this.investedAmount*(Math.pow((1+this.profitRatio/100),this.policyTerm));
    this.compoundInterest=Math.floor(a-this.investedAmount);
    this.installmentAmount=Math.floor(this.investedAmount/(this.policyTerm*12/this.premiumType));
    this.showInterest=true;
    this.interestAmount=this.compoundInterest;
    
 
  }

}
