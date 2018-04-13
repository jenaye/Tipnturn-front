import {Component, OnInit, Inject, NgZone} from '@angular/core';
import {DatePipe} from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({selector: 'app-editEvent',
            templateUrl: './dayDetails.component.html',
            styleUrls: ['./dayDetails.component.css']})

export class DayDetailsComponent implements OnInit {

    public hoursArray : Array<string>;
    public day :number;
    public monthName : string;

 

  constructor( private datePipe : DatePipe, public dialogRef : MatDialogRef < DayDetailsComponent > , @Inject(MAT_DIALOG_DATA) public data : any)
  {
    this.hoursArray = new Array();
  }

  ngOnInit() {

      this.day =new Date(this.data.events[0].start).getDate();
      this.monthName =this.data.month     
  
  }
  closeDialog() {
    this
      .dialogRef
      .close();
  }
  getHeigth(event : any): string{
    const startDate= new Date(event.start);
    const endDate = new Date(event.end);
    let timeDiff = Math.abs(endDate.getHours() - startDate.getHours());
    let hoursDifference = Math.floor(timeDiff/1000/60/60);
    timeDiff -= hoursDifference*1000*60*60;    
      return (timeDiff*16)+'px'
  }
  getTop(event : any): string{
    const startDate= new Date(event.start);
    return (startDate.getHours()*16)+'px';
  }
  
}

