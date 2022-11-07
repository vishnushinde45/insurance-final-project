import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { AdminService } from '../admin.service';
import { AuthAdminService } from '../auth-admin.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private adminService:AdminService,private router:Router
    ,private authAdminService:AuthAdminService) { }

  adminLoginDetails=this.formBuilder.group({
    username:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-z0-9]+$')]),
    password:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]),
    
  });
 
  ngOnInit(): void {
    
  }

  responseData:any;
  onLoginClick(){
   this.adminService.adminLogin(this.adminLoginDetails.value).subscribe((res)=>{
      this.responseData=res;
      this.authAdminService.login();
      this.router.navigate(['admin/dashboard'],{ queryParams: { 'id': this.responseData.id } })
      sessionStorage.setItem('adminId',this.responseData.id);
      alert("Login Successfully")
      
   },((err:any)=>{
              alert("Inavlid Credentials.")
              
   }));
  
   
}
get getControl(){
  return this.adminLoginDetails.controls;
}

}
