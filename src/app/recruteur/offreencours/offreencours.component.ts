import { Component } from '@angular/core';
import { CardComponent } from '../../candidat/card/card.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../../candidat/popup/popup.component';

@Component({
  selector: 'app-offreencours',
  imports: [CardComponent,CommonModule,PopupComponent],
  templateUrl: './offreencours.component.html',
  styleUrl: './offreencours.component.css'
})
export class OffreencoursComponent {
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
