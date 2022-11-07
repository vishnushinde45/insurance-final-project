import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer-service.service';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.css']
})
export class UploadDocumentsComponent implements OnInit {

  constructor(private httpClient:HttpClient,private customerService:CustomerService) { }
  customerId:any
  documentType:any;
  Customer:any
  ngOnInit(): void {
   this.customerId=sessionStorage.getItem('customerId')
   this.customerService.getCustomer(this.customerId).subscribe((res)=>{
    this.Customer=res;
    console.log(this.Customer);
    
   })
  }
  selectedFile: File;

  onFileChanged(event){
    //Select File
    this.selectedFile = event.target.files[0];
  }
  onTypeChanged(event){
    this.documentType=event.target.value;
    console.log(this.documentType);
    
  }

  onUpload(){
    console.log(this.selectedFile);
    
    
    const uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile, this.selectedFile.name);
    uploadImageData.append('documentType',this.documentType)
  
    
    this.httpClient.post('http://localhost:8080/api/uploadfile/'+this.customerId, uploadImageData)
      .subscribe((response) => {
        console.log(response);
        
         alert("successfully uploaded")
      },(err)=>{
        alert("Not Uploaded")
      });

  }

}
