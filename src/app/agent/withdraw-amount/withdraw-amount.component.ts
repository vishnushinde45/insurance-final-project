import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-withdraw-amount',
  templateUrl: './withdraw-amount.component.html',
  styleUrls: ['./withdraw-amount.component.css']
})
export class WithdrawAmountComponent implements OnInit {

  constructor(private agentService:AgentService,
    private formBuilder:FormBuilder) { }

  agentId:any
  agent:any
  
  ngOnInit(): void {
    this.agentId=sessionStorage.getItem('agentId');
  
    

    
    this.agentService.getAgent(this.agentId).subscribe((res)=>{
      this.agent=res;
      console.log(this.agent);
      
    },(err)=>{
      alert("error occurred")
    })

    
  }
 
  withdrawAmountForm =this.formBuilder.group({

    amount:new FormControl()
    
  });


 

  onClickWithdraw(){
    this.agentService.withdrawAmount(this.withdrawAmountForm.value,this.agent.id).subscribe((res)=>{
      alert("Amount Withdrawn Successfully")
    },(err)=>{
      alert("Enter amount less than your current balance or put correct amount")
    });
  }
}
