import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivitiesService } from '../../services/activities.service';
import { TypesService } from '../../services/types.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-activites',
  templateUrl: './edit-activites.component.html',
  styleUrls: ['./edit-activites.component.css']
})
export class EditActivitesComponent implements OnInit {

  public formMembre: FormGroup;
  public types: Array<any>;
  public selectState: string;
  public loaded : boolean

  constructor(private formBuilder: FormBuilder,
    private activitiesService: ActivitiesService,
    private ts: TypesService,
    public dialogRef: MatDialogRef<EditActivitesComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.loaded = false;
      this.ts.getData().subscribe(result => {
        this.types = result['hydra:member']
      });

  }

  ngOnInit() {
    this.activitiesService.getDataById(this.data).subscribe(res => {
      this.formMembre = this.formBuilder
      .group({
        nom: [res['name'], Validators.required],
        select: ['', Validators.required]
      }); 
      this.selectState = res['type']['@id'];
      this.loaded=true;     
    })
  
  }


  update() {
    const Activite = {
      'name': this.formMembre.value.nom,
      'type': this.selectState
    }

    this.activitiesService.update(this.data, Activite)
      .subscribe(() => {
        this.closeDialog();
      });

  }

  closeDialog() {
    this.dialogRef.close();
  }

}
