import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private logged:boolean;
    ngOnInit() {
        if(localStorage.getItem('token')){
            this.logged = true;
        }else{
            this.logged = false;
        }
    }
}
