import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from '../../services/activities.service';
import { MembresService } from '../../services/membres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutmembre',
  templateUrl: './ajoutmembre.component.html',
  styleUrls: ['./ajoutmembre.component.css']
})
export class AjoutmembreComponent implements OnInit {

    private nom: string;
    private prenom: string;
    private email: string;
    private phone: string;
    private cheque: boolean;
    private certificat: boolean;
    private cotisation: string;
    private activites = [];
    public toggles = [];


  constructor(private activitesServer: ActivitiesService, private membresservice: MembresService, private router: Router) {
                this.activitesServer.getData().subscribe(activities => {
                this.activites = activities;
      });
  }

    ngOnInit() {
    }

    add() {
        const data = {
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          phone: this.phone,
          cheque: this.cheque ? this.cheque : false,
          certificat: this.certificat ? this.certificat : false,
          cotisation: this.cotisation,
          activites: []
        };

        this.toggles.forEach( toggle => {
          const dataAct = `/api/activities/${toggle.id}`;
          data.activites.push(dataAct);
        })

        this.membresservice.insert(data).subscribe( membre => {
        this.router.navigate(['listes-des-membres']);
        });

        console.log(data);
  }

  toggle(item){
     const Element = this.toggles.findIndex( eltToggle => {
        return eltToggle.id == item.id;
      })

     if(Element >= 0){
       this.toggles.splice(Element, 1)
     }else{
       this.toggles.push(item);
     }

  }

}
