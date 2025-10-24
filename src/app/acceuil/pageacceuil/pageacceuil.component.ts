import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { TravailComponent } from "../travail/travail.component";
import { CommonModule } from '@angular/common';
import { RechercheComponent } from "../recherche/recherche.component";
import { OffreService } from '../../services/offre.service'; 
import { OffreModel } from '../../models/offre.model';
import { JobComponent } from '../job/job.component';


@Component({
  selector: 'app-pageacceuil',
  imports: [CommonModule, HeaderComponent, FooterComponent, TravailComponent, CommonModule, RechercheComponent, JobComponent],
  templateUrl: './pageacceuil.component.html',
  styleUrl: './pageacceuil.component.css'
})
export class PageacceuilComponent {
  offres: OffreModel[] = [];
  constructor(private offreService: OffreService) {}
  ngOnInit(): void {
    this.offreService.getAllOffres().subscribe({
      next: (data) => this.offres = data,
      error: (err) => console.error('Erreur lors de la récupération des offres :', err)
    });
  }
  
}
