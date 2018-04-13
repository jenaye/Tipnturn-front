import {Component, OnInit, Inject, NgZone} from '@angular/core';
import {MouseEvent} from '@agm/core';
import {EventService} from '../../services/event.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MapService} from '../../services/map.service'
import {DatePipe} from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({selector: 'app-editEvent', templateUrl: './editEvent.component.html', styleUrls: ['./editEvent.component.css']})
export class EditEventComponent implements OnInit {

  public formEvent : FormGroup;
  public formAdress : FormGroup;
  public lat : number;
  public lng : number;
  public minStartDate : Date;
  public datestart : string;
  public dateend : string;
  public dateInvalide : boolean;

  constructor(private formBuilder : FormBuilder, private eventService : EventService, private datePipe : DatePipe, public dialogRef : MatDialogRef < EditEventComponent >, private ms : MapService, private __zone : NgZone, @Inject(MAT_DIALOG_DATA)public data : any)
  {
    this.minStartDate = new Date();
    this.dateInvalide = false;
    this.formEvent = this
      .formBuilder
      .group({
        id: [''],
        name: [
          [''], Validators.required
        ],
        start: '',
        startHour: [
          '', Validators.required
        ],

        endHour: [
          '', Validators.required
        ],
        description: [, Validators.required]
      });
    this.formAdress = this
      .formBuilder
      .group({
        numberRue: [''],
        rue: [''],
        city: ['', Validators.required]
      });
  }

  ngOnInit() {

    this
      .eventService
      .findById(this.data)
      .subscribe(event => {
        this
          .formEvent
          .patchValue({
            id: this.data,
            name: event['name'],
            start: new Date(event['start']),
            startHour: this
              .datePipe
              .transform(event['start'], 'HH:mm'),
            endHour: this
              .datePipe
              .transform(event['end'], 'HH:mm'),
            description: event['description']
          })

        this
          .formAdress
          .patchValue({numberRue: event['numberRue'], rue: event['rue'], city: event['city']})

        this.lat = event['latitude'];
        this.lng = event['longitude'];
      });

  }

  edit() {
    const endDate = new Date(this.formEvent.value.end);
    const startDate = new Date(this.formEvent.value.start);

    let finalData;
    if ((!this.formAdress.value.rue && !this.formAdress.value.numberRue) || (this.formAdress.value.numberRue && !this.formAdress.value.rue)) {
      finalData = {
        "city": this.formAdress.value.city,
        "end": new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), + this.formEvent.value.endHour.substring(0, 2), + this.formEvent.value.endHour.substring(3, 5), 0),
        "start": new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), + this.formEvent.value.startHour.substring(0, 2), + this.formEvent.value.startHour.substring(3, 5), 0),
        "name": this.formEvent.value.name,
        "latitude": this.lat,
        "longitude": this.lng,
        "description": this.formEvent.value.description
      }
    } else if (!this.formEvent.value.numberRue) {
      finalData = {
        "rue": this.formAdress.value.rue,
        "city": this.formAdress.value.city,
        "end": new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), + this.formEvent.value.endHour.substring(0, 2), + this.formEvent.value.endHour.substring(3, 5), 0),
        "start": new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), + this.formEvent.value.startHour.substring(0, 2), + this.formEvent.value.startHour.substring(3, 5), 0),
        "name": this.formEvent.value.name,
        "latitude": this.lat,
        "longitude": this.lng,
        "description": this.formEvent.value.description
      }
    } else {
      finalData = {
        "numberRue": + this.formAdress.value.numberRue,
        "rue": this.formAdress.value.rue,
        "city": this.formAdress.value.city,
        "end": new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), + this.formEvent.value.endHour.substring(0, 2), + this.formEvent.value.endHour.substring(3, 5), 0),
        "start": new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), + this.formEvent.value.startHour.substring(0, 2), + this.formEvent.value.startHour.substring(3, 5), 0),
        "latitude": this.lat,
        "longitude": this.lng,
        "description": this.formEvent.value.description
      }
    }
    console.log(finalData);
    this
      .eventService
      .edit(finalData, this.data)
      .subscribe(membre => {
        this.closeDialog();
      });
  }

  closeDialog() {
    this
      .dialogRef
      .close();
  }

  changeLocation() {
    if (this.formAdress.valid) {
      let data;
      if (!((this.formAdress.value.numberRue) || (this.formAdress.value.rue)) || (this.formAdress.value.rue)) {
        data = this.formAdress.value.city;
      } else {
        data = this.formAdress.value.numberRue + '+' + this.formAdress.value.rue + '+' + this.formAdress.value.city;
      }
      this
        .ms
        .getData(data)
        .subscribe(result => {
          this
            .__zone
            .run(() => {
              this.lat = result.lat();
              this.lng = result.lng();
            })
        }, error => console.log(error), () => {});

    }
  }

  datesAreValid() {

    if (this.formEvent && this.formEvent.value && this.formEvent.value.startHour && this.formEvent.value.endHour) {
      const heurFin = new Date(2000, 15, 10, + this.formEvent.value.endHour.substring(0, 2), + this.formEvent.value.endHour.substring(3, 5), 0);
      const heurDebut = new Date(2000, 15, 10, + this.formEvent.value.startHour.substring(0, 2), + this.formEvent.value.startHour.substring(3, 5), 0)
      this.dateInvalide = !(heurFin > heurDebut)
    }
  }
}

interface marker {
  lat : number;
  lng : number;
  label?: string;
  draggable : boolean;
}
