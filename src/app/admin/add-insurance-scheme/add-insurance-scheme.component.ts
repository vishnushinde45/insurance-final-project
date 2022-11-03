import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';

@Component({
  selector: 'app-add-insurance-scheme',
  templateUrl: './add-insurance-scheme.component.html',
  styleUrls: ['./add-insurance-scheme.component.css']
})
export class AddInsuranceSchemeComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private insuranceService:InsuranceService) { }

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
    this.insuranceService.getInsuranceTypes().subscribe((res)=>{
       this.insuranceTypes=res;
       console.log(this.insuranceTypes);
       
    })
  }
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
      
    })
     
      
  }


}
