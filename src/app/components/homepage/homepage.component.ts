import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  
})
export class HomepageComponent  {

    public sideBarOpen = false;

    constructor() { }
    
    sidebarChange(event: Event) {
        this.sideBarOpen = !this.sideBarOpen;
    }
  
}
