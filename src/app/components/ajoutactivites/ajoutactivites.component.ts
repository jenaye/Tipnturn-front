import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from '../../services/activities.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajoutactivites',
  templateUrl: './ajoutactivites.component.html',
  styleUrls: ['./ajoutactivites.component.css']
})
export class AjoutactivitesComponent implements OnInit {
    private nom: string;

  constructor(private activitiesService: ActivitiesService, private router: Router) { }

  ngOnInit() {
  }

  add(){
      const NomActivite = {
          'name': this.nom
      }
      
      console.log(NomActivite);
      this.activitiesService.insert(NomActivite).subscribe( activite => {
          this.router.navigate(['/accueil']);
      });

  }

}
