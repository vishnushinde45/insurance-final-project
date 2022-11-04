import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-send-mailto-customer',
  templateUrl: './send-mailto-customer.component.html',
  styleUrls: ['./send-mailto-customer.component.css']
})
export class SendMailtoCustomerComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  emailForm=this.formBuilder.group({

  })

  sendMail

}
