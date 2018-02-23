import {Component, OnInit, Input, Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivitiesService} from '../../services/activities.service';
import {MembresService} from '../../services/membres.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';

@Component({selector: 'app-ajoutmembre', templateUrl: './ajoutmembre.component.html', styleUrls: ['./ajoutmembre.component.css']})
export class AjoutmembreComponent implements OnInit {

  public activitestab : Array < any >;
  public formMembre : FormGroup;

  constructor(private formBuilder : FormBuilder, private membresservice : MembresService, private router : Router, public dialogRef : MatDialogRef < AjoutmembreComponent >, @Inject(MAT_DIALOG_DATA)public data : any)
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
        activites: Array()
      });

  }

  ngOnInit() {}

  add() {
    console.log(this.formMembre.value)

    if(this.formMembre.value.activites){
    let tmp = [];
    
    this.formMembre.value.activites.forEach(id => {
      tmp.push(`/api/activities/${id}`)
    });

    this.formMembre.value.activites= tmp;}else{
      this.formMembre.value.activites=[];
    }

    this
      .membresservice
      .insert(this.formMembre.value)
      .subscribe(membre => {});  
  }

}
