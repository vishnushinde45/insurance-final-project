import { Component, OnInit } from '@angular/core';
import { CommisionService } from 'src/app/commisionService/commision.service';

@Component({
  selector: 'app-view-commision-withdrawls-admin',
  templateUrl: './view-commision-withdrawls-admin.component.html',
  styleUrls: ['./view-commision-withdrawls-admin.component.css']
})
export class ViewCommisionWithdrawlsAdminComponent implements OnInit {

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
