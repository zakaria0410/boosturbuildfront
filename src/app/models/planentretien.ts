import { EnginRoulant } from "./enginroulant"
import { Planmaintenance } from "./planmaintenance"

export class Planentretien {
    idplanentretien!: number
   
    moyenmaterielIdmoyenmateriel!: EnginRoulant
    planmaintenanceIdplanmaintenance!: Planmaintenance
    type!:string
}

export class PlanentretienCompteur extends Planentretien{
    puperiodicitecompteur!: number
}
export class PlanentretienTemporel extends Planentretien{
    periodicitetemporelle!: number
    unite!:string
}