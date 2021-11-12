export class Produit {
    ref: string;
    libelle: string;
    prix: number;
    photo: string;

    //constructor(ref:string,libelle:string,prix:number){this.ref = ref;this.libelle = libelle;this.prix = prix}
    constructor(){this.ref = "";this.libelle = "";this.prix = 0;this.photo="";}
  }