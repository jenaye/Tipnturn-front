import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MembersService} from '../../services/members.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({selector: 'app-addMember', templateUrl: './addMember.component.html', styleUrls: ['./addMember.component.css']})
export class AddMemberComponent implements OnInit {

  public activitestab: Array < any >;
  public formMembre: FormGroup;

  constructor(private formBuilder: FormBuilder, private membresservice: MembersService, public dialogRef: MatDialogRef < AddMemberComponent >, @Inject(MAT_DIALOG_DATA)public data: any)
  {
    this.activitestab = data
    this.formMembre = this
      .formBuilder
      .group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', [Validators.required , Validators.email]],
        phone: ['', [Validators.required , Validators.pattern('^(0|\\+33|0033)[1-9][0-9]{8}$')]],
        cotisation: ['', Validators.required],
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

      this.formMembre.value.activites
        .forEach(id => {
          tmp.push(`/api/activities/${id}`)
        });

      this.formMembre.value.activites = tmp;
    } else {
      this.formMembre.value.activites = [];
    }

    this.membresservice
      .insert(this.formMembre.value)
      .subscribe(() => {
        this.closeDialog()
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
