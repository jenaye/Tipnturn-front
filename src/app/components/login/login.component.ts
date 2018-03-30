import { Component, OnInit } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers , RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import url from './../../../config';

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
      let formData: FormData = new FormData();
      formData.append('_username', this.username)
      formData.append('_password', this.password)

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      
      this.http
          .post(`${url.API}/login_check`, formData)
          .subscribe(response => {
              if (response.status === 200) {
                  var token = response.json().token;
                  localStorage.setItem('token', token);
                  this.router.navigateByUrl('/home/dashboard');
              } else {
                  // show error maybe ?
              }
          });
  }
}
