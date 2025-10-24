import { RecruteurService } from './../../services/recruteur.service';
import { Component, NgModule } from '@angular/core';
import { CardComponent } from '../../candidat/card/card.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../../candidat/popup/popup.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from '../../candidat/profil/profil.component';
import { OffreService } from '../../services/offre.service';
import jwt_decode from 'jwt-decode';
import { HttpRequest } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';




@Component({
  selector: 'app-offre',
  imports: [CardComponent,CommonModule,FormsModule,PopupComponent,CommonModule,FormsModule],
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.css'
})
export class OffreComponent {

  offres: any[] = [];
  offreEnEdition: any = null; // Pour stocker l’offre en cours d’édition

  currentPopup :string|null=null
  skills: string[] = [];
  skillInput: string = '';
  // Champs correspondant au DTO
  intitule: string = '';
  description: string = '';
  typeContrat: string = 'CDI'; // valeur par défaut
  poste: string = '';
  localisation: string = '';
  remuneration: number | null = null;
  datePublication: string = new Date().toISOString();
  statut: boolean = true;
  photo: File | null = null;
  recruteur = { id: 1 }; // recruteur connecté
  constructor(private http: HttpClient,private offreService: OffreService,private recruteurService: RecruteurService) {}


  ngOnInit(): void {
    this.chargerOffres();
  }
  chargerOffres(): void {
    this.offreService.getOffres().subscribe({
      next: (data) => this.offres = data,
      error: (err) => console.error('Erreur de chargement :', err)
    });
  }

  openPopup(PopupType:string){
    this.currentPopup=PopupType
  }

  closePopup(){
    this.currentPopup=null
  }


onFileSelected(event: any) {
    this.photo = event.target.files[0];
  }

 onSubmit() {
  // Récupérer l'ID du recruteur connecté
  this.recruteurService.getRecruteurConnecte().subscribe({
    next: (res) => {
      console.log("Recruteur connecté :", res);
      const vari = { id: res.id }; // ID réel

      const offre = {
        intitule: this.intitule,
        description: this.description,
        typeContrat: this.typeContrat,
        poste: this.poste,
        localisation: this.localisation,
        remuneration: this.remuneration,
        datePublication: this.datePublication,
        statut: this.statut,
        recruteur: vari,
        photo: this.photo ? this.photo.name : null
      };

      console.log("Objet envoyé :", offre);

      this.offreService.ajouterOffre(offre).subscribe({
        next: (response) => {
          console.log('Offre ajoutée avec succès :', response);
          alert('Offre ajoutée avec succès !');
          this.closePopup();
        },
        error: (error) => {
          console.error('Erreur lors de l’ajout :', error);
          alert('Erreur lors de l’ajout de l’offre.');
        },
      });
    },
    error: (err) => {
      console.error("Impossible de récupérer le recruteur :", err);
      alert('Impossible de récupérer l’ID du recruteur. Veuillez vous reconnecter.');
    }
  });
}



editOffre(offre: any): void {
    this.offreEnEdition = { ...offre };
  }

  sauvegarderModification(): void {
    if (this.offreEnEdition && this.offreEnEdition.id) {
      this.offreService.modifierOffre(this.offreEnEdition.id, this.offreEnEdition)
        .subscribe({
          next: () => {
            alert('Offre mise à jour avec succès !');
            this.offreEnEdition = null;
            this.chargerOffres();
          },
          error: (err) => console.error('Erreur de mise à jour :', err)
        });
    }
  }
   // 🔹 Enregistrer la modification d'une offre
  enregistrerModification(): void {
    if (!this.offreEnEdition || !this.offreEnEdition.id) {
      console.error("Aucune offre sélectionnée pour la modification");
      return;
    }

    this.offreService.modifierOffre(this.offreEnEdition.id, this.offreEnEdition).subscribe({
      next: () => {
        console.log("✅ Offre modifiée avec succès !");
        this.closePopup();
        this.chargerOffres(); // Recharger la liste
      },
      error: (err) => console.error("❌ Erreur lors de la modification :", err)
    });
  }
  login(credentials: any) {
  return this.http.post('http://localhost:8080/api/auth/login', credentials).pipe(
    tap((response: any) => {
      localStorage.setItem('auth_token', response.token);
      localStorage.setItem('recruteur_id', response.recruteur.id); // stocker ici directement
    })
  );
}


}