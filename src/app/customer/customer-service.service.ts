import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  
  addCustomer(data:object){
    this.http.post('http://localhost:8080/api/customers',data).subscribe((res)=>{
      console.log(res);
    })
  }
}
