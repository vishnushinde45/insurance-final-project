import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer-service.service';
@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private customerService:CustomerService) { }

   id!:number;
   Customer!:any;
   ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe((params)=>{
        this.id=params['id'];
        console.log(this.id);
        
      })
    this.customerService.getCustomer(this.id).subscribe((res: object)=>{
      this.Customer=res;
      console.log(this.Customer);
      
    },(err: any)=>{
      console.log(err);
      
    })
   

  }

}
