import { Component } from '@angular/core';
import { CarouselComponent, CarouselItem } from '../carousel/carousel.component';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [CarouselComponent, FormComponent, HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  carouselItems: CarouselItem[] = [
    {
      image: './image1.png',
      title: 'Créez votre profil en quelques clics',
      description: 'Rejoignez la plateforme et commencez à postuler aux offres qui vous correspondent.'
    },
    {
      image: './image5.png',
      title: 'Des opportunités adaptées à votre profil',
      description: 'Recevez des suggestions d’emploi ciblées dès votre inscription.'
    },
    {
      image: './image6.png',
      title: 'Donnez de la visibilité à vos compétences',
      description: 'Mettez en avant votre expérience et attirez les recruteurs.'
    }
  ];

  handleSignup(data: any) {
    console.log('Données de connexion :', data);
    // traitement (authentification, requête HTTP, etc.)
  }
}
