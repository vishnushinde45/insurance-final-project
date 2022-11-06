import { Component, OnInit } from '@angular/core';
import { CommisionService } from 'src/app/commisionService/commision.service';

@Component({
  selector: 'app-view-commision-employee',
  templateUrl: './view-commision-employee.component.html',
  styleUrls: ['./view-commision-employee.component.css']
})
export class ViewCommisionEmployeeComponent implements OnInit {

  constructor(private commisionService:CommisionService) { }
  employeeId:any;
  commisionList:any
  ngOnInit(): void {
    this.employeeId=sessionStorage.getItem('employeeId');
    console.log(this.employeeId);

    this.commisionService.getAllCommisions().subscribe((res)=>{
         this.commisionList=res;
         console.log(this.commisionList);
         
    },(err)=>{
      alert("Error Occured in fetching commision list...")
    });
    
  }
}
