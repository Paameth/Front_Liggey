import { Component } from '@angular/core';
import { CarouselComponent, CarouselItem } from '../carousel/carousel.component';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login-recruteur',
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

  handleLoginRecruteur(data: any) {
    console.log('Données de connexion :', data);
    // traitement (authentification, requête HTTP, etc.)
  }
}
