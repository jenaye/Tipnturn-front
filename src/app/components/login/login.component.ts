import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private username:string;
  private password:string;
  public hide = true;
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

    submit() {
        this.http.post(`${environment.API}/login_check`, { username : this.username, password: this.password })

            .subscribe(response => {
                if (response['token']!=="") {
                    var token = response['token'];
                    localStorage.setItem('token', token);
                    this.router.navigateByUrl('/home/dashboard');
                }
            });
    }

}
