import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

export interface Recruteur {
  id?: number;
  nomEntreprise?: string;
  secteurEntreprise?: string;
  user?: {
    login?: string;
    firstName?: string;
    lastName?: string;
  };
}

@Injectable({
  providedIn: 'root'
})


export class RecruteurService {

  private baseUrl = 'http://localhost:8080/api/register-recruteur';
  private authUrl='http://localhost:8080/api/authenticate';
  private UrlLogin='http://localhost:8080/api/recruteurs/is-recruteur';
  private apiUrl = 'http://localhost:8080/api/recruteurs/me'; //
  constructor(private http:HttpClient) { }

  register(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}`, data);
}

login(data: any): Observable<any> {
  return this.http.post(`${this.authUrl}`, data, {
    observe: 'response'
  });

}

isRecruteur(): Observable<boolean> {
  const token = localStorage.getItem('auth_token');

  return this.http.get<boolean>(this.UrlLogin, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

getCurrentRecruteur(): Observable<Recruteur> {
  const token = localStorage.getItem('auth_token');
  return this.http.get<Recruteur>('http://localhost:8080/api/recruteurs/current', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}


updateCurrentRecruteur(data: Recruteur): Observable<Recruteur> {
  return this.http.put<Recruteur>('http://localhost:8080/recruteurs/current', data);
}

getRecruteur(): Observable<any> {
  const token = localStorage.getItem('auth_token');
  const headers = token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : undefined;
  return this.http.get<any>(`${this.baseUrl}/me`, { headers });
}
getRecruteurConnecte(): Observable<{ id: number }> {
  const token = localStorage.getItem('auth_token');
  return this.http.get<{ id: number }>('http://localhost:8080/api/recruteurs/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
}

