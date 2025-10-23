import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

     isLoggedIn: boolean = false;
   constructor(private router: Router) {}

   ngOnInit(): void {
    // Vérifie si un token existe dans le localStorage
    const token = localStorage.getItem('auth_token');
    this.isLoggedIn = !!token; // true si token existe, false sinon
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  goToProfile() {
  this.router.navigate(['/profil']);
}

logout(): void {
  localStorage.removeItem('auth_token');
  this.isLoggedIn = false;
  this.router.navigate(['/login']); // redirige vers la page de login
}

}
