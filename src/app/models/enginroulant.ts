import { Categorieenginroulant } from "./categorieenginroulant";
import { Centreinvestissement } from "./centreinvistissement";
import { Unitemesure } from "./unitemesure";

export class EnginRoulant {
  
      idmoyenmateriel:number|any;

      code !:string;
    dtype!:string
     marque!:string;
    modele!:string;
       categorieenginIdcategorieengin!:Categorieenginroulant;
 
       depotIdcentreinvestissement!:Centreinvestissement;
       anneesamortissement!: any;
       dateacquisition!: Date;
       nbjourannees!: any;
       vachat!: any;
       unitecompteur!:Unitemesure
      }
export class vehiculeUtilitaaire extends  EnginRoulant{
      matricule!:string
}

export class MoyenLogistique extends EnginRoulant{
      capacite!:string
}