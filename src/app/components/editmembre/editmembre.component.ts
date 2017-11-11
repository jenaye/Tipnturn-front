import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from '../../services/activities.service';
import { MembresService } from '../../services/membres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editmembre',
  templateUrl: './editmembre.component.html',
  styleUrls: ['./editmembre.component.css']
})
export class EditmembreComponent implements OnInit {

    private id: any;
    private user: any;
    private nom: string;
    private prenom: string;
    private email: string;
    private phone: string;
    private cheque: boolean;
    private certificat: boolean;
    private cotisation: string;
    public href: any;


    constructor(private membresservice: MembresService, private router: Router) {
    }

  ngOnInit() {
      this.href = this.router.url;
      const id_membre = this.href.split( '/' );
      this.membresservice.findById(id_membre[2]).subscribe(user => {
          this.id = user.id;
          this.nom = user.nom;
          this.prenom = user.prenom;
          this.email = user.email;
          this.phone = user.phone;
          this.cheque = user.cheque;
          this.certificat = user.certificat;
          this.cotisation = user.cotisation;

      });
  }

    edit() {
        const data = {
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            phone: this.phone,
            cheque: this.cheque ? this.cheque : false,
            certificat: this.certificat ? this.certificat : false,
            cotisation: this.cotisation,
        };

        this.membresservice.edit(data, this.id).subscribe( membre => {
            this.router.navigate(['listes-des-membres']);
        });

        console.log(data);
    }

}
