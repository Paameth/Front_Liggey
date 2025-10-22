import { Component } from '@angular/core';
import { CarouselComponent, CarouselItem } from '../carousel/carousel.component';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';
import { CandidatService } from '../../services/candidat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CarouselComponent, FormComponent, HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(
    private candidatService: CandidatService,
    private router: Router,
  ) { }

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

  handleSignupCandidat(data: any): void {
  console.log('Données brutes du formulaire :', data);

  

  this.candidatService.register(data).subscribe({
    next: (res) => {
      alert('Inscription réussie !');
       // Redirection vers le login recruteur
       setTimeout(() => this.router.navigate(['/login']), 0);
    },
    error: (err) => {
      console.error('Erreur lors de l\'inscription', err);
      alert('Une erreur est survenue lors de l\'inscription');
    }
  });
}
}
