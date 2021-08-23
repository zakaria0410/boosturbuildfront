export class Centreinvestissement {

    idcentreinvestissement!:any;
       
      designation!:string;
  
  
     libelle!:string;
  
      adresse!:string;
  
      ville!:string;
    
      pays!:string;
  
  dtype!:string;
      x!:number;
  
     y!:number;
  
  constructor(
     idcentreinvestissement:any,
      designation:string,
  
  
     libelle:string,
  
      adresse:string,
  
      ville:string,
    
      pays:string,
  
  
      x:number,
  
     y:number,
  )
      {this.idcentreinvestissement=idcentreinvestissement;
         this. designation=designation;
  
  
  this.        libelle=libelle;
       
           this.adresse=adresse;
       
           this.ville=ville;
         
           this.pays=pays;
       
       
           this.x=x;
       
        this.y=y;
      }
  
  }
  