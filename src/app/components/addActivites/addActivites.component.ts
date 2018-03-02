import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivitiesService} from '../../services/activities.service';
import {Router} from '@angular/router';

@Component({selector: 'app-ajoutactivites', templateUrl: './addActivites.component.html', styleUrls: ['./addActivites.component.css']})
export class AddActivitesComponent implements OnInit {

    public formMembre : FormGroup;

    constructor(private formBuilder : FormBuilder, private activitiesService : ActivitiesService, private router : Router) {
        this.formMembre = this
            .formBuilder
            .group({
                nom: ['', Validators.required]
            });
    }

    ngOnInit() {}

    add() {
        const NomActivite = {
            'name': this.formMembre.value.nom
        }

        this
            .activitiesService
            .insert(NomActivite)
            .subscribe(activite => {
                this
                    .router
                    .navigate(['/home/dasboard']);
            });

    }

}
