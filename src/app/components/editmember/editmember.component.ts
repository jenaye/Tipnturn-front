import { Component, OnInit , Inject } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { MembresService } from '../../services/membres.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-editmember',
  templateUrl: './editmember.component.html',
  styleUrls: ['./editmember.component.css']
})
export class EditmemberComponent implements OnInit {

    public formMembre: FormGroup;
  


    constructor(private formBuilder: FormBuilder, private  membresservice: MembresService, public dialogRef: MatDialogRef < EditmembreComponent >,@Inject(MAT_DIALOG_DATA)public data : any) {

      this.formMembre = this
      .formBuilder
      .group({
        id: [''] ,
        nom: [[''], Validators.required],
        prenom: [[''], Validators.required],
        email: [[''], Validators.required],
        phone: [[''], Validators.required],
        cotisation: [[''], Validators.required],
        certificat: [false, Validators.required],
        cheque: [false, Validators.required],
        enabled:[false, Validators.required],
      });            
    }

  ngOnInit() {
        
      this.membresservice.findById(this.data).subscribe(user => {
          this.formMembre.patchValue({
            id : this.data,
            nom : user.nom,
            prenom : user.prenom,
            email : user.email,
            phone : user.phone,
            cotisation : user.cotisation,
            certificat : user.certificat,
            cheque : user.cheque,
            enabled: user.enabled
          })
      });
     
  }

    edit() {
            this.membresservice.edit(this.formMembre.value, this.data).subscribe( membre => {
            this.closeDialog();
        });
    }

    closeDialog() {
      this.dialogRef.close();
    }

}
