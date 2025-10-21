import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  
    private baseUrl = 'http://localhost:8080/api/offres/_search/offres'; // change selon ton backend

    constructor(private http: HttpClient) {}

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

