import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListesMembresComponent } from './components/listes-membres/listes-membres.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { FormsModule } from '@angular/forms';
import { ListingParActivitesComponent } from './components/listing-par-activites/listing-par-activites.component';
import { AjoutmembreComponent } from './components/ajoutmembre/ajoutmembre.component';
import { BilanComponent } from './components/bilan/bilan.component';
import { AjoutbilanComponent } from './components/ajoutbilan/ajoutbilan.component';
import { LoginComponent } from './components/login/login.component';
import { AjoutactivitesComponent } from './components/ajoutactivites/ajoutactivites.component';

// Services
import { CheckTokenService } from './services/checkToken.service';
import { MembresService } from './services/membres.service';
import { ActivitiesService } from './services/activities.service';
import { ListingmembreService } from './services/listingmembre.service';
import { BilanService } from './services/bilan.service';
import { EditmembreComponent } from './components/editmembre/editmembre.component';

// Material component
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


// routes
const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'accueil', component: HomepageComponent },
    { path: 'listes-des-membres', component: ListesMembresComponent },
    { path: 'ajout-membre', component: AjoutmembreComponent },
    { path: 'edit-membre/:id', component: EditmembreComponent },
    { path: 'activites/:id', component: ListingParActivitesComponent },
    { path: 'ajout-activite', component: AjoutactivitesComponent },
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
    AjoutbilanComponent,
    LoginComponent,
    AjoutactivitesComponent,
    EditmembreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ChartsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false }
      )
  ],
  providers: [
    ActivitiesService, ListingmembreService, MembresService, BilanService, CheckTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
