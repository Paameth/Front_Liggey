import { HttpClient, HttpParams } from '@angular/common/http';
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

    
}

