import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';

@Component({
  selector: 'app-view-policy-payments-admin',
  templateUrl: './view-policy-payments-admin.component.html',
  styleUrls: ['./view-policy-payments-admin.component.css']
})
export class ViewPolicyPaymentsAdminComponent implements OnInit {

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
