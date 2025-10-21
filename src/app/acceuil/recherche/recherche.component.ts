import { Component, EventEmitter, Output } from '@angular/core';
import { OffreService } from '../../services/offre.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recherche',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.css'
})
export class RechercheComponent {
    localisation = '';
  poste = '';
  typeContrat = '';

  constructor(private router: Router) {}

  resultatRecherche() {
    this.router.navigate(['/search-result'], {
      queryParams: {
        poste: this.poste || null,
        localisation: this.localisation || null,
        typeContrat: this.typeContrat || null
      }
    });
  }
}
