import { Type } from "./type.model";

export class Livre {
    idLivre?: number;
    titre?: string;
    auteur?: string;
    dateParution?: Date;
    nbPages?: number;
    type!:Type;
}
