import {Component, OnInit, Inject} from '@angular/core';
import {FinancialService} from '../../services/financial.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({selector: 'app-addFinancial', templateUrl: './addFinancial.component.html'})
export class AddFinancialComponent implements OnInit {

    public form : FormGroup;
    public maxDate;

    constructor(private bilanService : FinancialService, private formBuilder : FormBuilder, public dialogRef : MatDialogRef < AddFinancialComponent >) {
        this.form = this
            .formBuilder
            .group({
                date: [
                    '', Validators.required
                ],
                libelle: [
                    '', Validators.required
                ],
                inOrOut: [
                    '1', Validators.required
                ],
                amount: [, Validators.required]
            });
    }

    ngOnInit() {}

    add() {



        const data = {
                date: this.form.value.date,
                libelle : this.form.value.libelle,
                enter : this.form.value.amount                                         
        };
    
        this
            .bilanService
            .insert(data)
            .subscribe(membre => {
                this
                    .dialogRef
                    .close();
            });
    }

    closeDialog() {
        this
            .dialogRef
            .close();
    }

}
