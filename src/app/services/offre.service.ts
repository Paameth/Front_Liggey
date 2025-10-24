import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OffreModel } from '../models/offre.model';

export interface Offre {
  id: number;
  intitule: string;
  description: string;
  poste: string;
  localisation: string;
  nombrePostes: number;
  photo?: string;
  typeContrat?: string;
  remuneration?: number;
  datePublication?: string;
  dateExpiration?: string;
  recruteurId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  
    private baseUrl = 'http://localhost:8080/api/offres/_search/offres'; // change selon ton backend
    private allOffresUrl = 'http://localhost:8080/api/offres'; // URL pour récupérer toutes les offres
    private apiUrl = 'http://localhost:8080/api/offres'; // Ton backend JHipster

    constructor(private http: HttpClient) {}

    getAllOffres(): Observable<OffreModel[]> {
      return this.http.get<OffreModel[]>(this.allOffresUrl);
    }

    getOffreById(id: number): Observable<OffreModel> {
  return this.http.get<OffreModel>(`http://localhost:8080/api/offres/${id}`);
}


    rechercherOffres(localisation?: string, poste?: string, typeContrat?: string): Observable<any> {
  let params = new HttpParams();

  if (localisation) {
    params = params.set('localisation', localisation);
  }
  if (poste) {
    params = params.set('poste', poste);
  }
  if (typeContrat) {
  params = params.set('typeContrat', typeContrat.toUpperCase());
}

  return this.http.get(`${this.baseUrl}`, { params });
}


//Ffontion de l'API ajouter offre

  // offre.service.ts
ajouterOffre(offre: any): Observable<any> {


  const token=localStorage.getItem('auth_token');
  const headers=token ? new HttpHeaders({'Authorization':`Bearer ${token}`}):undefined;
  console.log("Objet envoyé :", offre);

  return this.http.post('http://localhost:8080/api/offres', offre,{headers});
}


    //  Méthode pour récupérer toutes les offres
  getOffres(): Observable<any[]> {

    const token=localStorage.getItem('auth_token');
    const headers=token ? new HttpHeaders({'Authorization':`Bearer ${token}`}):undefined;

    return this.http.get<any[]>(this.apiUrl , {headers});
  }

  //  Méthode pour récupérer une offre par ID
  getOffreById(id: number): Observable<any> {
    const token=localStorage.getItem('auth_token');
    const headers=token ? new HttpHeaders({'Authorization':`Bearer ${token}`}):undefined;

    return this.http.get<any>(`${this.apiUrl}/${id}`,{headers});
  }


  //  Modification d'une offre
  modifierOffre(id: number, offreData: any): Observable<any> {
    const token=localStorage.getItem('auth_token');
    const headers=token ? new HttpHeaders({'Authorization':`Bearer ${token}`}):undefined;


  return this.http.put(`${this.apiUrl}/${id}`, offreData ,{headers});
}
getRecruteur(): Observable<any> {
  const token = localStorage.getItem('auth_token');
  const headers = token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : undefined;
  return this.http.get<any>(`${this.baseUrl}/me`, { headers });
}



}