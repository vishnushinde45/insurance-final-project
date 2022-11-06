import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';
import { CustomerService } from '../customer-service.service';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-view-more-plan',
  templateUrl: './view-more-plan.component.html',
  styleUrls: ['./view-more-plan.component.css']
})
export class ViewMorePlanComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private insuranceService:InsuranceService,
    private customerService:CustomerService,private formBuilder:FormBuilder,) { }
   
  customerId:any;
  planId:any;
  insurancePlan:any;
  insuranceSchemeId:any;
  insuranceSchemeName:any;
  ngOnInit(): void {
    // this.customerId=this.customerService.getCustomerId();
    // console.log(this.customerId);
    this.customerId=sessionStorage.getItem('customerId');
    console.log(this.customerId);
    
    

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
    
    this.compoundInterest=Math.floor(a-this.investedAmount)
    this.installmentAmount=Math.floor((this.investedAmount/(this.policyTerm*12/this.premiumType)));
    this.showInterest=true;
    this.interestAmount=this.compoundInterest;
    
 
  }
  
  BuyPolicyForm=this.formBuilder.group({

    investedAmount:new FormControl(),
    policyTerm:new FormControl(),
    premiumType:new FormControl(),
    interestAmount:new FormControl(),
    installmentAmount:new FormControl(),
    profitRatio:new FormControl()
  });





  confirmForm:boolean=false;
  
  onClickBuy(){
    this.confirmForm=true;
  }
  buyPolicy(){
    this.insuranceService.buyPolicy(this.BuyPolicyForm.value,this.customerId,this.insuranceSchemeId).subscribe((res)=>{
      alert("Successfull");
    },(err)=>{
      alert("err");
    });
  }

  

}
