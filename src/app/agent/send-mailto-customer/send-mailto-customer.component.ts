import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { AgentService } from '../agent.service';
@Component({
  selector: 'app-send-mailto-customer',
  templateUrl: './send-mailto-customer.component.html',
  styleUrls: ['./send-mailto-customer.component.css']
})
export class SendMailtoCustomerComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private agentService:AgentService) { }

  ngOnInit(): void {
  }

  emailForm=this.formBuilder.group({
    emailId:new FormControl(),
    subject:new FormControl(),
    message:new FormControl(),
    agentId:sessionStorage.getItem('agentId')
  })

  sendMail(){
        this.agentService.sendMail(this.emailForm.value).subscribe((res)=>{
          alert("Mail Sent Successfully")
        },(err)=>{
          alert("Unable to send mail!")
        })
  }

}
