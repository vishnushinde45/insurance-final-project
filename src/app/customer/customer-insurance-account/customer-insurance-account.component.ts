import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';

@Component({
  selector: 'app-customer-insurance-account',
  templateUrl: './customer-insurance-account.component.html',
  styleUrls: ['./customer-insurance-account.component.css']
})
export class CustomerInsuranceAccountComponent implements OnInit {

  constructor(private insuranceService:InsuranceService) { }

  customerId:any;
  enrolledPolicies:any;
  ngOnInit(): void {
    this.customerId=sessionStorage.getItem('customerId');

    this.insuranceService.getEnrolledPolicies(this.customerId).subscribe((res)=>{
      this.enrolledPolicies=res;
      console.log(this.enrolledPolicies);
      
      
    },(err)=>{
      console.log(err);
      
    });
  }

}
