import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer/customer-service.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

 Customers:any;

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((res)=>{
      this.Customers=res;
      console.log(this.Customers);
      
    },(err)=>{
      console.log(err);
      
    });
  }

}
