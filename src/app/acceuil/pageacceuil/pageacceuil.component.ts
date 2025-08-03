import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { TravailComponent } from "../travail/travail.component";
import { CommonModule } from '@angular/common';
import { RechercheComponent } from "../recherche/recherche.component";

@Component({
  selector: 'app-pageacceuil',
  imports: [CommonModule,HeaderComponent, FooterComponent, TravailComponent, CommonModule],
  templateUrl: './pageacceuil.component.html',
  styleUrl: './pageacceuil.component.css'
})
export class PageacceuilComponent {

}
