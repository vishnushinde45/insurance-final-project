import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAgentService } from '../auth-agent.service';

@Component({
  selector: 'app-agent-nav',
  templateUrl: './agent-nav.component.html',
  styleUrls: ['./agent-nav.component.css']
})
export class AgentNavComponent implements OnInit {

  constructor(private router:Router,private authAgentService:AuthAgentService) { }

  ngOnInit(): void {
  }

  onClickLogOut(){
    this.authAgentService.logout();
    sessionStorage.clear();
       this.router.navigate(['']);
  }

}
