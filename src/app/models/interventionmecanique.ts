import { Panne } from "./panne"
import { Planentretien } from "./planentretien"

export class Interventionmecanique {
    idinterventionmecanique!: number
    datedebut!: string
    datefin!: string
    statut!: string
    type!: string
}
export class InterventionMainntenance extends Interventionmecanique{
    planentretienIdplanentretien!: Planentretien
}

export class ReparationPanne extends Interventionmecanique{
    panneIdpanne!:Panne
}