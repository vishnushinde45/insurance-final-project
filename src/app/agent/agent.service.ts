import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http:HttpClient) { }
  

  agentLogin(data:object){
    return this.http.post('http://localhost:8080/api/agent/login',data);
  }

  getAgent(id:number){
    return this.http.get('http://localhost:8080/api/agents/'+id);
  }

  addAgentByEmployee(data:object,employeeId:number){
    return this.http.post('http://localhost:8080/api/agents/add-agent/'+employeeId,data);
  }
}
