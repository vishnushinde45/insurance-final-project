import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';

@Component({
  selector: 'app-agent-view-policy-payments',
  templateUrl: './agent-view-policy-payments.component.html',
  styleUrls: ['./agent-view-policy-payments.component.css']
})
export class AgentViewPolicyPaymentsComponent implements OnInit {

  constructor(private insuranceService:InsuranceService) { }

  paidInstallments:any
  ngOnInit(): void {
    this.insuranceService.getInstallmentPayments().subscribe((res)=>{
      this.paidInstallments=res;
      console.log(this.paidInstallments);
      
    },(err)=>{
      alert("error occured in fetching payments")
    });
  }

}
