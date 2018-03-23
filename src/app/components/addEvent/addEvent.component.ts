import {Component, OnInit, Inject, NgZone} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {EventService} from '../../services/event.service';
import {MapService} from '../../services/map.service'

@Component({selector: 'app-addEvent', templateUrl: './addEvent.component.html', styleUrls: ['./addEvent.component.css']})
export class AddEventComponent implements OnInit {

    public lat : number
    public lng : number
    public formEvent : FormGroup;
    public minStartDate : Date;
    public minEndDate : Date;
    public endDateAble : boolean;

    constructor(private formBuilder: FormBuilder, private eventsService: EventService, public dialogRef: MatDialogRef < AddEventComponent >, private ms: MapService, private __zone: NgZone) {
        
        this.minStartDate= new Date();
        this.endDateAble=true;
       
        this.formEvent = this
            .formBuilder
            .group({
                startDate: ['', Validators.required],
                startHour: ['', Validators.required],
                endDate:  ['',Validators.required],
                endHour: ['',Validators.required],
                name: ['',Validators.required],
                numStreet: '',
                nameStreet: '',
                city: ['',Validators.required],
                description: ['']
            });
    }

    ngOnInit() {}

    add() {
        const data = this.formEvent.value.numStreet + '+' + this.formEvent.value.nameStreet + '+' + this.formEvent.value.city;
        const endDate = this.formEvent.value.endDate;
        const startDate = this.formEvent.value.startDate;

        this.ms
            .getData(data)
            .subscribe(result => {
                this.__zone
                    .run(() => {
                        this.lat = result.lat();
                        this.lng = result.lng();
                    })
            }, error => console.log(error), () => {
                let  savedData
                if ((!this.formEvent.value.nameStreet && !this.formEvent.value.numStreet)||(this.formEvent.value.numStreet && !this.formEvent.value.nameStreet)) {
                    savedData = {
                        "city": this.formEvent.value.city,
                        "end": new Date(endDate._i.year, endDate._i.month, endDate._i.date, + this.formEvent.value.endHour.substring(0, 2), + this.formEvent.value.endHour.substring(3, 5), 0),
                        "start": new Date(startDate._i.year, startDate._i.month, startDate._i.date, + this.formEvent.value.startHour.substring(0, 2), + this.formEvent.value.startHour.substring(3, 5), 0),
                        "name": this.formEvent.value.name,
                        "latitude": this.lat,
                        "longitude": this.lng,
                        "description": this.formEvent.value.description
                    }
                } else if (!this.formEvent.value.numStreet) {
                     savedData = {
                        "rue": this.formEvent.value.nameStreet,
                        "city": this.formEvent.value.city,
                        "end": new Date(endDate._i.year, endDate._i.month, endDate._i.date, + this.formEvent.value.endHour.substring(0, 2), + this.formEvent.value.endHour.substring(3, 5), 0),
                        "start": new Date(startDate._i.year, startDate._i.month, startDate._i.date, + this.formEvent.value.startHour.substring(0, 2), + this.formEvent.value.startHour.substring(3, 5), 0),
                        "name": this.formEvent.value.name,
                        "latitude": this.lat,
                        "longitude": this.lng,
                        "description": this.formEvent.value.description
                    }
                } else {
                     savedData = {
                        "numberRue": +this.formEvent.value.numStreet,
                        "rue": this.formEvent.value.nameStreet,
                        "city": this.formEvent.value.city,
                        "end": new Date(endDate._i.year, endDate._i.month, endDate._i.date, + this.formEvent.value.endHour.substring(0, 2), + this.formEvent.value.endHour.substring(3, 5), 0),
                        "start": new Date(startDate._i.year, startDate._i.month, startDate._i.date, + this.formEvent.value.startHour.substring(0, 2), + this.formEvent.value.startHour.substring(3, 5), 0),
                        "name": this.formEvent.value.name,
                        "latitude": this.lat,
                        "longitude": this.lng,
                        "description": this.formEvent.value.description
                    }
                }

                this.eventsService
                    .insert(savedData)
                    .subscribe(result => {
                        this.closeDialog();
                    });

            });

    }

    closeDialog() {
        this.dialogRef
            .close();
    }

    checkStatus(){
    this.endDateAble= (this.formEvent.value.startDate+this.formEvent.value.startHour).length===0;
    }

}
