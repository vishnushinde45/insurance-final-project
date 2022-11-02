import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private agentService:AgentService) { }

  id!:number
  Agent:any;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.id=params['id'];
      console.log(this.id);
      
    })
  this.agentService.getAgent(this.id).subscribe((res)=>{
    this.Agent=res;
    console.log(this.Agent);
    
  },(err: any)=>{
    console.log(err);
    
  })
  }

}
