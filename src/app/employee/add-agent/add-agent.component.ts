import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { AgentService } from 'src/app/agent/agent.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private agentService:AgentService) { }

  employeeId:any;
  ngOnInit(): void {
    this.employeeId=sessionStorage.getItem('employeeId')
  }

  addAgentForm=this.formBuilder.group({
    fullName:new FormControl(),
    username:new FormControl(),
    state:new FormControl(),
    city:new FormControl(),
    emailId:new FormControl(),
    qualification:new FormControl(),
    
  });

  addAgent(){

    this.agentService.addAgentByEmployee(this.addAgentForm.value,this.employeeId).subscribe((res)=>{
      console.log(res);
      alert("Agent added successfully..")
    },(err)=>{
      alert("Some error occured, please try again..")
    });
  }

}
