import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ProfilComponent } from '../profil/profil.component';

@Component({
  selector: 'app-candidat',
  imports: [CardComponent,ProfilComponent],
  templateUrl: './candidat.component.html',
  styleUrl: './candidat.component.css'
})
export class CandidatComponent {

}
