import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ProfilRecruteurComponent } from "../../profil-recruteur/profil-recruteur.component";
import { CommonModule } from '@angular/common';
import { RecruteurService } from "../../services/recruteur.service";
import { OffreComponent } from '../offre/offre.component';
import { OffreencoursComponent } from '../offreencours/offreencours.component';


@Component({
  selector: 'app-pagerecruteur',
  imports: [HeaderComponent, FooterComponent, ProfilRecruteurComponent, CommonModule, OffreComponent,OffreencoursComponent],
  templateUrl: './pagerecruteur.component.html',
  styleUrls: ['./pagerecruteur.component.css']
})
export class PagerecruteurComponent implements OnInit {
  recruteur: any = {
    nom_entreprise: '',
    secteur_entreprise: '',
    user: {
      first_name: '',
      last_name: '',
      login: ''
    }
  };

  showModal = false;

  constructor(private recruteurService: RecruteurService) {}

  ngOnInit(): void {
    this.loadRecruteur();
  }

  
  get isComplete(): boolean {
    return !!(
      this.recruteur.nom_entreprise &&
      this.recruteur.secteur_entreprise &&
      this.recruteur.user.first_name &&
      this.recruteur.user.last_name &&
      this.recruteur.user.email
    );
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveChanges(updatedRecruteur: any) {
    this.recruteur = { ...updatedRecruteur };
  }

  loadRecruteur(): void {
    this.recruteurService.getCurrentRecruteur().subscribe({
      next: (data) => {
        this.recruteur = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement du recruteur', err);
      }
    });
  }
}
