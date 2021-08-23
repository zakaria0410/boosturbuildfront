import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Centreinvestissement } from 'src/app/models/centreinvistissement';
import { CentreinvistissementService } from 'src/app/service/centreinvistissement.service';
import { MessageService } from 'primeng/api';
import { DepotService } from 'src/app/service/depot.service';
declare var google: any;
@Component({
  selector: 'app-centreinvistissement',
  templateUrl: './centreinvistissement.component.html',
  styleUrls: ['./centreinvistissement.component.scss'],
  
    providers: [MessageService]
})
export class CentreinvistissementComponent implements OnInit {
  cis: Centreinvestissement[]=[];
  ci!: Centreinvestissement;
  type!:string
  iscreate:boolean=true
  ismap:boolean=false
  options: any;
overlays!:any[]
infoWindow: any;
filter():boolean{
  return true
}
 cities = [
  'Depot Materiel',
   'Chantier',
 'Usine',
  'Administration',
   'Magasin'
];
  displayBasic: boolean=false;
  userForm = new FormGroup({
    idcentreinvestissement:new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    libelle: new FormControl(),
    adresse:new FormControl(),
 
    ville:new FormControl(),
  
    pays:new FormControl(),


    x:new FormControl(),

   y:new FormControl(),
}); 
statuses = [
  {label: 'Depot Materiel', value: 'dp'},
  {label: 'Chantier', value: 'ch'},
  {label: 'Administration', value: 'ad'},
  {label: 'Magasin', value: 'mag'},
  {label: 'Usine', value: 'us'}
];
    constructor(private ciservice: CentreinvistissementService,
      private depotservice:DepotService,
      private messageService:MessageService) { }

    ngOnInit() {
      this.overlays=[]
        this.ciservice.list().subscribe(data =>{ 
          this.cis = data
          this.cis.forEach(e=>{
            console.log("add map"+e.designation)
            this.overlays.push(new google.maps.Marker(
              {position:
                 {lat: Number(e.x), lng: Number(e.y)}
                 , title:e.libelle}))
          
                  
          }
        
        )});
        this.options = {
          center: {lat: 31.629340629876086 , lng:  -8.009572769588566},
          zoom: 6
      };
      this.infoWindow = new google.maps.InfoWindow();
  
    }
    handleOverlayClick(event:any) {
      let isMarker = event.overlay.getTitle != undefined;

      if (isMarker) {
      
          let title = event.overlay.getTitle();
          this.infoWindow.setContent('' + title + '');
          this.infoWindow.open(event.map, event.overlay);
          event.map.setCenter(event.overlay.getPosition());
console.log(event.overlay.getPosition().lat)
        
      }
     
  }
    showBasicDialog(ci:any) {
   if(ci==null) {this.iscreate=true
      this.displayBasic = true;
      this.userForm = new FormGroup({
        idcategorieEngin:new FormControl(''),
        designation: new FormControl('', Validators.required),
        libelle: new FormControl(),
        image:new FormControl()
    }); }
   else {this.iscreate=false
     this.userForm.patchValue({
      idcentreinvestissement:ci.idcentreinvestissement,
      designation:ci.designation,
      libelle: ci.libelle,
      adresse:ci.adresse,
 
      ville:ci.ville,
    
      pays:ci.pays,
  
  
      x:ci.x,
  
     y:ci.y,
     })
     this.displayBasic = true;
   }
  }
  changerView(){
    this.ismap=!this.ismap
  }
  submit(){
    if(this.userForm.valid){

    this.displayBasic=false
    this.ci=this.userForm.value
    console.log(JSON.stringify(this.ci))
  if(this.iscreate)  {
    if(this.type!=='dp'){
      this.ciservice.create(this.ci).subscribe(
        data=>{console.log(JSON.stringify(data))
         this.ciservice.list().subscribe(data => this.cis = data) 
         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Centre Ajouté', life: 3000});
       },
        error=>{
         this.messageService.add({severity:'error', summary: 'error', detail: error, life: 3000});
   
        }
      )
    }else{
      this.depotservice.create(this.ci).subscribe(
        data=>{console.log(JSON.stringify(data))
         this.ciservice.list().subscribe(data => this.cis = data) 
         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Centre Ajouté', life: 3000});
       },
        error=>{
         this.messageService.add({severity:'error', summary: 'error', detail: error, life: 3000});
   
        }
      )
    }

   }
   else{
    this.ciservice.update(this.ci).subscribe(
      data=>{console.log(JSON.stringify(data))
       this.ciservice.list().subscribe(data => this.cis = data)  
       this.messageService.add({severity:'success', summary: 'Successful', detail: 'Centre Modifié Avec Succés', life: 3000});
      },
      error=>alert(error)
    )
   }
  
  }
   
   
   
    else{
      alert("centre invaalid")
    }}
    delete(ci:Centreinvestissement){
      this.ciservice.delete(ci.idcentreinvestissement).subscribe(
        data=>{console.log(data)
          this.ciservice.list().subscribe(data => this.cis = data)
          this.messageService.add({severity:'warning', summary: 'Warning', detail: 'Centre Supprimé Avec Succés', life: 3000});
        }
      )
    }
}
