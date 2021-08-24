import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import {MessageService, SelectItem} from 'primeng/api';
import { Centreinvestissement } from '../models/centreinvistissement';
import { CentreinvistissementService } from '../service/centreinvistissement.service';
import { RoleService } from '../services/role.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  
  providers: [MessageService]
})
export class UserComponent implements OnInit {
  users:any;
  userSelected:any;
  
  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  displayBasic:boolean=false
  id!:string
  username!:string;
  email!:string;
  firstName!:string;
  lastName!:string;
  password!:string;
  cis:Centreinvestissement[]=[]
  cisAffect:Centreinvestissement[]=[]
 roles:string[]=[]
 rolesAffect:string[]=[]
 iscreate:boolean=false
    constructor(private userService:UserService,
   
    private ciservice:CentreinvistissementService,
    private roleservice:RoleService,
    private messageService:MessageService) { }
  
    ngOnInit(): void {
      this.loadUsers();
      this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];
    this.ciservice.list().subscribe(
      data => {this.cis=data
      console.log("dataaaaaaaaaaaaaa"+JSON.stringify(data))},
      error=>console.log(error)
      

    )
    this.roleservice.list().subscribe(
      data=>this.roles=data,
      error=>console.log("error")
    )
    }
  
    loadUsers():void{
      this.userService.list().subscribe(
        data=>{
          this.users=data;
      },
        error=>console.log(error)
  
      )
    }
    isnullCis(u:User):boolean{
   return   u.attributes===null 
    }
    selectUser(u:User){
      console.log(u);
      this.userSelected=u;
    }
    isselected():boolean{
      if(this.userSelected==null)return false;
      else return true;
    }
    
    showBasicDialog(u:any){
  if(u===null){
    this.iscreate=true
    this.cisAffect=[]
    this.rolesAffect=[]
  }
  else{
    this.iscreate=false
    this.userService.user(u.id).subscribe(
      data=>{console.log(data)
      this.username=data.username
      this.id=data.id
      this.firstName=data.firstName
      this.email=data.email
      this.lastName=data.lastName
 
 if(data.attributes!==null){
  data.attributes.forEach((element: any) => {
    var number=Number(element)
this.ciservice.detail(number).subscribe(
  data1=>this.cisAffect.push(data1),
  error=>console.log(error)
)
    });
 }
    
   // this.roleservice.list()
  })
}
  
  
  this.displayBasic=true
    }
    isaffect(ci:Centreinvestissement):boolean{
      return this.cisAffect.find(e => e.idcentreinvestissement === ci.idcentreinvestissement)!=null
     }






     colorCi(ci:Centreinvestissement):string{
       if(this.isaffect(ci))return "success";
       else return "danger";
     }
     addCentreAffect(ci:Centreinvestissement):void{
      if(!this.isaffect(ci))  this.cisAffect.push(ci);
      else this.RemoveElementFromCisAffect(ci)
        console.log("ci added")
      }
      RemoveElementFromCisAffect(element: Centreinvestissement) {
        this.cisAffect.forEach((value,index)=>{
            if(value==element) this.cisAffect.splice(index,1);
        });
    }
    RemoveElementFromRolesAffect(element: string) {
      this.rolesAffect.forEach((value,index)=>{
          if(value==element) this.rolesAffect.splice(index,1);
      });
    }
    addRoleAffect(ci:string):void{
    if(!this.isaffectRole(ci))  this.rolesAffect.push(ci);
    else this.RemoveElementFromRolesAffect(ci)
    console.log("role added")
    }
    isaffectRole(ci:string):boolean{
    return this.rolesAffect.find(e => e === ci)!=null
    }
    colorRole(ci:string):string{
    if(this.isaffectRole(ci))return "success";
    else return "danger";
    }
    stringfromCis() :string[]{
      let list:string[]=[];
       this.cisAffect.forEach((value)=>{
     list.push(""+value.idcentreinvestissement);
       });
     return list;}
     createUser():void{
       if(this.iscreate){
      console.log(this.rolesAffect)
      const u=new User(null,this.username,this.email,this.firstName,this.lastName,this.password,this.stringfromCis(),this.rolesAffect);
     this.userService.add(u).subscribe(
  data=>{console.log(data)
    this.loadUsers()
  this.messageService.add({severity:'success', summary: 'Successful', detail: 'Utilisateur Ajouté', life: 3000});
},
  error=>console.log(error)
     )
  this.displayBasic=false
  }
  else{
    const u=new User(this.id,this.username,this.email,this.firstName,this.lastName,this.password,this.stringfromCis(),this.rolesAffect);
 this.userService.update(u).subscribe(
data=>{this.loadUsers()
  this.messageService.add({severity:'warning', summary: 'Successful', detail: 'Utilisateur Mis à jour', life: 3000});
},
error=>console.log(error)
 )
 
 this.displayBasic=false
  }
  
    }
}
