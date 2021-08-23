import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
  providers: [MessageService]

})
export class HomeComponent implements OnInit {

  
  imgFile!: string;

  uploadForm = new FormGroup({
   name: new FormControl('', [Validators.required]),
   file: new FormControl('', [Validators.required]),
   imgSrc: new FormControl('', [Validators.required])
 });
 
 constructor(private httpClient: HttpClient) { }
  ngOnInit() {
  }
   
 get uf(){
   return this.uploadForm.controls;
 }
  
 onImageChange(e:any) {
   const reader = new FileReader();
   
   if(e.target.files && e.target.files.length) {
     const [file] = e.target.files;
     reader.readAsDataURL(file);
   
     reader.onload = () => {
       this.imgFile = reader.result as string;
       this.uploadForm.patchValue({
         imgSrc: reader.result
       });
  
     };
   }
 }
  
 upload(){
   console.log(this.uploadForm.value);
  
       
     
 }
}
