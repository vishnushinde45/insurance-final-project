import { Component, OnInit } from '@angular/core';
import { CommisionService } from 'src/app/commisionService/commision.service';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-view-commision',
  templateUrl: './view-commision.component.html',
  styleUrls: ['./view-commision.component.css']
})
export class ViewCommisionComponent implements OnInit {

  constructor(private commisionService:CommisionService,private agentService:AgentService) { }
  agentId:any;
  commisionList:any
  ngOnInit(): void {
    this.agentId=sessionStorage.getItem('agentId');
    console.log(this.agentId);

    this.commisionService.getCommisionForAgent(this.agentId).subscribe((res)=>{
         this.commisionList=res;
         console.log(this.commisionList);
         
    },(err)=>{
      alert("Error Occured in fetching commision list...")
    });
    
  }

}
