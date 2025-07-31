import { Routes } from '@angular/router';
import { TravailComponent } from './acceuil/travail/travail.component';
import { SidebarComponent } from './candidat/sidebar/sidebar.component';


export const routes: Routes = [
    { path: 'travail', component:TravailComponent },
    {path:'sidebar',component:SidebarComponent}
];
