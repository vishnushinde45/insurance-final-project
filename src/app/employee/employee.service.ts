import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  addEmployeeByAdmin(data:object,adminId){
     return this.http.post('http://localhost:8080/api/employees/'+adminId,data);
  }

  getEmployees(){
    return this.http.get('http://localhost:8080/api/employees');
  }

  employeeLogin(data:object){
    return this.http.post('http://localhost:8080/api/employees/login',data);
  }

  getEmployee(employeeId:number){
    return this.http.get('http://localhost:8080/api/employees/'+employeeId);
  }
  changePassword(data:object,employeeId:number){
    return this.http.post('http://localhost:8080/api/employees/change-password/'+employeeId,data);
  }
}
