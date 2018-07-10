import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule ,HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula';
import { ChartsModule } from 'ng2-charts/ng2-charts';


// component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AllMembersComponent } from './components/all-members/all-members.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ListingByActivitesComponent } from './components/listing-by-activites/listing-by-activites.component';
import { AddMemberComponent } from './components/addMember/addMember.component';
import { FinancialComponent } from './components/financial/financial.component';
import { AddFinancialComponent } from './components/addFinancial/addFinancial.component';
import { LoginComponent } from './components/login/login.component';
import { AddActivitesComponent } from './components/addActivites/addActivites.component';
import { AllActivitiesComponent } from './components/all-activities/all-activities.component';
import { AddEventComponent } from './components/addEvent/addEvent.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditmemberComponent } from './components/editmember/editmember.component';
import { AllEventComponent } from './components/all-events/all-event.component';
import { EditEventComponent } from './components/editEvent/editEvent.component';
import { DayDetailsComponent } from './components/dayDetails/dayDetails.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ListingUsersComponent } from './components/listing-users/listing-users.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';
import { TaskOptionComponent } from './components/task-option/task-option.component';
import { TaskComponent } from './components/task/task.component';
import { routing } from './app.routing';
import { AuthGuard } from './guards/auth.guard';

//directive
import { AutofocusDirective } from './directives/autofocus.directive';

// Services
import { CheckTokenService } from './services/checkToken.service';
import { MembersService } from './services/members.service';
import { ActivitiesService } from './services/activities.service';
import { ListingmemberService } from './services/listingmember.service';
import { FinancialService } from './services/financial.service';
import { TypesService } from './services/types.service';
import { EventService } from './services/event.service';
import { MapService } from './services/map.service';
import { UsersService } from './services/users.service';
import { CsvService } from './services/csv.service';
import { TaskService } from './services/task.service';
import { SnackBarService } from './services/snackBar.service';
import { TagsService } from './services/tags.service';


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
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { environment} from "../environments/environment";
import { TagComponent } from './components/tag/tag.component';



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
    FinancialComponent,
    LoginComponent,
    AddActivitesComponent,
    SideBarComponent,
    PageHeaderComponent,
    DashboardComponent,
    AllEventComponent,
    EditmemberComponent,
    AddFinancialComponent,
    AddMemberComponent,
    AddEventComponent,
    EditEventComponent,
    DayDetailsComponent,
    CalendarComponent,
    AllActivitiesComponent,
    ListingUsersComponent,
    TaskBoardComponent,
    TaskOptionComponent,
    TaskComponent,
    AutofocusDirective,
    TagComponent
  ],
  imports: [
      HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
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
    MatChipsModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    routing,
    DragulaModule,
    AgmCoreModule.forRoot({
      apiKey: environment.MAPS_KEY
    })
  ],
  providers: [
    ActivitiesService,
    ListingmemberService,
    MembersService,
    FinancialService,
      UsersService,
      CsvService,

    UsersService,
    TaskService,
    SnackBarService,
    AuthGuard,
    TypesService,
    EventService,
    MapService,
    TagsService,
    DatePipe,
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CheckTokenService ,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditmemberComponent,
    AddFinancialComponent,
    AddMemberComponent,
    AddEventComponent,
    EditEventComponent,
    DayDetailsComponent,
    AllActivitiesComponent,
    TaskOptionComponent
  ]
 
})
export class AppModule { }
