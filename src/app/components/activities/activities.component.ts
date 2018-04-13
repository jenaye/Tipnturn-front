import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

    public activities = [];
    
    constructor(private activitesService:ActivitiesService) { }

    ngOnInit() {
        this.activitesService.getData().subscribe(activities => {
            this.activities = activities['hydra:member'];
        })
    }

  
}
