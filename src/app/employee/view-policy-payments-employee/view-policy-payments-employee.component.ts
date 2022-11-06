import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';

@Component({
  selector: 'app-view-policy-payments-employee',
  templateUrl: './view-policy-payments-employee.component.html',
  styleUrls: ['./view-policy-payments-employee.component.css']
})
export class ViewPolicyPaymentsEmployeeComponent implements OnInit {

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
