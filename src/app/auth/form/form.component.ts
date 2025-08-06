import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  ngOnInit():void{
    
      this.form = this.fb.group({
      login: ['', Validators.required], // 👈 changer ici
      password: ['', Validators.required],
      confirmPassword: [''],
      rememberMe: [false]
  });
  if (this.isRegister) {
    this.form.get('confirmPassword')?.setValidators(Validators.required);
  } else {
    this.form.get('confirmPassword')?.clearValidators();
  }

  this.form.get('confirmPassword')?.updateValueAndValidity();
    }
  
  @Input() title: string = 'Accédez à votre espace personnel';
  @Input() submitText: string = 'Se connecter ';
  @Input() subtitle: string = 'Connectez-vous ou';
  @Input() accountLinkText: string = 'inscrivez-vous';
  @Input() recruteurLinkText: string = 'Je suis recruteur';
  @Input() recruteurLink: string = '/login-recruteur';
  @Input() forgetPasswordLink: string = '#';
  @Input() isRegister: boolean = false; // Pour savoir si c'est un formulaire d'inscription ou de connexion
  @Input() accountLinkUrl: string = '/login'; // Lien par défaut pour le formulaire de connexion
  @Output() submitForm = new EventEmitter<any>();

  
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}
  
  



onSubmit(event: Event) {
  event.preventDefault(); // ❗️ Empêche le comportement par défaut du navigateur

  if (this.isRegister) {
    if (this.form.value.password !== this.form.value.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
  }

  if (this.form.valid) {
      const data = {
        [this.isRegister ? 'login' : 'username']: this.form.value.login,
        login: this.form.value.login,
        password: this.form.value.password
  };
    console.log('Formulaire soumis', data);
    this.submitForm.emit(data);  // Émet au parent
  }
}

}