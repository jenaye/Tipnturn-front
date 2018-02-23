import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { ListesMembresComponent } from './components/listes-membres/listes-membres.component';
import { AjoutmembreComponent } from './components/ajoutmembre/ajoutmembre.component';
import { EditmembreComponent } from './components/editmembre/editmembre.component';
import { ListingParActivitesComponent }  from './components/listing-par-activites/listing-par-activites.component';
import { AjoutactivitesComponent } from './components/ajoutactivites/ajoutactivites.component';
import { BilanComponent } from './components/bilan/bilan.component';
import { AjoutbilanComponent } from './components/ajoutbilan/ajoutbilan.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'home', component: HomepageComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'membres-List',
                component: ListesMembresComponent
            },
            {
                path: 'add-membre',
                component: AjoutmembreComponent
            },
            {
                path: 'edit-membre/:id',
                component: EditmembreComponent
            },
            {
                path: 'activites/:id',
                component: ListingParActivitesComponent
            },
            {
                path: 'add-activite',
                component: AjoutactivitesComponent
            },
            {
                path: 'bilan',
                component: BilanComponent
            },
            {
                path: 'add-bilan',
                component: AjoutbilanComponent
            },
        ]

        },

// otherwise redirect to home
{ path: '404', component: ErrorComponent },
{ path: '**', redirectTo: 'dashboard' }

];

export const routing = RouterModule.forRoot(appRoutes);


