import {Component, OnDestroy, OnInit} from '@angular/core';
import {GlobalService} from '../global.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-createuserpassword',
  templateUrl: './createuserpassword.component.html',
  styleUrls: ['./createuserpassword.component.scss'],
  providers: [GlobalService]
})
export class CreateuserpasswordComponent implements OnInit, OnDestroy {
  private passwordAnswer: string;
  private username: string;
  private password: string;
  private passwordQuestions: any[];
  private passwordQuestionsVal: any;
  public user;

  constructor(public  router: Router, private globalService: GlobalService, private fb: FormBuilder, private httpClient: HttpClient) {
    /*this.passwordDetails = new FormGroup({

      exampleInputUser1: new FormControl()
    });*/
  }

  ngOnInit() {
    console.log('int :' + localStorage.getItem('passwordQuestion'));
    console.log('int :' + localStorage.getItem('username'));
    this.passwordQuestionsVal = localStorage.getItem('passwordQuestion');
    this.passwordAnswer = localStorage.getItem('passwordAnswer');
    this.username = localStorage.getItem('username');
    this.password = localStorage.getItem('password');
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', '*');
    httpHeaders.append('Authorization', 'Basic ' + btoa('saikiran:password'));

    const httpOptions = {
      headers: httpHeaders
    };
    this.httpClient.get<any[]>('/api/userSystem/passwordQuestions').subscribe((result) => {
      this.passwordQuestions = result.data;
    }, error => console.error(error));
  }

  ngOnDestroy() {
    console.log('destroy :' + this.passwordQuestionsVal);
    localStorage.setItem('passwordQuestion', this.passwordQuestionsVal);
    localStorage.setItem('passwordAnswer', this.passwordAnswer);
  }

  next() {
    console.log('passwordAnswer: ' + this.passwordAnswer);
    localStorage.setItem('passwordQuestion', this.passwordQuestionsVal);
    localStorage.setItem('passwordAnswer', this.passwordAnswer);
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    this.router.navigate(['createUser']);
  }
}
