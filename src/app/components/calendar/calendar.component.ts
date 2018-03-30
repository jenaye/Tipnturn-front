import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public today: Date;
  constructor() { 
    this.today = new Date();
  }

  ngOnInit() {
    this.initWeek()
  }

  initWeek(){
     console.log(this.today.getDay());
  }

}
