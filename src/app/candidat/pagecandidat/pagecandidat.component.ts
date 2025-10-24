import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CandidatComponent } from "../candidat/candidat.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { EnteteComponent } from '../entete/entete.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pagecandidat',
  imports: [SidebarComponent, CandidatComponent, CommonModule, HeaderComponent, FooterComponent,EnteteComponent],
  templateUrl: './pagecandidat.component.html',
  styleUrl: './pagecandidat.component.css'
})
export class PagecandidatComponent {

      constructor(private http: HttpClient) {}
      private cvUrl='http://localhost:8080/api/candidats/upload-cv'

  uploadCv(file: File) {
    const formData = new FormData();
    formData.append('cv', file);

    const token = localStorage.getItem('auth_token');
    const headers = token ? new HttpHeaders({
      Authorization: `Bearer ${token}`,
    }) : undefined;


    this.http.post(this.cvUrl, formData, {headers})
      .subscribe({
        next: () => alert('✅ CV envoyé avec succès !'),
        error: () => alert('❌ Erreur lors de l’envoi du CV')
      });
  }

}
