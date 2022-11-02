import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http:HttpClient) { }

  addInsuranceType(data:object){
     return this.http.post('http://localhost:8080/api/insurance-type',data);
  }
  getInsuranceTypes(){
    return this.http.get('http://localhost:8080/api/insurance-type');
  }

  addInsuranceScheme(data:object,id:number){
    return this.http.post('http://localhost:8080/api/insurance-scheme/'+id,data);
  }

  getInsuranceSchemes(){
    return this.http.get('http://localhost:8080/api/insurance-scheme');
  }
  addInsurancePlan(data:object,insuranceTypeId:number,insuranceSchemeId:number){
    
    return this.http.post('http://localhost:8080/api/insurance-plan/'+insuranceTypeId+'/'+insuranceSchemeId,data);
  }

  addInsuranceSettings(data:object){
    return this.http.post('http://localhost:8080/api/insurance-tax-deduction',data);
  }
  getInsuranceSchemesByTypeId(id:number){
        return this.http.get('http://localhost:8080/api/insurance-scheme/'+id);
  } 

  getInsurancePlans(){
    return this.http.get('http://localhost:8080/api/insurance-plan')
  }
}
