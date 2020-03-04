import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userlogged: boolean = false;
  private userName: string = '';

  constructor(private  router: Router) {
  }

  ngOnInit() {
    console.log(localStorage.getItem('access_token'));
    if (localStorage.getItem('access_token') === null) {
      this.userlogged = false;
    } else {
      this.userlogged = true;
    }
    // tslint:disable-next-line:prefer-const
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.userName = currentUser && currentUser.full_name;

    if (!this.userName) {
      this.userName = 'User Name';
    }
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    localStorage.removeItem('access_token');
    this.userlogged = false;

    this.router.navigate(['login']);
  }

}
