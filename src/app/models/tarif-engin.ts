import { EnginRoulant } from "./enginroulant"
import { Unitemesure } from "./unitemesure";

export class TarifEngin {
    idtarificationengin!: number
    moyenmaterielIdmoyenmateriel!: EnginRoulant
    unitemesureIdunitemesure!: Unitemesure
    type!: string
}
export class TarifPonctuel  extends TarifEngin{
    pu!: number
    objectif!: number
}
export class TarifGrille      extends TarifEngin{

}