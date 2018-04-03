import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-calendar', templateUrl: './calendar.component.html', styleUrls: ['./calendar.component.css']})
export class CalendarComponent implements OnInit {

  public today : Date;
  public startDate : Date;

  public pastMonthDays : Array < any >;
  public currentMonthDays : Array < any >;
  public nextMonthDays : Array < any >;
  7

  public pastHoverTab : Array < boolean >;
  public currentHoverTab : Array < boolean >;
  public nextHoverTab : Array < boolean >;

  public currentMonthName : String;

  public nbDayPastMonth : number;
  public nbDayCurrentMonth : number;

  constructor() {
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
  }

  infoMonth(date : Date) {
    const numMonth = date.getMonth();
    switch (numMonth) {
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
    const startpoint = this.nbDayPastMonth - this
      .startDate
      .getDay() + 2;
    for (let i = startpoint; i < this.nbDayPastMonth + 1; i++) {
      this
        .pastMonthDays
        .push(i);
      this
        .pastHoverTab
        .push(false);
      cpt++;
    }
    for (let i = 1; i < this.nbDayCurrentMonth + 1; i++) {
      this
        .currentMonthDays
        .push(i);
      this
        .currentHoverTab
        .push(false);
      cpt++;
    }
    const middlePoint = 35 - cpt;
    for (let i = 1; i < middlePoint + 1; i++) {
      this
        .nextMonthDays
        .push(i);
      this
        .nextHoverTab
        .push(false);
    }

  }

  previousMonth(){
    this.today =new Date(new Date(new Date().setDate(1)).setMonth(this.today.getMonth()-1));
    this.startDate =this.today;
    this.pastMonthDays = new Array();
    this.currentMonthDays = new Array();
    this.nextMonthDays = new Array();
    this.pastHoverTab = new Array();
    this.currentHoverTab = new Array();
    this.nextHoverTab = new Array();
    this.infoMonth(this.today);
    this.iniTabs();
  }

  nextMonth(){
    this.today =new Date(new Date(new Date().setDate(1)).setMonth(this.today.getMonth()+1));
    this.startDate =this.today;
    this.pastMonthDays = new Array();
    this.currentMonthDays = new Array();
    this.nextMonthDays = new Array();
    this.pastHoverTab = new Array();
    this.currentHoverTab = new Array();
    this.nextHoverTab = new Array();
    this.infoMonth(this.today);
    this.iniTabs();
  }
}
