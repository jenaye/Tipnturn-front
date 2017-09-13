import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListesMembresComponent } from './components/listes-membres/listes-membres.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { FormsModule } from '@angular/forms';


// Services
import { MembresService } from './services/membres.service';
import { ActivitiesService } from './services/activities.service';
import { ListingmembreService } from './services/listingmembre.service';
import { BilanService } from './services/bilan.service';
import { ListingParActivitesComponent } from './components/listing-par-activites/listing-par-activites.component';
import { AjoutmembreComponent } from './components/ajoutmembre/ajoutmembre.component';
import { BilanComponent } from './components/bilan/bilan.component';
import { AjoutbilanComponent } from './components/ajoutbilan/ajoutbilan.component';

// routes
const appRoutes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'listes-des-membres', component: ListesMembresComponent },
    { path: 'ajout-membre', component: AjoutmembreComponent },
    { path: 'activites/:id', component: ListingParActivitesComponent },
    { path: 'bilan', component: BilanComponent },
    { path: 'ajout-bilan', component: AjoutbilanComponent },
    { path: '404', component: ErrorComponent },
    { path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomepageComponent,
    ErrorComponent,
    ListesMembresComponent,
    ActivitiesComponent,
    ListingParActivitesComponent,
    AjoutmembreComponent,
    BilanComponent,
    AjoutbilanComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false }
      )
  ],
  providers: [
    ActivitiesService, ListingmembreService, MembresService, BilanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
