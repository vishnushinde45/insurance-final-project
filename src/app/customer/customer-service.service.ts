import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient,private router:Router) { }
  customerId:number;
  setCustomerId(id:number){
    this.customerId=id;
  }
  getCustomerId(){
    return this.customerId;
  }

  addCustomer(data:object){
    this.http.post('http://localhost:8080/api/customers',data).subscribe((res)=>{
      console.log(res);
    })
  }

  customerLogin(data:object){
    return this.http.post('http://localhost:8080/api/customers/login',data);
  }

  getCustomer(id:number){
    return this.http.get('http://localhost:8080/api/customers/'+id);
  }

  getCustomers(){
    return this.http.get('http://localhost:8080/api/customers/');
  }
 
  addCustomerByAgent(data:object,id:number){
    return this.http.post('http://localhost:8080/api/customers/'+id,data);
  }



}
