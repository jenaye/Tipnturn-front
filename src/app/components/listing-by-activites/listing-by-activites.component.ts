import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivitiesService} from '../../services/activities.service';
import { Router,ActivatedRoute,NavigationEnd} from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({selector: 'app-listing-by-activites', templateUrl: './listing-by-activites.component.html', styleUrls: ['./listing-by-activites.component.css']})
export class ListingByActivitesComponent implements OnInit,
OnDestroy {

  public activities;
  public membres = [];
  public id : number;
  public displayedColumns = ['nom', 'prenom', 'email', 'phone'];
  public dataSource : MatTableDataSource < any >;
  private sub : any;

  @ViewChild(MatPaginator)paginator : MatPaginator;
  @ViewChild(MatSort)sort : MatSort;

  constructor(private activitesService : ActivitiesService, private route : ActivatedRoute,private router: Router,) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }

   this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         // trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
         // if you need to scroll back to top, here is the right place
         window.scrollTo(0, 0);
      }
  });
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    
    this.sub = this
      .route
      .params
      .subscribe(params => {
        this.id = +params['id'];
       
      });
    this
      .activitesService
      .getDataById(''+this.id)
      .subscribe(activities => {
        this.activities = activities;
        this.dataSource.data = activities.membres
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue : string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnDestroy() {
    this
      .sub
      .unsubscribe();
  }
}
