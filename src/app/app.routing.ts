import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { AllMembersComponent } from './components/all-members/all-members.component';
import { AddMemberComponent } from './components/addMember/addMember.component';
import { EditmemberComponent } from './components/editmember/editmember.component';
import { ListingByActivitesComponent } from './components/listing-by-activites/listing-by-activites.component';
import { AddActivitesComponent } from './components/addActivites/addActivites.component';
import { FinancialComponent } from './components/financial/financial.component';
import { AddFinancialComponent } from './components/addFinancial/addFinancial.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllEventComponent } from './components/all-events/all-event.component';



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
                path: 'listingMembers',
                component: AllMembersComponent
            },
                 
            {
                path: 'activites/:id',
                component: ListingByActivitesComponent
            },
            {
                path: 'add-activite',
                component: AddActivitesComponent
            },
            {
                path: 'financial',
                component: FinancialComponent
            },
            {
                path: 'listingEvents',
                component: AllEventComponent
            },
          
        ]

        },

// otherwise redirect to home
{ path: '404', component: ErrorComponent },
{ path: '**', redirectTo: 'home/dashboard' }

];

export const routing = RouterModule.forRoot(appRoutes);


