import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivitiesService} from '../../services/activities.service';
import {TypesService} from '../../services/types.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({selector: 'app-ajoutactivites', templateUrl: './addActivites.component.html', styleUrls: ['./addActivites.component.css']})
export class AddActivitesComponent implements OnInit {

    public formMembre: FormGroup;
    public types: Array<any>;
    public selectState: string;

    constructor(private formBuilder: FormBuilder,
                private activitiesService: ActivitiesService,
                private ts: TypesService,
                public dialogRef: MatDialogRef < AddActivitesComponent >, @Inject(MAT_DIALOG_DATA)public data: any) {
        
        this.formMembre = this.formBuilder
            .group({
                nom: ['', Validators.required],
                select : ['', Validators.required]
            });
    }

    ngOnInit() {
        this.ts.getData().subscribe(result=>{
            this.types = result['hydra:member']
        });
    }

    add() {
        const Activite = {
            'name': this.formMembre.value.nom,
            'type': this.selectState
        }

        this.activitiesService
            .insert(Activite)
            .subscribe(() => {
                this.closeDialog();
            });

    }

    closeDialog() {
        this.dialogRef.close();
      }

   
}
