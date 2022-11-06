import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer-service.service';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-customer-view-more-insurance-account',
  templateUrl: './customer-view-more-insurance-account.component.html',
  styleUrls: ['./customer-view-more-insurance-account.component.css']
})
export class CustomerViewMoreInsuranceAccountComponent implements OnInit {

  constructor(private insuranceService:InsuranceService,
    private activatedRoute:ActivatedRoute,
    private customerService:CustomerService,
    private formBuilder:FormBuilder) { }

  customerId:any;
  policyId:any
  policy:any
  Customer:any
  installmentData:any
  amountTobePaid:any
  ngOnInit(): void {

    this.customerId=sessionStorage.getItem('customerId');
    this.activatedRoute.params.subscribe(params => {
      this.policyId = params['id'];
      console.log(this.policyId);
      
     
      });

      this.customerService.getCustomer(this.customerId).subscribe((res)=>{
        this.Customer=res;
        
      },(err)=>{console.log(err)})

      this.insuranceService.getEnrolledPolicyById(this.policyId).subscribe((res)=>{
        this.policy=res
        console.log(res);
        
        
      },(err)=>{console.log(err)});
    
  }


message:any



  onPayClick(installmentFromClick:object){
    this.installmentData=installmentFromClick;
    this.amountTobePaid=this.installmentData.installmentAmount;
    
  }

  showDebit:boolean=false;
  showUPI:boolean=false;
  payNow:boolean=false;
  paymentType:string
  onCLickUPI(){
       this.showUPI=true
       this.showDebit=false
       this.payNow=true
       this.paymentType="UPI"
  }
  onClickDEBIT(){
       this.showDebit=true
       this.showUPI=false
       this.payNow=true
       this.paymentType="DEBIT CARD"
  }
 
  onClickProceedPayment(){
    this.insuranceService.payInstallment(this.customerId,this.installmentData.id,this.paymentType).subscribe((res)=>{
            this.message="Installment Successfully Paid";
    },(err)=>{
      this.message="Payment has not done"
    });
  }

}
