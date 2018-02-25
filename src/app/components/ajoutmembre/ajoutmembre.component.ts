import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivitiesService} from '../../services/activities.service';
import {MembresService} from '../../services/membres.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({selector: 'app-ajoutmembre', templateUrl: './ajoutmembre.component.html', styleUrls: ['./ajoutmembre.component.css']})
export class AjoutmembreComponent implements OnInit {

  public activitestab : Array < any >;
  public formMembre : FormGroup;

  constructor(private formBuilder : FormBuilder, private membresservice : MembresService, public dialogRef : MatDialogRef < AjoutmembreComponent >, @Inject(MAT_DIALOG_DATA)public data : any)
  {
    this.activitestab = data
    this.formMembre = this
      .formBuilder
      .group({
        nom: [
          '', Validators.required
        ],
        prenom: [
          '', Validators.required
        ],
        email: [''],
        phone: [''],
        cotisation: [''],
        certificat: false,
        cheque: false,
        enabled: true,
        activites: Array()
      });

  }

  ngOnInit() {}

  add() {

    if (this.formMembre.value.activites) {
      let tmp = [];

      this
        .formMembre
        .value
        .activites
        .forEach(id => {
          tmp.push(`/api/activities/${id}`)
        });

      this.formMembre.value.activites = tmp;
    } else {
      this.formMembre.value.activites = [];
    }

    this
      .membresservice
      .insert(this.formMembre.value)
      .subscribe(membre => {
        this.closeDialog()
      });
  }

  closeDialog() {
    this
      .dialogRef
      .close();
  }

}
