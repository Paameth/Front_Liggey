import { Component } from '@angular/core';
import { CarouselComponent, CarouselItem } from '../carousel/carousel.component';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';
import { RecruteurService } from '../../services/recruteur.service';
import { Router } from '@angular/router';
import { OffreComponent } from '../../recruteur/offre/offre.component';
import { OffreService } from '../../services/offre.service';



@Component({
  selector: 'app-login-recruteur',
  standalone:true,
  imports: [CarouselComponent, FormComponent, HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './login-recruteur.component.html',
  styleUrl: './login-recruteur.component.css'
})
export class LoginRecruteurComponent {
    carouselItems: CarouselItem[] = [
    {
      image: './image4.png',
      title: 'Recrutez facilement en quelques étapes',
      description: 'Créez un compte pour publier vos offres et gérer vos candidatures.'
    },
    {
      image: './image2.png',
      title: 'Attirez les meilleurs talents',
      description: 'Décrivez vos besoins, recevez des candidatures ciblées.'
    },
    {
      image: './image3.png',
      title: 'Optimisez votre processus de recrutement',
      description: 'Une interface simple et intuitive pour suivre vos annonces et vos profils.'
    }
  ];

  constructor(private recruteurService: RecruteurService,private router: Router) {}
  

  handleLoginRecruteur(data: any):void {
   this.recruteurService.login(data).subscribe({
    next: (res) => {
      const token = res.body.id_token;

      if (token) {
        // 1. Stocker le token dans le localStorage
        localStorage.setItem('auth_token', token);
        this.recruteurService.getRecruteur().subscribe({
  next: (recruteur: any) => {
    localStorage.setItem('recruteur_id', recruteur.id.toString());
  }
});
        // 2. Vérifier s'il est recruteur
        this.recruteurService.isRecruteur().subscribe({
          next: (isRecruteur: boolean) => {
            if (isRecruteur) {
              // ✅ Redirection si c’est un recruteur
              this.router.navigate(['/recruteur']);
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
