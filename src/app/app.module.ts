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
import { AllMembersComponent } from './components/all-members/all-members.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { FormsModule } from '@angular/forms';
import { ListingByActivitesComponent } from './components/listing-by-activites/listing-by-activites.component';
import { AddMemberComponent } from './components/addMember/addMember.component';
import { FinancialComponent } from './components/financial/financial.component';
import { AddFinancialComponent } from './components/addFinancial/addFinancial.component';
import { LoginComponent } from './components/login/login.component';
import { AddActivitesComponent } from './components/addActivites/addActivites.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { routing } from './app.routing';
import { AuthGuard } from './guards/auth.guard';

// Services
import { CheckTokenService } from './services/checkToken.service';
import { MembersService } from './services/members.service';
import { ActivitiesService } from './services/activities.service';
import { ListingmemberService } from './services/listingmember.service';
import { FinancialService } from './services/financial.service';
import { EditmemberComponent } from './components/editmember/editmember.component';

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
import { MatNativeDateModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'L',
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ErrorComponent,
      AllMembersComponent,
    ActivitiesComponent,
      ListingByActivitesComponent,
      AddMemberComponent,
      FinancialComponent,
      AddFinancialComponent,
    LoginComponent,
      AddActivitesComponent,
      EditmemberComponent,
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
    MatNativeDateModule,
    MatRadioModule,
    routing,
  ],
  providers: [
    ActivitiesService,
    ListingmemberService,
    MembersService,
    FinancialService,
    CheckTokenService,
    AuthGuard,
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
