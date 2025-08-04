import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ProfilComponent } from "../../candidat/profil/profil.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagerecruteur',
  imports: [HeaderComponent, FooterComponent, ProfilComponent,CommonModule],
  templateUrl: './pagerecruteur.component.html',
  styleUrl: './pagerecruteur.component.css'
})
export class PagerecruteurComponent {

}
