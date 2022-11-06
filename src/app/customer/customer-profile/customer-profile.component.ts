import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer-service.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  constructor(private customerService:CustomerService) { }
  customerId:any
  customer:any;
  ngOnInit(): void {
    this.customerId=sessionStorage.getItem('customerId');
    this.customerService.getCustomer(this.customerId).subscribe((res)=>{
      this.customer=res;
      console.log(this.customer);
      
    },(err)=>{
      alert("error occured in showing your profile..")
    })

  }

}
