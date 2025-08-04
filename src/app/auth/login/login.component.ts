import { Component } from '@angular/core';
import { CarouselComponent, CarouselItem } from '../carousel/carousel.component';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CarouselComponent, FormComponent, HeaderComponent, FooterComponent,CommonModule],
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

  handleLogin(data: any) {
    console.log('Données de connexion :', data);
    // traitement (authentification, requête HTTP, etc.)
  }

}
