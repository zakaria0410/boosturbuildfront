import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categorieenginnroulant } from 'src/app/models/categorieenginnroulant';
import { Categorieenginroulant } from 'src/app/models/categorieenginroulant';
import { Centreinvestissement } from 'src/app/models/centreinvistissement';
import { EnginRoulant, MoyenLogistique, vehiculeUtilitaaire } from 'src/app/models/enginroulant';
import { Unitemesure } from 'src/app/models/unitemesure';
import { CategorieenginnroulantService } from 'src/app/service/categorieenginnroulant.service';
import { CategorieenginroulantService } from 'src/app/service/categorieenginroulant.service';
import { DepotService } from 'src/app/service/depot.service';
import { EnginroulantService } from 'src/app/service/enginroulant.service';
import { UnitemesureService } from 'src/app/services/unitemesure.service';


@Component({
  selector: 'app-enginr',
  templateUrl: './enginr.component.html',
  styleUrls: ['./enginr.component.scss']
})
export class EnginrComponent implements OnInit {

  mms:[]=[]
  typeMM!:string
  typeMM1:string="All"
  displayBasic!: boolean;
  catSelected!:Categorieenginnroulant
  depot!:Centreinvestissement
  cats:any
  depots:any
  mmcreate: any;
  iscreate!:boolean
  units:Unitemesure[]=[]
  displayUnit!: boolean;
  correspondance(ci:EnginRoulant):void{
    if(ci.dtype==="engin"){this.typeMM= "Eg"
    this.catnrService.list().subscribe(
      data=>this.categories=data
    )
  }
    else if(ci.dtype==="moyenLogistique"){this.typeMM="Log"
    this.catrService.list().subscribe(
      data=>this.categories=data)}
    else if(ci.dtype==="vehiculeUtilitaire"){this.typeMM= "Vu"
    this.catrService.list().subscribe(
      data=>this.categories=data)}
 }



types = [
    {label: 'Engin', value: 'Eg'},
    {label: 'Moyen Logistique', value: 'Log'},
    {label: 'Véhicule Utilitaire', value: 'Vu'}
];
  userForm = new FormGroup({
    idengin:new FormControl(''),
  code :new FormControl(''),
  marque:new FormControl(''),
    modele:new FormControl(''),
 categorieenginIdcategorieengin:new FormControl(''),
depotIdcentreinvestissement:new FormControl(''),
matricule:new FormControl(''),
capacite:new FormControl('')
   
}); 
ligneUniteForm=new FormGroup({
  idunitemesure!: new FormControl(''),
  designation!: new FormControl(''),
  libelle!: new FormControl(''),
  isparc!: new FormControl(''),
})
dataSource:any

alimentUnit(){
  this.unitService.list().subscribe(
    data=>{this.units=data
      let u=new Unitemesure
      u.idunitemesure=0
u.designation="nouvelle unite"
    this.units.push(u)
    }
  )
}


  onChangeType(event:any) {
 
    console.log(event.value);
    this.typeMM=event.value
    if(event.value==="Eg"){
      this.catnrService.list().subscribe(
        data=>this.categories=data
      )
    }
    else{
      this.catrService.list().subscribe(
        data=>this.categories=data
      )
    }
}
categories:any





showBasicDialog(ci:any) {
if(ci===null){
  this.displayBasic = true;
     this.userForm = new FormGroup({
      code :new FormControl(''),
      type :new FormControl(''),
         marque:new FormControl(''),
        modele:new FormControl(''),
     categorieenginIdcategorieengin:new FormControl(''),
    depotIdcentreinvestissement:new FormControl(''),
    matricule:new FormControl(''),
    capacite:new FormControl(''),
    unitemesureIdunitemesure: new FormControl('')
       
    });
    this.iscreate=true
}else{
  this.correspondance(ci)
  this.userForm.patchValue({
    idengin:ci.idmoyenmateriel,
    code :ci.code,

       marque:ci.marque,
      modele:ci.modele,
   categorieenginIdcategorieengin:ci.categorieenginIdcategorieengin,
  depotIdcentreinvestissement:ci.depotIdcentreinvestissement,
  matricule:ci.matricule,
  capacite:ci.capacite,
  unitemesureIdunitemesure: ci.unitecompteur



     
  });
  this.iscreate=false
  this.displayBasic=true;
}
      }
  fetchDate():void{
  this.mmService.list(this.typeMM1).subscribe(
  data=>{console.log(data)
    this.dataSource=data
  },
  error=>console.log(error)
  )
  console.log(this.dataSource)
  }
  submit(){
this.create()
    this.fetchDate()
    console.log(this.userForm.value)
    this.typeMM="All"
    this.displayBasic=false
  
  }
  ngOnInit() {
    this.fetchDate();
this.alimentUnit()
    this.depotService.list().subscribe(
     data=>this.depots=data
   ) 
      }
      changeUnite(event:any){
        console.log(event)
       if(event.value.idunitemesure===0) this.showUnitDialog()
      }


      submitUnit(){
    


        this.unitService.create(this.ligneUniteForm.value).subscribe(
          data=>{
            this.alimentUnit()
            this.userForm.patchValue({    unitemesureIdunitemesure: null}
              
              )
            this.displayUnit=false
          }
        )
        
        
        
            }
      showUnitDialog () {
    
        this.displayUnit = true;
           this.ligneUniteForm=new FormGroup({
            idunitemesure!: new FormControl(''),
            designation!: new FormControl(''),
            libelle!: new FormControl(''),
            isparc!: new FormControl(''),
          })
       
  
        
      }  
    constructor(private mmService:EnginroulantService,
      private catrService:CategorieenginroulantService,
      private catnrService:CategorieenginnroulantService,
      private depotService:DepotService,
      private unitService:UnitemesureService) { }
      create():void{

        if(this.typeMM==="Eg"){
        this.mmcreate=new EnginRoulant
        this.mmcreate.modele=this.userForm.value.modele
      this.mmcreate.marque=this.userForm.value.marque
      this.mmcreate.code=this.userForm.value.code
      this.mmcreate.depotIdcentreinvestissement=this.userForm.value.depotIdcentreinvestissement
      this.mmcreate.categorieenginIdcategorieengin=this.userForm.value.categorieenginIdcategorieengin
      this.mmcreate.type=this.userForm.value.type   }
      if(this.typeMM==="Log"){
        this.mmcreate=new MoyenLogistique
        this.mmcreate.modele=this.userForm.value.modele
        this.mmcreate.marque=this.userForm.value.marque
        this.mmcreate.code=this.userForm.value.code
        this.mmcreate.depotIdcentreinvestissement=this.userForm.value.depotIdcentreinvestissement
        this.mmcreate.categorieenginIdcategorieengin=this.userForm.value.categorieenginIdcategorieengin
  
        this.mmcreate.type=this.userForm.value.type
      this.mmcreate.capacite=this.userForm.value.capacite
      }
      if(this.typeMM==="Vu"){
        this.mmcreate=new vehiculeUtilitaaire
        this.mmcreate.modele=this.userForm.value.modele
        this.mmcreate.marque=this.userForm.value.marque
        this.mmcreate.code=this.userForm.value.code
        this.mmcreate.depotIdcentreinvestissement=this.userForm.value.depotIdcentreinvestissement
        this.mmcreate.categorieenginIdcategorieengin=this.userForm.value.categorieenginIdcategorieengin
        this.mmcreate.type=this.userForm.value.type
      
      this.mmcreate.matricule=this.userForm.value.matricule
      }
      if(this.iscreate){
        this.mmService.create(this.mmcreate,this.typeMM).subscribe(
          data=>{
  
            console.log(data)
          this.fetchDate()},
         error=>console.log(error))
     
      }else{
        this.mmService.update(this.mmcreate,this.typeMM,this.userForm.value.idengin).subscribe(
          data=>{
  
            console.log(data)
          this.fetchDate()},
         error=>console.log(error))
      }  
      
      
}
delete(mm:any){
  this.correspondance(mm)
  this.mmService.delete(this.typeMM,mm.idmoyenmateriel).subscribe(
    data=>this.fetchDate(),
    error=>console.log(error)
  )
}
      }