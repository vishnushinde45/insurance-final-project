import { Component, OnInit } from '@angular/core';
import { AgentService } from '../agent.service';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-agent-change-password',
  templateUrl: './agent-change-password.component.html',
  styleUrls: ['./agent-change-password.component.css']
})
export class AgentChangePasswordComponent implements OnInit {

  constructor(private agentService:AgentService,private formBuilder:FormBuilder) { }

  agentId:any
  ngOnInit(): void {
    this.agentId=sessionStorage.getItem("agentId");
  }

  changePasswordForm=this.formBuilder.group({
    oldPassword:new FormControl(),
    newPassword:new FormControl(),
    
  });

  onClickChangePassword(){
      this.agentService.changePassword(this.changePasswordForm.value,this.agentId).subscribe((res)=>{
        alert("Password changed successfully");
      },(err)=>{
        alert("old password is incorrect")
      })
  }

}
