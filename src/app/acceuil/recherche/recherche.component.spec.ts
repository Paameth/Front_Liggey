import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
})
export class RechercheComponent {

  poste: string = '';
  localisation: string = 'Dakar';
  typeContrat: string = '';

 

  constructor(private router: Router) {}

  resultatRecherche() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/search-result'], {
      queryParams: {
        poste: this.poste,
        localisation: this.localisation,
        typeContrat: this.typeContrat
      }
    });
  })}
}
