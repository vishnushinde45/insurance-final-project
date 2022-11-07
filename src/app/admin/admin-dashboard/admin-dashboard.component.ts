import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  id!:number;
   Admin!:any;
   
  constructor(private activatedRoute:ActivatedRoute,private adminService:AdminService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.id=params['id'];
      console.log(this.id);
      
    })
  this.adminService.getAdmin(this.id).subscribe((res: object)=>{
    this.Admin=res;
    console.log(this.Admin);
    
  },(err: any)=>{
    console.log(err);
    
  })


  }

}
