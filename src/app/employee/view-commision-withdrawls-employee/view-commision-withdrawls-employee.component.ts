import { Component, OnInit } from '@angular/core';
import { CommisionService } from 'src/app/commisionService/commision.service';

@Component({
  selector: 'app-view-commision-withdrawls-employee',
  templateUrl: './view-commision-withdrawls-employee.component.html',
  styleUrls: ['./view-commision-withdrawls-employee.component.css']
})
export class ViewCommisionWithdrawlsEmployeeComponent implements OnInit {

  constructor(private commisionService:CommisionService) { }

  commisionWithdrawls:any
  ngOnInit(): void {

    this.commisionService.getAllCommisionWithdrawls().subscribe((res)=>{
      this.commisionWithdrawls=res;
  },(err)=>{
    alert("could not able to fetch withdrawls")
  });
  }

}
