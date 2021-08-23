import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Planmaintenance } from '../models/planmaintenance';
import { PlanmaintenanceService } from '../services/planmaintenance.service';

@Component({
  selector: 'app-planmaintenance',
  templateUrl: './planmaintenance.component.html',
  styleUrls: ['./planmaintenance.component.scss']
})
export class PlanmaintenanceComponent implements OnInit {
  userForm = new FormGroup({

idplanmaintenance!: new FormControl(''),
designation!: new FormControl(''),
libelle!: new FormControl('')
   
}); 
  plansM:Planmaintenance[]=[]
  displayBasic!: boolean;
  iscreate!: boolean;
  constructor(private plmService:PlanmaintenanceService) { }

  ngOnInit(): void {
this.fetchdata()
  }
  fetchdata() {
    this.plmService.list().subscribe(
      data=>this.plansM=data
    )
  }
  showBasicDialog(ci:any) {
    if(ci===null){
      this.displayBasic = true;
         this.userForm = new FormGroup({
          idplanmaintenance: new FormControl(''),
          designation: new FormControl(''),
          libelle: new FormControl('')
           
        });
        this.iscreate=true
    }else{
  
      this.userForm.patchValue({
        idplanmaintenance: ci.idplanmaintenance,
        designation: ci.designation,
        libelle: ci.libelle
    
    
    
         
      });
      this.iscreate=false
      this.displayBasic=true;
    }
          }
submit():void{
  if(this.iscreate)this.create()
  else this.update()
  this.displayBasic=false
}
create():void{

this.plmService.create(this.userForm.value).subscribe(
  data=>this.fetchdata()
)


}
update():void{
  this.plmService.update(this.userForm.value).subscribe(
    data=>this.fetchdata()
  )
}
delete(pl:Planmaintenance){
  this.plmService.delete(pl.idplanmaintenance).subscribe(
    data=>this.fetchdata()
  )
}

}
