import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string = '';
  public password: string = '';


  constructor(private  router: Router, private httpClient: HttpClient) {
  }

  login() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', '*');
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
    console.log('this.username :' + this.username)
    var data = {
      username: this.username,
      password: this.password
    }
    this.httpClient.post<any[]>('/api/authenticate', data, httpOptions).subscribe(result => {
      // tslint:disable-next-line:prefer-const
      const r = result;
      //this.gender = r.token;
      console.log('token :' + r.token);
      localStorage.setItem('access_token', r.token);

      this.router.navigate(['viewEvents']);
    }, error => console.error(error));
    /*if (this.username === 'demo' && this.password === 'demo') {
      this.router.navigate(['createUser']);
    } else {
      console.log('test');
    }*/
  }

  createUser() {
    this.router.navigate(['createNewUser']);
  }

  ngOnInit() {
  }

}
