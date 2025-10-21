import { Component } from '@angular/core';
import { CarouselComponent, CarouselItem } from '../carousel/carousel.component';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';
import { CandidatService } from '../../services/candidat.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CarouselComponent, FormComponent, HeaderComponent, FooterComponent,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  carouselItems: CarouselItem[] = [
    {
      image: './image4.png',
      title: 'Accédez à votre espace personnel',
      description: 'Connectez-vous pour suivre vos candidatures et gérer votre profil professionnel.'
    },
    {
      image: './image2.png',
      title: 'Reprenez là où vous vous êtes arrêté',
      description: 'Consultez vos offres enregistrées et continuez vos recherches d\'emploi.'
    },
    {
      image: './image3.png',
      title: 'Une connexion sécurisée, à tout moment',
      description: 'Entrez vos identifiants pour retrouver toutes vos données en toute confidentialité.'
    }
  ];
  
  constructor(private candidatService: CandidatService,private router: Router) {}
  handleLoginCandidat(data: any):void {
   this.candidatService.login(data).subscribe({
    next: (res) => {
      const token = res.body.id_token;

      if (token) {
        // 1. Stocker le token dans le localStorage
        localStorage.setItem('auth_token', token);

        // 2. Vérifier s'il est candidat
        this.candidatService.isCandidat().subscribe({
          next: (isCandidat: boolean) => {
            if (isCandidat) {
              // ✅ Redirection si c’est un recruteur
              this.router.navigate(['/pagecandidat']);
            } else {
              alert("Vous n'avez pas accès à cet espace.");
            }
          },
          error: () => {
            alert("Erreur lors de la vérification du rôle.");
          }
        });
      }
    },
    error: (err) => {
      console.error('Erreur lors de la connexion', err);
      alert('Identifiants invalides ou erreur serveur.');
    }
  });
  }

}
