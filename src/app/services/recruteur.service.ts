import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecruteurService {

  private baseUrl = 'http://localhost:8080/api/register-recruteur';
  private authUrl='http://localhost:8080/api/authenticate';
  private UrlLogin='http://localhost:8080/api/recruteurs/is-recruteur';
   private getRecruteurUrl='http://localhost:8080/api/recruteurs/recruteur';
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


  getCurrentRecruteur(): Observable<any> {
  const token = localStorage.getItem('auth_token');
  const headers = token ?new HttpHeaders({
    Authorization: `Bearer ${token}`,
  }) : undefined;

  return this.http.get(this.getRecruteurUrl, { headers });
}

}
