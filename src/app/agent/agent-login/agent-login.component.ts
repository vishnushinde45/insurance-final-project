import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css']
})
export class AgentLoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router,private agentService:AgentService) { }

  ngOnInit(): void {
  }



  agentLoginDetails=this.formBuilder.group({
    username:new FormControl(),
    password:new FormControl(),
    
  });

  agent:any;
  onLoginClick(){
    this.agentService.agentLogin(this.agentLoginDetails.value).subscribe((res)=>{
      this.agent=res;
      this.router.navigate(['agent/dashboard'],{ queryParams: { 'id': this.agent.id } })
       alert("Login Successfully")
      sessionStorage.setItem('agentId',this.agent.id)
   },((err:any)=>{
              alert("Invalid Credentials ");
              
   }));
  }

}
