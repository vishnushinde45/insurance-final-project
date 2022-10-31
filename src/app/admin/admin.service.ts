import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  adminLogin(data:object){
    return this.http.post('http://localhost:8080/api/admin/login',data);
  }

  getAdmin(id:number){
    return this.http.get('http://localhost:8080/api/admin/'+id);
  }
}
