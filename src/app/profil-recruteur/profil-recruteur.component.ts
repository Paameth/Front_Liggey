import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecruteurService } from '../services/recruteur.service';



@Component({
  selector: 'app-profil-recruteur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profil-recruteur.component.html',
  styleUrls: ['./profil-recruteur.component.css']
})
export class ProfilRecruteurComponent {
  @Input() recruteur: any;
  @Input() showModal: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();


  constructor (private recruteurService:RecruteurService){}

  closeModal() {
    this.close.emit();
  }

  saveChanges() {
    this.save.emit(this.recruteur);
    this.closeModal();
  }

  CompleteProfil() {
      const formData = new FormData();
      formData.append('nom_entreprise', this.recruteur.nom_entreprise || '');
      formData.append('secteur_entreprise', this.recruteur.secteur_entreprise || '');
      formData.append('firstname', this.recruteur.nom || '');
      formData.append('lastname', this.recruteur.prenom || '');
      formData.append('email', this.recruteur.email || '');
    
      this.recruteurService.CompleterProfil(formData).subscribe({
        next: (response) => {
          console.log('Profil complet', response);
          alert('Profil complete avec succès !');
          this.closeModal();
          
        },
        error: (err) => {
          console.error('Erreur mise à jour profil', err);
          alert('Erreur : ' + err.error?.message || err.message);
        }
      });
  
  
      
    }
  
}