import {Component, OnInit} from '@angular/core';

import { EventService } from '../../services/event.service';
import { DatePipe } from '@angular/common';
import { DayDetailsComponent } from '../dayDetails/dayDetails.component';
import { MatDialog} from '@angular/material';


@Component({selector: 'app-calendar', templateUrl: './calendar.component.html', styleUrls: ['./calendar.component.css']})
export class CalendarComponent implements OnInit {


  public today: Date;
  public startDate: Date;
  public numMonth: number;

  public pastMonthDays: Array < any >;
  public currentMonthDays: Array < any >;
  public nextMonthDays: Array < any >;
  
  public pastHoverTab: Array < boolean >;
  public currentHoverTab: Array < boolean >;
  public nextHoverTab: Array < boolean >;

  public currentMonthName: String;


  public nbDayPastMonth : number;
  public nbDayCurrentMonth : number;


  public eventStartDate :Date;
  public eventEndDate : Date;


  constructor(private eventService : EventService, private datePipe: DatePipe,  public dialog: MatDialog) {

    this.today = new Date();
    this.startDate = new Date(this.today.setDate(1));
    this.pastMonthDays = new Array();
    this.currentMonthDays = new Array();
    this.nextMonthDays = new Array();
    this.pastHoverTab = new Array();
    this.currentHoverTab = new Array();
    this.nextHoverTab = new Array();
  }

  ngOnInit() {
    this.infoMonth(this.today);
    this.iniTabs();
    this.initEvent();
  }

  initEvent(): void{
    const data = '?start[After]'+this.datePipe.transform(this.eventStartDate, 'yyyy-MM-dd');
    this.eventService.getData(data).subscribe(response=>{
      let res = response['hydra:member'];
      res.forEach(element => {
        switch(new Date(element['start']).getMonth()){
          case this.numMonth:
          this.currentMonthDays[new Date(element['start']).getDate()-1].events.push(element)
          break;
          case (this.numMonth+1):
          break;
          case (this.numMonth-1):
          break;
        }
      });    
    });
  }

  infoMonth(date : Date): void {
     this.numMonth = date.getMonth();
    switch (this.numMonth) {

      case 0:
        this.currentMonthName = 'Janvier';
        this.nbDayCurrentMonth = 31;
        this.nbDayPastMonth = 31;
        break;
      case 1:
        this.currentMonthName = 'Février';
        this.nbDayCurrentMonth = 28;
        this.nbDayPastMonth = 31;
        break;
      case 2:
        this.currentMonthName = 'Mars';
        this.nbDayCurrentMonth = 31;
        this.nbDayPastMonth = 28;
        break
      case 3:
        this.currentMonthName = 'Avril';
        this.nbDayCurrentMonth = 30;
        this.nbDayPastMonth = 31;
        break;
      case 4:
        this.currentMonthName = 'Mai';
        this.nbDayCurrentMonth = 31;
        this.nbDayPastMonth = 30;
        break;
      case 5:
        this.currentMonthName = 'Juin';
        this.nbDayCurrentMonth = 30;
        this.nbDayPastMonth = 31;
        break;

      case 6:
        this.currentMonthName = 'Juillet';
        this.nbDayCurrentMonth = 31;
        this.nbDayPastMonth = 30;
        break;
      case 7:
        this.currentMonthName = 'Aout';
        this.nbDayCurrentMonth = 31;
        this.nbDayPastMonth = 31;
        break;
      case 8:
        this.currentMonthName = 'Septembre';
        this.nbDayCurrentMonth = 30;
        this.nbDayPastMonth = 31;
        break;
      case 9:
        this.currentMonthName = 'Octobre';
        this.nbDayCurrentMonth = 31;
        this.nbDayPastMonth = 30;
        break;
      case 10:
        this.currentMonthName = 'Novembre';
        this.nbDayCurrentMonth = 30;
        this.nbDayPastMonth = 31;
        break;
      case 11:
        this.currentMonthName = 'Décembre';
        this.nbDayCurrentMonth = 31;
        this.nbDayPastMonth = 31;
        break;
    }
  }
  onHover(index : number, tab : string) {
    switch (tab) {
      case 'past':
        this.pastHoverTab[index] = true;
        break;
      case 'current':
        this.currentHoverTab[index] = true;
        break;
      case 'next':
        this.nextHoverTab[index] = true;
        break;
    }
  }
  onLeaving(index : number, tab : string) {
    switch (tab) {
      case 'past':
        this.pastHoverTab[index] = false;
        break;
      case 'current':
        this.currentHoverTab[index] = false;
        break;
      case 'next':
        this.nextHoverTab[index] = false;
        break;
    }
  }

  iniTabs() {
    let cpt = 0;
    let dayOfWeek =this.startDate.getDay();
    if (dayOfWeek === 0){
      dayOfWeek=7;
    }
   
    const startpoint = this.nbDayPastMonth - (dayOfWeek-2) ;
   
    this.eventStartDate =new Date (new Date( this.today.setMonth(this.today.getMonth()-1)).setDate(startpoint-1))
    for (let i = startpoint; i < this.nbDayPastMonth+1 ;i++) {
      this.pastMonthDays.push({day:i,events: []});
      this.pastHoverTab.push(false);
      cpt++;
    }
    for (let i = 1; i < this.nbDayCurrentMonth + 1; i++) {
      this.currentMonthDays.push({day:i,events : []});
      this.currentHoverTab.push(false);
      cpt++;
    }
    const middlePoint = 42 - cpt;
    this.eventStartDate =new Date (new Date( new Date().setMonth(this.today.getMonth()+1)).setDate(middlePoint+1))
    for (let i = 1; i < middlePoint + 1; i++) {
      this.nextMonthDays.push({day:i, events : []});
      this.nextHoverTab.push(false);

    }

  }


  classicInit(date:Date){
    this.startDate =date;

    this.pastMonthDays = new Array();
    this.currentMonthDays = new Array();
    this.nextMonthDays = new Array();
    this.pastHoverTab = new Array();
    this.currentHoverTab = new Array();
    this.nextHoverTab = new Array();
    this.infoMonth(date);
    this.iniTabs();
    this.initEvent();
  }

  previousMonth(){
    this.startDate = new Date(this.startDate.setMonth(this.startDate.getMonth()-1));
    this.classicInit(this.startDate);
  }

  nextMonth(){
    this.startDate = new Date(this.startDate.setMonth(this.startDate.getMonth()+1));
    this.classicInit(this.startDate);
  }

  showDetail(index : number, periode : string){
    switch(periode){
      case 'past':
      if(this.pastMonthDays[index].events.length !==0){
        const dialogRef = this.dialog.open(DayDetailsComponent, {
          width: '500px',
          data :  this.pastMonthDays[index].events,
        });
        dialogRef
        .afterClosed()
        .subscribe(result => {
        });
      }
      break;
      case 'current':
      if(this.currentMonthDays[index].events.length !==0){
        const dialogRef = this.dialog.open(DayDetailsComponent, {
          width: '500px',
          data : {events: this.currentMonthDays[index].events, month : this.currentMonthName } ,
        });
        dialogRef
        .afterClosed()
        .subscribe(result => {
        });
      }
      break;
      case 'next':
      if(this.nextMonthDays[index].events.length !==0){
        const dialogRef = this.dialog.open(DayDetailsComponent, {
          width: '500px',
          height: '300px',
          data :  this.nextMonthDays[index].events,
        });
        dialogRef
        .afterClosed()
        .subscribe(result => {
        });
      }
      break;
    }

  }
}
