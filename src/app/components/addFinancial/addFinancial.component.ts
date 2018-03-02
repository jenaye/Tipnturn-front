import { Component, OnInit, Inject } from '@angular/core';
import { FinancialService } from '../../services/financial.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({selector: 'app-addFinanciel', templateUrl: './addFinancial.component.html'})
export class AddFinancialComponent implements OnInit {

    public formMembre: FormGroup;

    constructor(private bilanService: FinancialService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef < AddFinancialComponent >) {
        this.formMembre = this
            .formBuilder
            .group({
                date: [
                    '', Validators.required
                ],
                libelle: [
                    '', Validators.required
                ],
                rentree: [
                    '', Validators.required
                ],
                sortie: ['', Validators.required]
            });
    }

    ngOnInit() {}

    add() {

        this
            .bilanService
            .insert(this.formMembre.value)
            .subscribe(membre => {});

    }
    closeDialog() {
        this
            .dialogRef
            .close();
    }

}
