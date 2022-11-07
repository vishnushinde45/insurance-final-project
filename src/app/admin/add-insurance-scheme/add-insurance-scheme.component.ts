import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';

@Component({
  selector: 'app-add-insurance-scheme',
  templateUrl: './add-insurance-scheme.component.html',
  styleUrls: ['./add-insurance-scheme.component.css']
})
export class AddInsuranceSchemeComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private insuranceService:InsuranceService,private router:Router) { }

  htmlContent='';
  addSchemeForm=this.formBuilder.group({
    insuranceSchemeName:new FormControl(),
    commisionForNewRegistration:new FormControl(),
    commisionForInstallment:new FormControl(),
    description:this.htmlContent,
    status:new FormControl(),
    insuranceTypeId:new FormControl()
  });
  
  insuranceTypes:any;
  
  ngOnInit(): void {
    //Authentication
    if(sessionStorage.getItem('adminId')==null){
      this.router.navigate(['']);

    }
    this.insuranceService.getInsuranceTypes().subscribe((res)=>{
       this.insuranceTypes=res;
       console.log(this.insuranceTypes);
       
    })
  }
  message:boolean=false;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultFontName: 'Arial',
   
  };
  addScheme(){
    this.insuranceService.addInsuranceScheme(this.addSchemeForm.value,this.addSchemeForm.value.insuranceTypeId).subscribe((res)=>{
      console.log(res);
      this.message=true;
     this.addSchemeForm.reset({ });
     alert("Scheme Added Successfully!")
     
     
    },(err)=>{
      alert("Unable to add scheme,please try again")
    })
     
      
  }
  get getControl(){
    return this.addSchemeForm.controls;
  }
  removeMesssag(){
    this.message=false;
  }
}
