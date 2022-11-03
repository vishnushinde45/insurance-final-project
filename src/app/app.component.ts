import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { CustomerService } from './customer/customer-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CustomerService]
})
export class AppComponent {
  title = 'insurance-final-project';
  constructor(private customerService:CustomerService){}
}
