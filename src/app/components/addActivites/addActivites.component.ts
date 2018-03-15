import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivitiesService} from '../../services/activities.service';
import {TypesService} from '../../services/types.service';
import {Router} from '@angular/router';

@Component({selector: 'app-ajoutactivites', templateUrl: './addActivites.component.html', styleUrls: ['./addActivites.component.css']})
export class AddActivitesComponent implements OnInit {

    public formMembre: FormGroup;
    public types: Array<any>;
    public selectState: string;
    public _myTemplateDrivenSelect:string;

    constructor(private formBuilder: FormBuilder, private activitiesService: ActivitiesService, private router: Router , private ts: TypesService) {
        
        this.formMembre = this.formBuilder
            .group({
                nom: ['', Validators.required],
                prix: ['',[Validators.required]],
            });
    }

    ngOnInit() {
        this.ts.getData().subscribe(result=>{
            this.types = result
        });
    }

    add() {
        const Activite = {
            'name': this.formMembre.value.nom,
            'type':{
            'name': this.selectState,
            'price': +this.formMembre.value.prix
        }}

        this.activitiesService
            .insert(Activite)
            .subscribe(activite => {
                this.router.navigate(['/home/dasboard']);
            });

    }

    
   

}
