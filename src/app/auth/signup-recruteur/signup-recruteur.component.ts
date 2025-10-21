import { Component } from '@angular/core';
import { CarouselComponent, CarouselItem } from '../carousel/carousel.component';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';
import { RecruteurService } from '../../services/recruteur.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup-recruteur',
  standalone:true,
  imports: [CarouselComponent, FormComponent, HeaderComponent, FooterComponent,CommonModule,RouterModule],
  templateUrl: './signup-recruteur.component.html',
  styleUrl: './signup-recruteur.component.css'
})
export class SignupRecruteurComponent {
  carouselItems: CarouselItem[] = [
    {
      image: './image1.png',
      title: 'Recrutez facilement en quelques étapes',
      description: 'Créez un compte pour publier vos offres et gérer vos candidatures.'
    },
    {
      image: './image5.png',
      title: 'Attirez les meilleurs talents',
      description: 'Décrivez vos besoins, recevez des candidatures ciblées.'
    },
    {
      image: './image6.png',
      title: 'Optimisez votre processus de recrutement',
      description: 'Une interface simple et intuitive pour suivre vos annonces et vos profils.'
    }
  ];

  constructor(
    private recruteurService: RecruteurService,
    private router: Router,
  ) { }

 handleSignupRecruteur(data: any): void {
  console.log('Données brutes du formulaire :', data);

  

  this.recruteurService.register(data).subscribe({
    next: (res) => {
      alert('Inscription réussie !');
       // Redirection vers le login recruteur
       setTimeout(() => this.router.navigate(['/login-recruteur']), 0);
    },
    error: (err) => {
      console.error('Erreur lors de l\'inscription', err);
      alert('Une erreur est survenue lors de l\'inscription');
    }
  });
}


}
