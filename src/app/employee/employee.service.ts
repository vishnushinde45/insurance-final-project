import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  addEmployee(data:object){
     return this.http.post('http://localhost:8080/api/employees',data);
  }

  getEmployees(){
    return this.http.get('http://localhost:8080/api/employees');
  }

  employeeLogin(data:object){
    return this.http.post('http://localhost:8080/api/employees/login',data);
  }
}
