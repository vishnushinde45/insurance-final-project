import { Component, OnInit } from '@angular/core';
import { CommisionService } from 'src/app/commisionService/commision.service';

@Component({
  selector: 'app-admin-view-commision',
  templateUrl: './admin-view-commision.component.html',
  styleUrls: ['./admin-view-commision.component.css']
})
export class AdminViewCommisionComponent implements OnInit {

  constructor(private commisionService:CommisionService) { }
  adminId:any
  commisionList:any
  ngOnInit(): void {
    this.adminId=sessionStorage.getItem('adminId');
    console.log(this.adminId);

    this.commisionService.getAllCommisions().subscribe((res)=>{
         this.commisionList=res;
         console.log(this.commisionList);
         
    },(err)=>{
      alert("Error Occured in fetching commision list...")
    });
    
  }

}
