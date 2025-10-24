import { Component, NgModule } from '@angular/core';
import { CardComponent } from '../../candidat/card/card.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../../candidat/popup/popup.component';
import { OffreService } from '../../services/offre.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-offreencours',
  imports: [CardComponent,CommonModule,PopupComponent,CommonModule,FormsModule],
  templateUrl: './offreencours.component.html',
  styleUrl: './offreencours.component.css'
})
export class OffreencoursComponent {
  offres: any[] = [];
  currentPopup :string|null=null
  offreEnEdition: any = null;
  skills: string[] = [];
  skillInput: string = '';


   constructor(private offreService: OffreService) {}

    openPopup(PopupType:string ,offre?: any){
    this.currentPopup=PopupType;
    this.offreEnEdition = offre || null;
    console.log("Offre sélectionnée :", this.offreEnEdition);
  }

     closePopup(){
    this.currentPopup=null;
    this.offreEnEdition = null;
  }
  

  ngOnInit(): void {
    this.chargerOffres();
  }

  chargerOffres(): void {
    this.offreService.getOffres().subscribe({
      next: (data) => {
        this.offres = data.filter((offre: any) => offre.statut === true);
      },
      error: (err) => console.error('Erreur chargement offres:', err)
    });
  }

 enregistrerModification(): void {
    if (!this.offreEnEdition || !this.offreEnEdition.id) return;

    this.offreService.modifierOffre(this.offreEnEdition.id, this.offreEnEdition).subscribe({
      next: () => {
        console.log("✅ Offre modifiée avec succès !");
        this.closePopup();
        this.chargerOffres();
      },
      error: (err) => console.error("❌ Erreur lors de la modification :", err)
    });
  }
}
