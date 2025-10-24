import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RecruteurService } from '../../services/recruteur.service';
import { TypeContrat } from '../../models/typejob.model';
import { UserProfile } from '../../models/candidat.model';
import { Entreprise } from '../../models/recruteur.model';
import { PopupComponent } from '../../candidat/popup/popup.component';
import { ProfilComponent } from '../profil/profil.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-recruteur',
  standalone:true,
  imports: [PopupComponent,ProfilComponent,FormsModule,CommonModule],
  templateUrl: './recruteur.component.html',
  styleUrls: ['./recruteur.component.css']
})
export class RecruteurComponent{

   isPopupOpen: boolean = false;
    selectedPhoto: File | null = null;
    isComplete:boolean=false;
  
    
      // Profil utilisateur
     //userProfil!: UserProfile;
     entreprise !: Entreprise;
  
    

  
    typeContrats = Object.values(TypeContrat);
  
  
    constructor(private recruteurService: RecruteurService,private cdr: ChangeDetectorRef) {}
  
    
     ngOnInit(): void {
    this.loadCurrentRecruteur();
    this.recruteurService.getCurrentRecruteur().subscribe({
        next: data => this.entreprise = data,
        error: err => console.error('Erreur chargement profil', err)
      });
  }
  
    openPopup(){
      console.log('openPopup appelé ');
      this.isPopupOpen=true
      
    }
  
    closePopup(){
      this.isPopupOpen=false
    }
  

    handlePhotoChange(event:any){}

     CompleteProfil() {
      const formData = new FormData();
      formData.append('nom_entreprise', this.entreprise.nom_entreprise || '');
      formData.append('secteur_entreprise', this.entreprise.secteur_entreprise || '');
      formData.append('adresse', this.entreprise.adresse || '');
      if (this.entreprise.telephone) {
        // Supprimer tout ce qui n'est pas chiffre
        const telNumber = this.entreprise.telephone.replace(/\D/g, '');
        formData.append('telephone', telNumber);
      }
      if (this.entreprise.photoUrl) {
    
        formData.append('telephone', this.entreprise.photoUrl || '');
      }
  
      formData.append('email', this.entreprise.email || '');
  
      formData.append('adresse', this.entreprise.adresse || '');
    
     
      if (this.selectedPhoto) {
        formData.append('photo', this.selectedPhoto);
      }
  
      this.recruteurService.CompleterProfil(formData).subscribe({
        next: (response) => {
          console.log('Profil complet', response);
          alert('Profil complete avec succès !');
          this.isComplete = true;
          this.closePopup();
        },
        error: (err) => {
          console.error('Erreur mise à jour profil', err);
          alert('Erreur : ' + err.error?.message || err.message);
        }
      });
  
  
      
    }
  
  
   
  // Charger le recruteur connecté et vérifier si le profil est complet
  loadCurrentRecruteur(): void {
    this.recruteurService.getCurrentRecruteur().subscribe({
      next: (data) => {
        this.entreprise = data;
  
        // Vérifier si le profil est complet
        this.isComplete = this.checkProfilComplet(this.entreprise);
        console.log('Profil recruteur chargé :', data, 'Profil complet :', this.isComplete);
      },
      error: (err) => {
        console.error('Erreur lors du chargement du profil recruteur', err);
      },
    });
  }
  
  // Vérifie si toutes les infos essentielles sont présentes
  checkProfilComplet(entreprise: Entreprise): boolean {
    return !!(
      entreprise.nom_entreprise &&
      entreprise.secteur_entreprise &&
      entreprise.email &&
      entreprise.telephone &&
      entreprise.adresse 
      
      
    );
  }


  
  
  
}
