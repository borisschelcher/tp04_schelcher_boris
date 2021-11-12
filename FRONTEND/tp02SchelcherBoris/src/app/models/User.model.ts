export class User {
    constructor(
      public NOM: string,
      public PRENOM: string,
      public ADRESSE: string,
      public CP: number,
      public VILLE: string,
      public TEL: string,
      public EMAIL: string,
      public CIVILITE: string,
      public PASSWORD: string,
      public PASSWORDCONFIRM: string,
      public LOGIN: string,
      public PAYS: string
    ) {}
  }