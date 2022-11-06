import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer/customer-service.service';
@Component({
  selector: 'app-agent-view-customers',
  templateUrl: './agent-view-customers.component.html',
  styleUrls: ['./agent-view-customers.component.css']
})
export class AgentViewCustomersComponent implements OnInit {

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
