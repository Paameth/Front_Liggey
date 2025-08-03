import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TravailComponent } from './acceuil/travail/travail.component';
import { SidebarComponent } from './candidat/sidebar/sidebar.component';
import { PageacceuilComponent } from './acceuil/pageacceuil/pageacceuil.component';
import { RechercheComponent } from './acceuil/recherche/recherche.component';


export const routes: Routes = [
    
    { path: '', component: PageacceuilComponent },
    { path: 'travail', component:TravailComponent },
    {path:'sidebar',component:SidebarComponent},
    { path: 'recherche', component:RechercheComponent }
];
