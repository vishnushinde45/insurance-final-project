import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer/customer-service.service';

@Component({
  selector: 'app-view-customers-employee',
  templateUrl: './view-customers-employee.component.html',
  styleUrls: ['./view-customers-employee.component.css']
})
export class ViewCustomersEmployeeComponent implements OnInit {

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
