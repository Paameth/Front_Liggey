import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { RechercheComponent } from "../acceuil/recherche/recherche.component";
import { JobComponent } from '../acceuil/job/job.component';
@Component({
  selector: 'app-search-result',
  imports: [HeaderComponent, FooterComponent, CommonModule, RechercheComponent, JobComponent],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {

}
