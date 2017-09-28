import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private logged:any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
      localStorage.clear();
      console.log('token deleted');
      this.router.navigateByUrl('/');
      window.location.reload();
  }

}
