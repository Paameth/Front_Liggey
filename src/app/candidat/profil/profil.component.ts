import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil',
  imports: [CommonModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() isComplete: boolean = false;
  @Input() buttonLabel: string = 'Modifier';
}
