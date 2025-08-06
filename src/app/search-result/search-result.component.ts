import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { RechercheComponent } from "../acceuil/recherche/recherche.component";
import { JobComponent } from '../acceuil/job/job.component';
import { ActivatedRoute } from '@angular/router';
import { OffreService } from '../services/offre.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-search-result',
  standalone:true,
  imports: [HeaderComponent, FooterComponent, CommonModule, RechercheComponent, JobComponent,HttpClientModule ],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent implements OnInit {
 offres: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private offreService: OffreService
  ) {}


  //on appelle la methode de recherche de offreService
  ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    const localisation = params['localisation'];
    const poste = params['poste'];
    const typeContrat = params['typeContrat'];

    this.chargerOffres(localisation, poste, typeContrat);
  });
}

chargerOffres(localisation: string, poste: string, typeContrat: string): void {
  this.offreService.rechercherOffres(localisation, poste, typeContrat).subscribe(
    data => {
      this.offres = data;
    },
    error => {
      console.error('Erreur lors de la recherche d\'offres', error);
    }
  );
}

}
