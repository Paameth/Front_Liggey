import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './candidat/card/card.component';
import { CandidatComponent } from './candidat/candidat/candidat.component';


export const routes: Routes = [
    
      { path: '', component: HeaderComponent },
      { path: 'candidat', component: CandidatComponent },
    
];
