import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';

@Component({
  selector: 'app-add-insurance-type',
  templateUrl: './add-insurance-type.component.html',
  styleUrls: ['./add-insurance-type.component.css']
})
export class AddInsuranceTypeComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private insuranceService:InsuranceService) { }

  
  ngOnInit(): void {
  }
  message:boolean=false;
  addInsuranceTypeForm=this.formBuilder.group({
    insuranceType:new FormControl("",Validators.required),
    status:new FormControl("",Validators.required),
  });

  errorMessage:any;

  addInsuranceType(){
    this.insuranceService.addInsuranceType(this.addInsuranceTypeForm.value).subscribe((res)=>{
      console.log(res);
      this.message=true;
     this.addInsuranceTypeForm.reset({ });
     
    },(err)=>{
     this.errorMessage=err;
     console.log(err);
     
    });
 }
 get getControl(){
  return this.addInsuranceTypeForm.controls;
}
 removeMesssag(){
  this.message=false;
}
}
