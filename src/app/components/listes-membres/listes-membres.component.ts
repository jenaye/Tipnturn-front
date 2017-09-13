import { Component, OnInit } from '@angular/core';
import { ListingmembreService } from '../../services/listingmembre.service';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-listes-membres',
  templateUrl: './listes-membres.component.html',
  styleUrls: ['./listes-membres.component.css']
})
export class ListesMembresComponent implements OnInit {
  public membres = [];
  public activities = [];
  public prenom:any;
  public res:any;
  constructor(private listemembre: ListingmembreService, private activiteService: ActivitiesService) { }

  ngOnInit() {
    this.listemembre.getData().subscribe(membres => {
      this.membres = membres;

    })

    this.activiteService.getData().subscribe(activities => {
      this.activities = activities;

    })
  }

  hasActivity(idActivite, membre){
    let activites = membre.activites
    activites = activites.filter( (activite) => activite.id === idActivite)
    return activites.length > 0
  }

    search() {
        var prenom = this.prenom;
        this.listemembre.getDataByName(prenom).subscribe(el => {
            this.membres = el;
        })
    }

}
