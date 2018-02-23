import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({selector: 'app-side-bar', templateUrl: './side-bar.component.html', styleUrls: ['./side-bar.component.css']})
export class SideBarComponent implements OnInit {
  public options : any;

  constructor(private router: Router) {

  }
  logout(){
    localStorage.clear();
    console.log('token deleted');
    this.router.navigateByUrl('/login');
}
  ngOnInit() {}

}
