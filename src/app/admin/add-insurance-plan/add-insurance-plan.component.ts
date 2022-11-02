import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl,Validators} from '@angular/forms';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';

@Component({
  selector: 'app-add-insurance-plan',
  templateUrl: './add-insurance-plan.component.html',
  styleUrls: ['./add-insurance-plan.component.css']
})
export class AddInsurancePlanComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private insuranceService:InsuranceService) { }


  insuranceSchemes:any;
  insuranceTypes:any;
  ngOnInit(): void {
    this.insuranceService.getInsuranceSchemes().subscribe((res)=>{
      this.insuranceSchemes=res;
      
    },(err)=>{
      console.log(err);
      
    })

    this.insuranceService.getInsuranceTypes().subscribe((res)=>{
      this.insuranceTypes=res;
      console.log(this.insuranceTypes);
      
   })
  }

  addInsurancePlanForm=this.formBuilder.group({
    insuranceTypeId:new FormControl(null,[Validators.required]),
    insuranceSchemeId:new FormControl(null,[Validators.required]),
    minimumPolicyTerm:new FormControl(null,[Validators.required]),
    maximumPolicyTerm:new FormControl(null,[Validators.required]),
    minimumAge:new FormControl(null,[Validators.required]),
    maximumAge:new FormControl(null,[Validators.required]),
    minimumInvestment:new FormControl(null,[Validators.required]),
    maximumInvestment:new FormControl(null,[Validators.required]),
    profitRatio:new FormControl(null,[Validators.required]),

  });

  addInsurancePlan(){
    
        this.insuranceService.addInsurancePlan(this.addInsurancePlanForm.value,this.addInsurancePlanForm.value.insuranceTypeId,this.addInsurancePlanForm.value.insuranceSchemeId).subscribe((res)=>{
          console.log(res);
          
        },(err)=>{
          console.log(err);
          
        });
  }
  
  getControl(){
    return this.addInsurancePlanForm.controls;
  }

}
