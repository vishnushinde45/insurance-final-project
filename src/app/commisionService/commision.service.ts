import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommisionService {

  constructor(private http:HttpClient) { }

  getCommisionForAgent(agentId:number){
    return this.http.get('http://localhost:8080/api/agent/view-commision/'+agentId);

  }
}
