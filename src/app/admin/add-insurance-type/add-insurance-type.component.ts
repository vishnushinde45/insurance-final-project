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

  addInsuranceTypeForm=this.formBuilder.group({
    insuranceType:new FormControl(),
    status:new FormControl(),
  });

  errorMessage:any;

  addInsuranceType(){
    this.insuranceService.addInsuranceType(this.addInsuranceTypeForm.value).subscribe((res)=>{
      console.log(res);
      
     
    },(err)=>{
     this.errorMessage=err;
     console.log(err);
     
    });
 }

}
