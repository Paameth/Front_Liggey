import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ProfilComponent } from '../profil/profil.component';
import { PopupComponent } from '../popup/popup.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidat',
  imports: [CardComponent,ProfilComponent,PopupComponent,CommonModule,FormsModule],
  templateUrl: './candidat.component.html',
  styleUrl: './candidat.component.css'
})
export class CandidatComponent {
  currentPopup :string|null=null
  skills: string[] = [];
  skillInput: string = '';

  experiences: { poste: string; entreprise: string;ville:string;type_contrat:string }[] = [];
  newExperience = { poste: '', entreprise: '',ville:'',type_contrat:'' };

   // Diplômes
  diplomes: { intitule: string; etablissement: string ,niveau:string,dateDebut:string,dateFin:string}[] = [];
  nouveauDiplome = { intitule: '', etablissement: '',niveau:'',dateDebut:'',dateFin:'' };

  //autres ressources
  ressources: { lien?: string; fichier?: File }[] = [];
  nouveauLien: string = '';
  nouveauFichier?: File;

  // Profil utilisateur
  userProfil = {
    photoUrl:'',
    nom: 'Lala ',//non modifiable
    prenom:'Diallo',
    email: 'LalaDiallo@gmail.com',
    telephone: '701234567',
    dateNaissance: '09/03/2001' ,// non modifiable
    adresse:'Saint-Louis',
    genre:'Femme'
  };



  openPopup(PopupType:string){
    this.currentPopup=PopupType
  }

  closePopup(){
    this.currentPopup=null
  }

  addSkill() {
    const skill = this.skillInput.trim();
    if (skill && !this.skills.includes(skill)) {
      this.skills.push(skill);
    }
    this.skillInput = '';
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }

  onSkillKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.addSkill();
    }
  }

  addExperience() {
    const { poste, entreprise } = this.newExperience;

    if (poste.trim() && entreprise.trim()) {
      this.experiences.push({ ...this.newExperience });
      this.newExperience = { poste: '', entreprise: '',ville:'',type_contrat:'' };
    }
  }

  removeExperience(index: number) {
    this.experiences.splice(index, 1);
  }

  addDiplome() {
    const { intitule, etablissement } = this.nouveauDiplome;
    if (intitule.trim() && etablissement.trim()) {
      this.diplomes.push({ ...this.nouveauDiplome });
      this.nouveauDiplome = { intitule: '', etablissement: '',niveau:'',dateDebut:'',dateFin:'' };
    }
  }

  removeDiplome(index: number) {
    this.diplomes.splice(index, 1);
  }


  //ressources
  handleFileChange(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      this.nouveauFichier = file;
    }
  }

  addRessource() {
    const lien = this.nouveauLien.trim();
    const fichier = this.nouveauFichier;

    if (lien || fichier) {
      this.ressources.push({ lien: lien || undefined, fichier });
      this.nouveauLien = '';
      this.nouveauFichier = undefined;

      // Réinitialiser le champ fichier (si besoin)
      const inputFile: any = document.getElementById('fichierInput');
      if (inputFile) inputFile.value = '';
    }
  }

  removeRessource(index: number) {
    this.ressources.splice(index, 1);
  }

   updateProfil() {
    // tu peux faire une requête HTTP ici si besoin
    this.closePopup();
  }

  handlePhotoChange(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.userProfil.photoUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}

  
}
