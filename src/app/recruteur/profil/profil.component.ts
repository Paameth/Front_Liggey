import { Component, Output,EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfile } from '../../models/candidat.model';
import { Entreprise } from '../../models/recruteur.model';

@Component({
  selector: 'app-profil-recruteur',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() isComplete: boolean = false;
  @Input() buttonLabel: string = 'Modifier';
  @Input() entreprise!: Entreprise;
 
  
  
   @Output() buttonClicked = new EventEmitter<void>();

  onClick() {
    console.log('Bouton du profil cliqué');
    this.buttonClicked.emit();
  }
}
