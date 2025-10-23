import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ProfilComponent } from '../profil/profil.component';
import { PopupComponent } from '../popup/popup.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CandidatService } from '../../services/candidat.service';
import { UserProfile } from '../../models/candidat.model';
import { TypeJob,TypeContrat } from '../../models/typejob.model';

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
  selectedPhoto: File | null = null;
  isComplete:boolean=false;

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
  userProfil!: UserProfile;

  job:any={};
  experience:any={};

  typeContrats = Object.values(TypeContrat);


  constructor(private candidatService: CandidatService) {}

  
   ngOnInit(): void {
  this.loadCurrentCandidat();
  this.candidatService.getCurrentCandidat().subscribe({
      next: data => this.userProfil = data,
      error: err => console.error('Erreur chargement profil', err)
    });
}

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

  handlePhotoChange(event:any){}

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

   CompleteProfil() {
    const formData = new FormData();
    formData.append('nom', this.userProfil.nom || '');
    formData.append('prenom', this.userProfil.prenom || '');
    formData.append('genre', this.userProfil.genre || '');
    if (this.userProfil.telephone) {
      // Supprimer tout ce qui n'est pas chiffre
      const telNumber = this.userProfil.telephone.replace(/\D/g, '');
      formData.append('telephone', telNumber);
    }
    if (this.userProfil.photoUrl) {
  
      formData.append('telephone', this.userProfil.photoUrl || '');
    }

    formData.append('email', this.userProfil.email || '');

    formData.append('adresse', this.userProfil.adresse || '');
   if (this.userProfil.dateNaissance) {
  const date = new Date(this.userProfil.dateNaissance);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  formData.append('dateNaissance', `${day}/${month}/${year}`);
}
   
    if (this.selectedPhoto) {
      formData.append('photo', this.selectedPhoto);
    }

    this.candidatService.CompleterProfil(formData).subscribe({
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


   AjouterTravail() {
    const formData = new FormData();
    formData.append('intitule', this.job.intitule || '');
    formData.append('salaire', this.job.salaire ? this.job.salaire.toString() : '0');
    // Vérification de contrat avant toUpperCase
  const contratValue = this.job.contrat || '';
  formData.append('contrat', contratValue);
    formData.append('ville', this.job.ville || '');


    this.candidatService.AjouterTravail(formData).subscribe({
      next: (response) => {
        console.log('Profil complet', response);
        alert('Type de job cree avec succès !');
        this.isComplete = true;
        this.closePopup();
      },
      error: (err) => {
        console.error('Erreur ajout type de job', err);
        alert('Erreur : ' + err.error?.message || err.message);
      }
    });


    
  }


   AjouterExperience() {
    const formData = new FormData();
    formData.append('poste', this.experience.poste || '');
    formData.append('entreprise', this.experience.entreprise );
    // Vérification de contrat avant toUpperCase
  const contratValue = this.experience.contrat || '';
  formData.append('contrat', contratValue);
    formData.append('ville', this.experience.ville || '');


    this.candidatService.AjouterExperience(formData).subscribe({
      next: (response) => {
        console.log('Profil complet', response);
        alert('Experience ajoutee avec succès !');
        this.isComplete = true;
        this.closePopup();
      },
      error: (err) => {
        console.error('Erreur ajout experience', err);
        alert('Erreur : ' + err.error?.message || err.message);
      }
    });


    
  }



 
// Charger le candidat connecté et vérifier si le profil est complet
loadCurrentCandidat(): void {
  this.candidatService.getCurrentCandidat().subscribe({
    next: (data) => {
      this.userProfil = data;

      // Vérifier si le profil est complet
      this.isComplete = this.checkProfilComplet(this.userProfil);
      console.log('Profil candidat chargé :', data, 'Profil complet :', this.isComplete);
    },
    error: (err) => {
      console.error('Erreur lors du chargement du profil candidat', err);
    },
  });
}

// Vérifie si toutes les infos essentielles sont présentes
checkProfilComplet(profil: UserProfile): boolean {
  return !!(
    profil.nom &&
    profil.prenom &&
    profil.email &&
    profil.telephone &&
    profil.adresse &&
    profil.dateNaissance 
    
  );
}



  
}
