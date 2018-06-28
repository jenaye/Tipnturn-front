import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-all-activities',
  templateUrl: './all-activities.component.html',
  styleUrls: ['./all-activities.component.css']
})
export class AllActivitiesComponent implements OnInit {

    public activities = [];
    
    constructor(private activitesService:ActivitiesService) { }

    ngOnInit() {
        this.activitesService.getData().subscribe(activities => {
            this.activities = activities['hydra:member'];
        })
    }

  
}
