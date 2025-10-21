import { Component, NgModule } from '@angular/core';
import { CardComponent } from '../../candidat/card/card.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../../candidat/popup/popup.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from '../../candidat/profil/profil.component';

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
    openPopup(PopupType:string){
    this.currentPopup=PopupType
  }

   closePopup(){
    this.currentPopup=null
  }

}
