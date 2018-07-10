import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  @Output()
  public change:  EventEmitter<boolean> 



  constructor() {
    this.change = new EventEmitter<boolean>();
  }

  sidebarChange(event : Event){
    this.change.emit(true);
  }
}
