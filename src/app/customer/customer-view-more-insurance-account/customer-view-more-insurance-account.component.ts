import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer-service.service';

@Component({
  selector: 'app-customer-view-more-insurance-account',
  templateUrl: './customer-view-more-insurance-account.component.html',
  styleUrls: ['./customer-view-more-insurance-account.component.css']
})
export class CustomerViewMoreInsuranceAccountComponent implements OnInit {

  constructor(private insuranceService:InsuranceService,private activatedRoute:ActivatedRoute,private customerService:CustomerService) { }

  customerId:any;
  policyId:any
  policy:any
  Customer:any
  ngOnInit(): void {

    this.customerId=sessionStorage.getItem('id');
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

}
