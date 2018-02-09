import { Component, OnInit } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers , RequestOptions} from '@angular/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username:string;
  private password:string;
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  submit() {
      let formData: FormData = new FormData();
      formData.append('_username', this.username)
      formData.append('_password', this.password)

      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      
      this.http
          .post('http://localhost:8000/api/login_check', formData,  headers)
          .subscribe(response => {
              if(response.status === 200){
                  const token = response.json().token;
                  localStorage.setItem('token', token);
                  this.router.navigateByUrl('/accueil');
                  window.location.reload();
              }else{
                    console.log('wrong login');
              }
          });
  }
}
