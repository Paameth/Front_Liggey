import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TravailComponent } from './acceuil/travail/travail.component';
import { SidebarComponent } from './candidat/sidebar/sidebar.component';


export const routes: Routes = [
    
    { path: '', component: HeaderComponent },
    { path: 'travail', component:TravailComponent },
    {path:'sidebar',component:SidebarComponent}
];
