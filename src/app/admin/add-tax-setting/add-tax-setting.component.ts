import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';
@Component({
  selector: 'app-add-tax-setting',
  templateUrl: './add-tax-setting.component.html',
  styleUrls: ['./add-tax-setting.component.css']
})
export class AddTaxSettingComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private insuranceService:InsuranceService) { }

  ngOnInit(): void {
  }
message:boolean=false;

  insuranceSettingForm=this.formBuilder.group({
    tax:new FormControl("",[Validators.required, Validators.max(20)]),
    claimDeduction:new FormControl("",[Validators.required])
   
  });

  responseMsg:any
  addInsuranceSetting(){
     this.insuranceService.addInsuranceSettings(this.insuranceSettingForm.value).subscribe((res)=>{
         this.responseMsg=res;
         this.message=true;
         this.insuranceSettingForm.reset({ });
     },(err)=>{
      this.responseMsg=err;
     })

  }


  removeMesssag(){
    this.message=false;
  }
  get getControl(){
    return this.insuranceSettingForm.controls;
  }
}
