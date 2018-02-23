import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivitiesService } from '../../services/activities.service';
import { MembresService } from '../../services/membres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutmembre',
  templateUrl: './ajoutmembre.component.html',
  styleUrls: ['./ajoutmembre.component.css']
})
export class AjoutmembreComponent implements OnInit {

    public formMembre : FormGroup;
    public activitestab = [];
 


  constructor(private activitesServer: ActivitiesService,private formBuilder: FormBuilder, private membresservice: MembresService, private router: Router) {
    this.formMembre = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom : ['',Validators.required],
      email: [''],
      phone: [''],
      cheque: [''],
      certificat: [''],
      cotisation: [''],
      activites: [''],
    });
                this.activitesServer.getData().subscribe(activities => {
                this.activitestab = activities;
                console.log(activities);
      });
  }

    ngOnInit() {
    }

    add() {
        const data = {
          nom: this.formMembre.controls.value,
          prenom:'',
          email: 'this.email',
          phone: 'this.phone',
          cheque: 'this.cheque ? this.cheque : false',
          certificat: 'this.certificat ? this.certificat : false',
          cotisation:' this.cotisation',
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

 

}
