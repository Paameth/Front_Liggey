import { Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import { SignupRecruteurComponent } from './auth/signup-recruteur/signup-recruteur.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './candidat/card/card.component';
import { CandidatComponent } from './candidat/candidat/candidat.component';
import { TravailComponent } from './acceuil/travail/travail.component';
import { SidebarComponent } from './candidat/sidebar/sidebar.component';
import { PageacceuilComponent } from './acceuil/pageacceuil/pageacceuil.component';
import { RechercheComponent } from './acceuil/recherche/recherche.component';
import { PagecandidatComponent } from './candidat/pagecandidat/pagecandidat.component';
import { PagerecruteurComponent } from './recruteur/pagerecruteur/pagerecruteur.component';
import { SearchResultComponent } from './search-result/search-result.component';


export const routes: Routes = [
    { path: 'login',loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)},
    { path: 'login-recruteur',  loadComponent: () => import('./auth/login-recruteur/login-recruteur.component').then(m => m.LoginRecruteurComponent)},
    { path: 'signup-recruteur',component: SignupRecruteurComponent},
    {path: 'signup', loadComponent: () => import('./auth/signup/signup.component').then(m => m.SignupComponent)},
    //{ path: '', redirectTo: 'login', pathMatch: 'full' }, // temporairement
      //{ path: '', component: HeaderComponent },
    { path: '', component: PageacceuilComponent },
    { path: 'travail', component:TravailComponent },
    { path:'sidebar',component:SidebarComponent},
    { path: 'candidat', component: CandidatComponent },
    { path: 'recherche', component:RechercheComponent },
    { path: 'pagecandidat', component: PagecandidatComponent },
    { path: 'recruteur', component: PagerecruteurComponent },
    {
  path: 'search-result',
  loadComponent: () => import('./search-result/search-result.component').then(m => m.SearchResultComponent)
}

   
];
