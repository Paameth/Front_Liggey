import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() title: string = 'Accédez à votre espace personnel';
  @Input() submitText: string = 'Se connecter';
  @Input() subtitle: string = 'Connectez-vous ou';
  @Input() accountLinkText: string = 'inscrivez-vous';
  @Input() recruteurLinkText: string = 'Je suis recruteur';
  @Input() recruteurLink: string = '/login-recruteur';
  @Input() forgetPasswordLink: string = '#';
  @Input() isRegister: boolean = false; // Pour savoir si c'est un formulaire d'inscription ou de connexion
  @Input() accountLinkUrl: string = '/login'; // Lien par défaut pour le formulaire de connexion
  @Output() submitForm = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.isRegister) {
      if (this.form.value.password !== this.form.value.confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
      }
    }
    if (this.form.valid) {
      console.log('Connexion...', this.form.value);
      // Logique de connexion ici
    }
  }
}