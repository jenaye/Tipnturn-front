import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-par-activites',
  templateUrl: './listing-par-activites.component.html',
  styleUrls: ['./listing-par-activites.component.css']
})
export class ListingParActivitesComponent implements OnInit {

  public activities = [];
  public membres = [];
  
  constructor(private activitesService:ActivitiesService, private _router:Router) { }

  ngOnInit() {

      let currentUrl = this._router.url;
      let decoupage = currentUrl.split('/');
      let id = decoupage[2];
      this.activitesService.getDataById(id).subscribe(activities => {
      this.activities = activities;
      this.membres = activities.membres;
    })
  }

}
