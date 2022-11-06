import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/agent/agent.service';


@Component({
  selector: 'app-admin-view-agents',
  templateUrl: './admin-view-agents.component.html',
  styleUrls: ['./admin-view-agents.component.css']
})
export class AdminViewAgentsComponent implements OnInit {

  constructor(private agentService:AgentService) { }


  Agents:any;
  ngOnInit(): void {
    this.agentService.getAgents().subscribe((res)=>{
      this.Agents=res;
    },(err)=>{
      alert("Could not able to fetch agents")
    });
  }

}
