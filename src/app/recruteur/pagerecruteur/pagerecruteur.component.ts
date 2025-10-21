import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ProfilComponent } from "../../candidat/profil/profil.component";
import { CommonModule } from '@angular/common';
import { OffreComponent } from "../offre/offre.component";
import { OffreencoursComponent } from "../offreencours/offreencours.component";

@Component({
  selector: 'app-pagerecruteur',
  imports: [HeaderComponent, FooterComponent, ProfilComponent, CommonModule, OffreComponent, OffreencoursComponent],
  templateUrl: './pagerecruteur.component.html',
  styleUrl: './pagerecruteur.component.css'
})
export class PagerecruteurComponent {

}
