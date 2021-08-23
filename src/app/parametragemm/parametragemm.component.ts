import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnginRoulant } from '../models/enginroulant';
import { Lignegrillekm } from '../models/lignegrillekm';
import { Planentretien, PlanentretienCompteur, PlanentretienTemporel } from '../models/planentretien';
import { Planmaintenance } from '../models/planmaintenance';
import { TarifEngin, TarifGrille, TarifPonctuel } from '../models/tarif-engin';
import { Unitemesure } from '../models/unitemesure';
import { EnginroulantService } from '../service/enginroulant.service';
import { LignegrillekmService } from '../services/lignegrillekm.service';
import { PlanentretienService } from '../services/planentretien.service';
import { PlanmaintenanceService } from '../services/planmaintenance.service';
import { TarifsService } from '../services/tarifs.service';
import { UnitemesureService } from '../services/unitemesure.service';

@Component({
  selector: 'app-parametragemm',
  templateUrl: './parametragemm.component.html',
  styleUrls: ['./parametragemm.component.scss']
})
export class ParametragemmComponent implements OnInit {
  iscreate!: boolean;
  displayUnit!: boolean;


  constructor(  private activatedroute:ActivatedRoute,
    private router:Router,
    private mmService:EnginroulantService,
    private unitService:UnitemesureService,
    private tarifService:TarifsService,
    private ligneGrilleKmService:LignegrillekmService,
    private plmService:PlanmaintenanceService,
    private plenService:PlanentretienService
    ) { }
mm:any
typeMM!:string
vachat:number=0
date:Date=new Date()
units:any
tarifs:any
typeTarif!:string
tarifSelectd:any
displayBasic!: boolean;
displayLg!:boolean

typesFacturation = [
  {label: 'Ponctuelle', value: 'Pc'},
  {label: 'Grille Km', value: 'Grille'}
];
userForm = new FormGroup({
 
  idtarificationengin: new FormControl(''),
  moyenmaterielIdmoyenmateriel: new FormControl(''),
  unitemesureIdunitemesure: new FormControl(''),
  pu: new FormControl(''),
  objectif: new FormControl('')

 
});

ligneGrilleForm=new FormGroup({
  kmmin!: new FormControl(''),
  kmmax!: new FormControl(''),
  iskm!: new FormControl(''),
  isqte!: new FormControl(''),
  objectifkmjr:new FormControl('')
})

ligneUniteForm=new FormGroup({
  idunitemesure!: new FormControl(''),
  designation!: new FormControl(''),
  libelle!: new FormControl(''),
  isparc!: new FormControl(''),
})
map = new Map();
plansM:Planmaintenance[]=[]
planM2:Planentretien[]=[]
draggedProduct: any;
typesPlanEntretien = [
  {label: 'compteur', value: 'Cp'},
  {label: 'periodique', value: 'Tmp'}
];
typeEntretien:string=""
planEntretienForm=new FormGroup({
  
  idplanentretien!: new FormControl(''),

  moyenmaterielIdmoyenmateriel!: new FormControl(''),
  planmaintenanceIdplanmaintenance!: new FormControl(''),
  puperiodicitecompteur!: new FormControl(''),
  periodicitetemporelle!: new FormControl(''),
  unite!:new FormControl('')
})


displayEntretien:boolean=false


fetchdata() {
  this.plmService.planMM(this.mm.idmoyenmateriel).subscribe(
    data=>this.plansM=data
  )
}
fetchdata2(){
this.plenService.list(this.mm.idmoyenmateriel).subscribe(
  data=>this.planM2=data
)
}
periodicite(pl:Planentretien){

}

dragStart(product: Planmaintenance) {
  this.draggedProduct = product;
}

drop() {
  if (this.draggedProduct) {
    this.displayEntretien=true
  }
}

dragEnd() {
 // this.draggedProduct = null;
}

findIndex(product: Planmaintenance) {
  let index = -1;
  for(let i = 0; i < this.plansM.length; i++) {
      if (product.idplanmaintenance === this.plansM[i].idplanmaintenance) {
          index = i;
          break;
      }
  }
  return index;
}



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
changeUnite(event:any){
  console.log(event)
 if(event.value.idunitemesure===0) this.showUnitDialog()
}
  ngOnInit(): void {
    const id=this.activatedroute.snapshot.params.idmm
    this.mmService.getMM(id).subscribe(
      data=>{this.mm=data
this.alimentUnit()
this.tarifService.list(this.mm.idmoyenmateriel).subscribe(
  data=>{this.tarifs=data
  
  
  this.alimentmap()
  }
)

      this.correspondance(this.mm)
    this.fetchdata()
    this.fetchdata2()}


    )

  }
  alimentmap():void{
    this.tarifs.forEach((element: TarifEngin) => {
      if(element.type==='grillekm'){ this.ligneGrilleKmService.list(element.idtarificationengin).subscribe(
         data=>this.map.set(element.idtarificationengin,data)
       )}
       if(element.type==='ponctuel'){
   let el=element as TarifPonctuel
         this.map.set(element.idtarificationengin,el)
       }
     });
  }
  classevalue(t:TarifEngin):any{
    if (typeof this.map.get(t.idtarificationengin) !== "undefined") return this.map.get(t.idtarificationengin).constructor.name
      else return null}
  value(t:TarifEngin):any{
if(this.map.get(t.idtarificationengin).constructor.name==='Array')return this.map.get(t.idtarificationengin)
else return this.map.get(t.idtarificationengin)
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
  showLGDialog (ci:TarifEngin,lg:any) {
    if(lg===null){
      this.displayLg = true;
         this.ligneGrilleForm=new FormGroup({
          kmmin: new FormControl(''),
          kmmax: new FormControl(''),
          iskm: new FormControl(''),
          isqte: new FormControl(''),
          objectifkmjr:new FormControl(''), 
        pu:new FormControl('')})
        this.tarifSelectd=ci
    }}    

    showBasicDialog (ci:any) {
      if(ci===null){
        this.displayBasic = true;
   
           this.userForm = new FormGroup({
            idtarificationengin: new FormControl(''),
            moyenmaterielIdmoyenmateriel: new FormControl(''),
            unitemesureIdunitemesure: new FormControl(''),
            pu: new FormControl(''),
            objectif: new FormControl('')
             
          });
  
          this.iscreate=true
      }} 


  
  correspondancetarif(ci:TarifEngin):any{
    if(ci.type==="ponctuel"){return "Pc"
   }
    else if(ci.type==="grillekm"){return "Grille"
   }
 
 }
 deleteTarif(ci:TarifEngin){
   this.tarifService.delete(this.correspondancetarif(ci),ci.idtarificationengin).subscribe(
     data=>this.tarifService.list(this.mm.idmoyenmateriel).subscribe(
       data=>this.tarifs=data
     )
   )
 }
  correspondance(ci:EnginRoulant):void{
    if(ci.dtype==="engin"){this.typeMM= "Eg"
   }
    else if(ci.dtype==="moyenLogistique"){this.typeMM="Log"
   }
    else if(ci.dtype==="vehiculeUtilitaire"){this.typeMM= "Vu"
  }
 }

 correspondancePlanEn(ci:Planentretien):any{
  if(ci.type==="cp"){return "Cp"
 }
  else if(ci.type==="tmp"){return "Tmp"
 }
  
}




  submit(){
  //  this.mm.vachat=this.vachat
    
    console.log(this.date)
    this.mm.dateacquisition=this.date
    console.log("data mm"+JSON.stringify(this.mm))
this.mmService.update(this.mm,this.typeMM,this.mm.idmoyenmateriel).subscribe(
  data=>{
    console.log(data)
    const id=this.activatedroute.snapshot.params.idmm
    this.mmService.getMM(id).subscribe(
      data=>this.mm=data
    )
  }
)
  }
  submitTarif(){
console.log(this.userForm.value)
const tarif:TarifEngin=this.userForm.value
tarif.moyenmaterielIdmoyenmateriel=this.mm
  this.tarifService.create(tarif,this.typeTarif).subscribe(
    data=>{
      console.log(data)
      
      this.tarifService.list(this.mm.idmoyenmateriel).subscribe(
        data=>{this.tarifs=data
          this.alimentmap()
        this.displayBasic=false
    }

      )
    }
  )
    }
    submitEntretien(){
      console.log(this.draggedProduct)
if(this.typeEntretien==="Cp"){
  const planen:PlanentretienCompteur=this.userForm.value
  planen.moyenmaterielIdmoyenmateriel=this.mm
  planen.planmaintenanceIdplanmaintenance=this.draggedProduct

    this.plenService.create(planen,this.typeEntretien).subscribe(
      data=>{
        console.log(data)
        
        this.tarifService.list(this.mm.idmoyenmateriel).subscribe(
          data=>{this.tarifs=data
            this.alimentmap()
          this.displayBasic=false
      }
  
        )
      }
    )
}
if(this.typeEntretien==="Tmp"){
  const planen:PlanentretienTemporel=this.userForm.value
  planen.moyenmaterielIdmoyenmateriel=this.mm
  planen.planmaintenanceIdplanmaintenance=this.draggedProduct

    this.plenService.create(planen,this.typeEntretien).subscribe(
      data=>{
        console.log(data)
        
        this.tarifService.list(this.mm.idmoyenmateriel).subscribe(
          data=>{this.tarifs=data
            this.alimentmap()
          this.displayBasic=false
      }
  
        )
      }
    )
}
     
          }
          deletePl(pl:Planentretien){
this.plenService.delete(this.correspondancePlanEn(pl),pl.idplanentretien).subscribe(
  data=>{
    this.fetchdata()
    this.fetchdata2()
  }
)
          }
    submitLG(){
      let ligne:Lignegrillekm=new Lignegrillekm
      ligne=this.ligneGrilleForm.value
ligne.grillekmIdtarificationengin=this.tarifSelectd
      console.log(JSON.stringify(ligne))

this.ligneGrilleKmService.create(ligne).subscribe(
  data=>{
    this.alimentmap()
    this.displayLg=false
  }
)



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

  changevachat(event:any){
    console.log(event +" value="+event.targer.value)
  }






}
