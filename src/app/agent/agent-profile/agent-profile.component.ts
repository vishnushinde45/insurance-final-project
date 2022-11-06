import { Component, OnInit } from '@angular/core';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {
  agentId: any;

  constructor(private agentService:AgentService) { }

  agent:any;
  ngOnInit(): void {
    this.agentId=sessionStorage.getItem('agentId');
    this.agentService.getAgent(this.agentId).subscribe((res)=>{
      this.agent=res;
      console.log(this.agent);
      
    },(err)=>{
      alert("error occured in showing your profile..")
    })

  }

}
