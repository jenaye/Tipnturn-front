import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
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
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { routing } from './app.routing';
import { AuthGuard } from './guards/auth.guard';

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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    EditmembreComponent,
    SideBarComponent,
    PageHeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    routing,
  ],
  providers: [
    ActivitiesService, ListingmembreService, MembresService, BilanService, CheckTokenService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
