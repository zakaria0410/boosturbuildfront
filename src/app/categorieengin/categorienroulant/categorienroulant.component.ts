import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Categorieenginnroulant } from 'src/app/models/categorieenginnroulant';
import { CategorieenginnroulantService } from 'src/app/service/categorieenginnroulant.service';

@Component({
  selector: 'app-categorienroulant',
  templateUrl: './categorienroulant.component.html',
  styleUrls: ['./categorienroulant.component.scss']
})
export class CategorienroulantComponent implements OnInit {
  cats:Categorieenginnroulant[]=[]
  iscreate!: boolean;
  displayBasic!: boolean;
  imgFile!: string;
  file:any
  isoriginaltof:boolean=true
  userForm = new FormGroup({
    idcategorieEngin:new FormControl(''),
    designation: new FormControl('', Validators.required),
    libelle: new FormControl('')
   
}); 
onImageChange(e:any) {
  this.isoriginaltof=false
  const reader = new FileReader();

  if(e.target.files && e.target.files.length) {
    console.log("changement image")
       const [file] = e.target.files;

    reader.readAsDataURL(file);
  this.file=file
    reader.onload = () => {
      this.imgFile = reader.result as string;
     

    };
  }
}
  constructor(private catservice:CategorieenginnroulantService,
    private sanitizer: DomSanitizer,

    private http:HttpClient) { }

  ngOnInit(): void {
this.list();

  }


  list() {
    const promise = new Promise<void>((resolve, reject) => {
      const apiURL = this.catservice.apiUrl
      const httpoptions=this.catservice.httpOptions
      this.http
        .get<Categorieenginnroulant[]>(apiURL+'list',httpoptions
        )
        .toPromise()
        .then((res: any) => {
     console.log(res)
          this.cats = res.map((res: any) => {
            const caty= new Categorieenginnroulant(
              res.idcategorieEngin,
              res.designation,
              res.libelle
            
            );
          caty.image=res.image
          caty.imageext=res.imageext
        return caty  });
          resolve();
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }

  image(cat:Categorieenginnroulant):SafeUrl{

    
  let objectURL = 'data:image/'+cat.imageext+';base64,' + cat.image;
  return  this.sanitizer.bypassSecurityTrustUrl(objectURL)
 }
 isemptyImage(cat:Categorieenginnroulant):boolean{
   return cat.image===null
 }

id(cat:Categorieenginnroulant):any{
  return cat.idcategorieEngin
}

showBasicDialog(ci:any) {
  if(ci==null) {this.iscreate=true
     this.displayBasic = true;
     this.userForm = new FormGroup({
      idcategorieEngin:new FormControl(''),
      designation: new FormControl('', Validators.required),
      libelle: new FormControl()
  });  }
  else {this.iscreate=false
    this.displayBasic = true;
    this.userForm.patchValue({ idcategorieEngin:ci.idcategorieEngin,
      designation: ci.designation,
      libelle: ci.libelle,
      
    }
     
    )
    console.log()
    let objectURL = 'data:image/'+ci.imageext+';base64,' + ci.image;
    this.imgFile=objectURL
  }
 }
 submit() {
  console.log(JSON.stringify(this.userForm.value))
 if(this.iscreate) this.create()
 else this.update()}
 dataURItoBlob(dataURI:any) {
  const byteString = window.atob(dataURI);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([int8Array], { type: 'image/png' });    
  return blob;
}
 create():void{
  let idcreate:number;

this.catservice.create(this.userForm.value).subscribe(
(data)=>{
  console.log("IIIIDIDIDIDID Nouveau Cat "+data)
  this.catservice.upload(data,this.file).subscribe(
data=>{this.catservice.list().subscribe(
  data=>this.cats=data,
  error=>console.log(error)
)
  this.displayBasic=false}

  );
 
},error=>{
 idcreate=0 
  console.log(error)
})






}
 update():void{
  let idcreate:number;
  
this.catservice.update(this.userForm.value.idcategorieEngin,this.userForm.value).subscribe(
(data)=>{
  console.log("IIIIDIDIDIDID Nouveau Cat "+data)
  if(!this.isoriginaltof){
    this.catservice.upload(this.userForm.value.idcategorieEngin,this.file).subscribe(
      data=>{this.catservice.list().subscribe(
        data=>this.cats=data,
        error=>console.log(error)
      )
        this.displayBasic=false}
      
        );
  }else{
    this.catservice.list().subscribe(
      data=>this.cats=data,
      error=>console.log(error)
    )
      this.displayBasic=false
  }
 
 
},error=>{
 idcreate=0 
  console.log(error)
})






}
delete(cat:Categorieenginnroulant){
  this.catservice.delete(cat.idcategorieEngin).subscribe(
    data=>{
      this.catservice.list().subscribe(
        data=>this.cats=data,
        error=>console.log(error)
      )
    }
  )
}

}
