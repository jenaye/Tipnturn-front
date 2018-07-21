import { Component, OnInit , Inject } from '@angular/core';
import { MembersService } from '../../services/members.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-editmember',
  templateUrl: './editmember.component.html',
  styleUrls: ['./editmember.component.css']
})
export class EditmemberComponent implements OnInit {

    public formMembre: FormGroup;
  
    constructor(private formBuilder: FormBuilder, private  membresservice: MembersService, public dialogRef: MatDialogRef < EditmemberComponent >,@Inject(MAT_DIALOG_DATA)public data : any) {

      this.formMembre = this
      .formBuilder
      .group({
        id: [''] ,
        nom: [[''], Validators.required],
        prenom: [[''], Validators.required],
        email: [[''], [Validators.required , Validators.email]],
        phone: [[''], [Validators.required , Validators.pattern('^(0|\\+33|0033)[1-9][0-9]{8}$')]],
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
            nom : user['nom'],
            prenom : user['prenom'],
            email : user['email'],
            phone : user['phone'],
            cotisation : user['cotisation'],
            certificat : user['certificat'],
            cheque : user['cheque'],
            enabled: user['enabled']
          })
      });
     
  }

    edit() {
            this.membresservice.edit(this.formMembre.value, this.data).subscribe( () => {
            this.closeDialog();
        });
    }

    closeDialog() {
      this.dialogRef.close();
    }

}
