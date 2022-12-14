import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/app/InsuranceService/insurance.service';

@Component({
  selector: 'app-add-insurance-plan',
  templateUrl: './add-insurance-plan.component.html',
  styleUrls: ['./add-insurance-plan.component.css']
})
export class AddInsurancePlanComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private insuranceService:InsuranceService,private router:Router) { }


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
message:boolean=false;
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
          this.message=true;
          alert("Plan Added Successfulyy")
     this.addInsurancePlanForm.reset({ });
        },(err)=>{
          alert("Added Plan")
          
        });
  }
  
  getControl(){
    return this.addInsurancePlanForm.controls;
  }
  removeMesssag(){
    this.message=false;
  }
}
