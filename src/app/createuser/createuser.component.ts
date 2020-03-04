import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {GlobalService} from '../global.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss'],
  providers: [GlobalService]
})
export class CreateuserComponent implements OnInit, OnDestroy {

  userDetails: FormGroup;
  private genderVal: string;
  private gender: any[];
  private previewUrl: any;
  private id: string;
  private usersData;
  private data;
  private firstName: string;
  private middleName: string;
  private lastName: string;
  private phone: string;
  private roles: any[];
  private email: string;
  private rolesVal: any;

  private address1: string;
  private address2: string;
  private city: string;
  private state: string;
  private country: string;
  private zip: string;

  /*private password: string;*/
  private newpassword: string;
  private confnewpassword: string;
  private passwordQuestions: any[];
  private passwordQuestionsVal: any;
  private passwordAnswer: string;

  constructor(public  router: Router, private globalService: GlobalService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    console.log(this.globalService);

    this.httpClient.get<any[]>('/api/userSystem/gender').subscribe(result => {
      // tslint:disable-next-line:prefer-const
      const r = result;
      this.gender = r.data;
    }, error => console.error(error));
  }

  ngOnDestroy() {
    this.globalService.userDetails = this.userDetails;
  }

  back() {
    this.router.navigate(['createNewUser']);
  }

  loadPreview() {
    this.previewUrl = localStorage.getItem('previewUrl');
  }

  save() {
    console.log(localStorage.getItem('username'));
    if (localStorage.getItem('username') == null) {
      this.router.navigate(['createNewUser']);
    }
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', '*');
    httpHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZW1vIiwiZXhwIjoxNTgzMjczNTQyLCJpYXQiOjE1ODMyNTU1NDJ9.GM4Ky0M3f1uBbOlEXB5NVw75mJMJY6X9xbL-g-SE6tfaiizYTXVTbxcJfywVQHy_6nKMpV4szmf4QnueiaiK9g');

    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        'Access-Control-Allow-Origin': '*'
      }
    };
    const user = {
      givenname: this.firstName,
      middlename: this.middleName,
      familyname: this.lastName,
      email: this.email,
      usergenderid: this.genderVal,
      mobile: this.phone,
      accountname: localStorage.getItem('username'),
      active: '1',
      password: {
        passwordQuestion: {
          id: localStorage.getItem('passwordQuestion')
        },
        passwordanswer: localStorage.getItem('passwordAnswer'),
        password: localStorage.getItem('password')
      }
    };
    this.httpClient.post('/api/userSystem/user', user, httpOptions).subscribe(
      data => {
        console.log(data);
        // tslint:disable-next-line:no-conditional-assignment
        if (data.status === 'success') {
          localStorage.removeItem('username');
          localStorage.removeItem('passwordQuestion');
          localStorage.removeItem('passwordAnswer');
          localStorage.removeItem('password');
        }
        console.log(localStorage.getItem('passwordAnswer'));
        // this.imageUrl = this.usersData.data.dbFile;
      }
    );
  }

}
