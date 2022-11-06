import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/agent/agent.service';

@Component({
  selector: 'app-employee-view-agents',
  templateUrl: './employee-view-agents.component.html',
  styleUrls: ['./employee-view-agents.component.css']
})
export class EmployeeViewAgentsComponent implements OnInit {

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
