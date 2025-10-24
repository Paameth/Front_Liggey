import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private baseUrl = 'http://localhost:8080/api/register-candidat';
  private authUrl='http://localhost:8080/api/authenticate';
  private UrlLogin='http://localhost:8080/api/candidats/is-candidat';
  private completerUrl='http://localhost:8080/api/candidats/complete-profile'
  private getCandidatUrl='http://localhost:8080/api/candidats/candidat';
  private ajoutTravailUrl='http://localhost:8080/api/candidats/ajouter-travail-recherche';
  private ajoutExperienceUrl='http://localhost:8080/api/experiences/ajouter-experience';
  constructor(private http:HttpClient) { }

  register(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}`, data);
}

login(data: any): Observable<any> {
  return this.http.post(`${this.authUrl}`, data, {
    observe: 'response'
  });

}

isCandidat(): Observable<boolean> {
  const token = localStorage.getItem('auth_token');

  return this.http.get<boolean>(this.UrlLogin, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}


 getCurrentCandidat(): Observable<any> {
  const token = localStorage.getItem('auth_token');
  const headers = token ?new HttpHeaders({
    Authorization: `Bearer ${token}`,
  }) : undefined;

  return this.http.get(this.getCandidatUrl, { headers });
}
CompleterProfil(data: FormData): Observable<any> {

    // Récupérer le token JWT depuis localStorage
    const token = localStorage.getItem('auth_token');

    const headers = token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : undefined;

  
    return this.http.post(this.completerUrl, data, {headers});
  }


  

   AjouterTravail(formData: FormData): Observable<any> {
  const token = localStorage.getItem('auth_token');
  const headers = token ? new HttpHeaders({
    Authorization: `Bearer ${token}`,
  }) : undefined;

  return this.http.post(this.ajoutTravailUrl, formData, { headers });
}

 AjouterExperience(formData: FormData): Observable<any> {
  const token = localStorage.getItem('auth_token');
  const headers = token ? new HttpHeaders({
    Authorization: `Bearer ${token}`,
  }) : undefined;

  return this.http.post(this.ajoutExperienceUrl, formData, { headers });
}



}
