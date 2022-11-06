import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  adminId:any;
  admin:any;
  ngOnInit(): void {
    this.adminId=sessionStorage.getItem('adminId');
    this.adminService.getAdmin(this.adminId).subscribe((res)=>{
      this.admin=res;
      console.log(this.admin);
      
    },(err)=>{
      alert("error occured in showing your profile..")
    })

  }

}
