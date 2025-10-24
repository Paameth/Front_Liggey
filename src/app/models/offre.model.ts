export interface OffreModel {
  id: number;
  dateExpiration: string;
  datePublication: string;
  intitule: string;
  localisation: string;
  typeContrat: string;
  nombrePostes: number;
  poste:string;
  description:string;
  photo:string;
  remuneration:string;
  statut:string;
  // ajoute d'autres champs si besoin
}
