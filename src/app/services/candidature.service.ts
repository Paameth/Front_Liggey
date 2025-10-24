import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  private apiUrl = 'http://localhost:8080/api/candidatures';

  constructor(private http: HttpClient) { }

  postuler(offreId: number): Observable<any> {
  const token = localStorage.getItem('auth_token'); // ou via AuthService
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  });
  return this.http.post(`${this.apiUrl}/postuler/${offreId}`, {}, { headers });
}
}
