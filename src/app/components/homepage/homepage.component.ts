import { Component, OnInit } from '@angular/core';
import { ListingmembreService } from '../../services/listingmembre.service';
import { ActivitiesService } from '../../services/activities.service';
// import Chart from 'chart.js';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private listemembre: ListingmembreService,  private activiteService: ActivitiesService) { }
    public membres = [];
    public activities = [];
    ngOnInit() {
        this.listemembre.getData().subscribe(membres => {
            this.membres = membres;
        })



        this.activiteService.getData().subscribe(activities => {
            this.activities = activities;


        })
    }

}
