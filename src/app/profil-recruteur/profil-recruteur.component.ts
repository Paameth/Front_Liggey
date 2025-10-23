import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  closeModal() {
    this.close.emit();
  }

  saveChanges() {
    this.save.emit(this.recruteur);
    this.closeModal();
  }
}
