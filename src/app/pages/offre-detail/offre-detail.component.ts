import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OffreModel } from '../../models/offre.model';
import { OffreService } from '../../services/offre.service';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { CandidatureService } from '../../services/candidature.service';

@Component({
  selector: 'app-offre-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './offre-detail.component.html',
  styleUrls: ['./offre-detail.component.css']
})
export class OffreDetailComponent implements OnInit {
  offre!: OffreModel;

  constructor(private route: ActivatedRoute, private offreService: OffreService, private candidatureService: CandidatureService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.offreService.getOffreByIdall(+id).subscribe(data => this.offre = data);
    }
  }
  postuler(offreId: number): void {
    this.candidatureService.postuler(offreId).subscribe({
      next: (res) => {
        alert('Vous avez postulé avec succès !');
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de la candidature.');
      }
    });
  }
}
