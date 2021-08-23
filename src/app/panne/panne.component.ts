import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EnginRoulant } from '../models/enginroulant';
import { Panne } from '../models/panne';
import { EnginroulantService } from '../service/enginroulant.service';
import { InterventionmecaniqueService } from '../services/interventionmecanique.service';
import { PanneService } from '../services/panne.service';

@Component({
  selector: 'app-panne',
  templateUrl: './panne.component.html',
  styleUrls: ['./panne.component.scss']
})
export class PanneComponent implements OnInit {
  iscreate!: boolean;
  selectedProduct1!: Panne;
  constructor(private mmService:EnginroulantService,
    private panneService:PanneService,
    private interventionService:InterventionmecaniqueService) { }
  mms:EnginRoulant[]=[]
  pannes:Panne[]=[]
  displayBasic!:boolean
  panneForm = new FormGroup({
    idpanne: new FormControl(''),
    type: new FormControl(''),
    designation: new FormControl(''),
    description: new FormControl(''),
    moyenmaterielIdmoyenmateriel: new FormControl(''),
    datedebutpanne:new FormControl(''),
   
    datefinpanne:new FormControl('')
   
});

map=new Map<Panne,any>()

alimentmap(p:Panne){


this.interventionService.getInt(p.idpanne,this.interventionService.typerepara).subscribe(
  data=>{
    console.log("data for panne"+p.idpanne+" est "+data)
    this.map.set(p,data)}
)


}



  fetchDate():void{
    this.mmService.list("All").subscribe(
    data=>{console.log(data)
      this.mms=data
    },
    error=>console.log(error)
    )
    this.panneService.list().subscribe(
data=>{
  console.log(data)
  this.pannes=data
  this.pannes.forEach(e=>this.alimentmap(e))
}
    )
 //   console.log(this.mms)
    }


    value(p:Panne):any{
      return  this.map.get(p)
    }
    create():void{
      this.panneService.create(this.panneForm.value).subscribe(
        data=>{this.fetchDate()
        this.displayBasic=false}
      )
    }
    update():void{
      this.panneService.update(this.panneForm.value).subscribe(
        data=>{this.fetchDate()
        this.displayBasic=false}
      )
    }
    delete(panne:Panne){
      this.panneService.delete(panne.idpanne).subscribe(
        data=>this.fetchDate()
      )
    }
    submit():void{
     if(this.iscreate)this.create()
     else this.update()
    }
    showBasicDialog(ci:any) {
      if(ci===null){
        this.displayBasic = true;
           this.  panneForm = new FormGroup({
            idpanne: new FormControl(''),
            type: new FormControl(''),
            designation: new FormControl(''),
            description: new FormControl(''),
            moyenmaterielIdmoyenmateriel: new FormControl(''),
            datedebutpanne:new FormControl(''),
   
            datefinpanne:new FormControl('')
           
        })
          this.iscreate=true
      }else{
 
        this.panneForm.patchValue({
          idpanne: ci.idpanne,
          type: ci.type,
          designation: ci.designation,
          description: ci.description,
          moyenmaterielIdmoyenmateriel: ci.moyenmaterielIdmoyenmateriel,
          datedebutpanne:new Date(ci.datedebutpanne),
   
          datefinpanne:ci.datefinpanne
      
      
      
           
        });
        this.iscreate=false
        this.displayBasic=true;
      }
            }
  ngOnInit(): void {
    this.fetchDate()
  }

}
