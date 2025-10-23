import { Component, NgModule } from '@angular/core';
import { CardComponent } from '../../candidat/card/card.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../../candidat/popup/popup.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from '../../candidat/profil/profil.component';
import { OffreService } from '../../services/offre.service';

@Component({
  selector: 'app-offre',
  imports: [CardComponent,CommonModule,FormsModule,PopupComponent,CommonModule,FormsModule],
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.css'
})
export class OffreComponent {

  currentPopup :string|null=null
  skills: string[] = [];
  skillInput: string = '';
  intitule: string = '';
  lieudetravail: string = '';
  contrat: string = '';
  salaire: number | null = null;
  fichier: File | null = null;
  recruteurId:number | null=null;

  constructor(private offreService: OffreService) {}

  openPopup(PopupType:string){
    this.currentPopup=PopupType
  }

  closePopup(){
    this.currentPopup=null
  }


   onFileSelected(event: any) {
    this.fichier = event.target.files[0];
  }

  onSubmit() {
  const offre = {
    intitule: this.intitule,
    lieudetravail: this.lieudetravail,
    contrat: this.contrat,
    salaire: this.salaire,
    recruteurId:1,
  };

  this.offreService.ajouterOffre(offre).subscribe({
    next: (response) => {
      console.log(' Offre ajoutée avec succès :', response);
      alert('Offre ajoutée avec succès !');
      this.closePopup();
    },
    error: (error) => {
      console.error(' Erreur lors de l’ajout :', error);
      alert('Erreur lors de l’ajout de l’offre.');
    },
  });
} 
}
