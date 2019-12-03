import {Component, OnDestroy, OnInit} from '@angular/core';
import {GlobalService} from '../global.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createuserpassword',
  templateUrl: './createuserpassword.component.html',
  styleUrls: ['./createuserpassword.component.scss'],
  providers: [GlobalService]
})
export class CreateuserpasswordComponent implements OnInit, OnDestroy {
  //passwordDetails: FormGroup;
  passwordQuestion: string = '';
  passwordAnswer: string = '';
  username: string = '';
  password: string = '';
  public user;

  constructor(public  router: Router, private globalService: GlobalService, private fb: FormBuilder) {
    /*this.passwordDetails = new FormGroup({

      exampleInputUser1: new FormControl()
    });*/
  }

  ngOnInit() {
    console.log('int :' + localStorage.getItem('passwordQuestion'));
    console.log('int :' + localStorage.getItem('username'));
    this.passwordQuestion = localStorage.getItem('passwordQuestion');
    this.passwordAnswer = localStorage.getItem('passwordAnswer');
    this.user = localStorage.getItem('username');
    this.password = localStorage.getItem('password');
  }

  ngOnDestroy() {
    console.log('destroy :' + this.passwordQuestion);
    //this.globalService.passwordDetails = this.passwordDetails;
    localStorage.setItem('passwordQuestion', this.passwordQuestion);
  }


  next() {
    console.log(this.passwordQuestion);
    localStorage.setItem('passwordQuestion', this.passwordQuestion);
    localStorage.setItem('passwordAnswer', this.passwordAnswer);
    localStorage.setItem('username', this.user);
    localStorage.setItem('password', this.password);
    this.router.navigate(['createUser']);
  }
}
