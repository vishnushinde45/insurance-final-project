import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-nav',
  templateUrl: './agent-nav.component.html',
  styleUrls: ['./agent-nav.component.css']
})
export class AgentNavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
       this.router.navigate(['']);
  }

}
