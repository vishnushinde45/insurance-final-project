import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private adminService:AdminService,private router:Router) { }

  adminLoginDetails=this.formBuilder.group({
    username:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-z]+$')]),
    password:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]),
    
  });
 
  ngOnInit(): void {
    
  }

  responseData:any;
  onLoginClick(){
   this.adminService.adminLogin(this.adminLoginDetails.value).subscribe((res)=>{
      this.responseData=res;
      this.router.navigate(['admin/dashboard'],{ queryParams: { 'id': this.responseData.id } })
      sessionStorage.setItem('username',this.responseData.username);
   },((err:any)=>{
              console.log(err);
              
   }));
  
   
}
get getControl(){
  return this.adminLoginDetails.controls;
}

}
