import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {GlobalService} from '../global.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-createinvitation',
  templateUrl: './createinvitation.component.html',
  styleUrls: ['./createinvitation.component.scss']
})
export class CreateinvitationComponent implements OnInit {
  userDetails: FormGroup;
  private eventTypeVal: string;
  private eventType: any[];
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
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        'Access-Control-Allow-Origin': '*'
      }
    };
    this.httpClient.get<any[]>('/api/eventSystem/eventType', httpOptions).subscribe(result => {
      // tslint:disable-next-line:prefer-const
      const r = result;
      this.eventType = r.data;
    }, error => console.error(error));
  }

  save() {

  }

  back() {
  }
}
