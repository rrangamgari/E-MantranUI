import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string = '';
  public password: string = '';



  constructor( private  router: Router) {
  }

  login() {
    console.log("this.username :"+this.username)

    if (this.username === 'demo' && this.password === 'demo') {
      this.router.navigate(['createUser']);
    } else {
      console.log('test');
    }
  }

  createUser() {
    this.router.navigate(['createNewUser']);
  }

  ngOnInit() {
  }

}
