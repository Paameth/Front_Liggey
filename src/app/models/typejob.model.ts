export enum TypeContrat {
  STAGE = 'STAGE',
  CDD = 'CDD',
  CDI = 'CDI'
}

export interface TypeJob{
    intitule:string;
    salaire:number;
    contrat:TypeContrat;
    ville:string;
    
}

