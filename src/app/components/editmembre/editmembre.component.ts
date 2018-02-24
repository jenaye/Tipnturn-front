import { Component, OnInit , Inject } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { MembresService } from '../../services/membres.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-editmembre',
  templateUrl: './editmembre.component.html',
  styleUrls: ['./editmembre.component.css']
})
export class EditmembreComponent implements OnInit {

    public formMembre : FormGroup;
  


    constructor(private formBuilder : FormBuilder,private membresservice: MembresService, public dialogRef : MatDialogRef < EditmembreComponent >,@Inject(MAT_DIALOG_DATA)public data : any) {
    }

  ngOnInit() {
     
     
      this.membresservice.findById(this.data).subscribe(user => {
        console.log(user);
          this.formMembre = this
          .formBuilder
          .group({
            id: user.id ,
            nom: [ user.nom, Validators.required],
            prenom: [ user.prenom, Validators.required],
            email: [user.email, Validators.required],
            phone: [user.phone, Validators.required],
            cotisation: [user.phone, Validators.required],
            certificat: [user.certificat, Validators.required],
            cheque: [user.cheque, Validators.required],
            enabled:[user.enabled, Validators.required],
          });              
      });
     
  }

    edit() {
            this.membresservice.edit(this.formMembre.value, this.data).subscribe( membre => {
           
        });

       
    }

}
