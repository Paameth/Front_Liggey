import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CandidatComponent } from "../candidat/candidat.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { EnteteComponent } from '../entete/entete.component';

@Component({
  selector: 'app-pagecandidat',
  imports: [SidebarComponent, CandidatComponent, CommonModule, HeaderComponent, FooterComponent,EnteteComponent],
  templateUrl: './pagecandidat.component.html',
  styleUrl: './pagecandidat.component.css'
})
export class PagecandidatComponent {

}
