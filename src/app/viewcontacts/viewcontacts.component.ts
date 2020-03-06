import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-viewcontacts',
  templateUrl: './viewcontacts.component.html',
  styleUrls: ['./viewcontacts.component.scss']
})
export class ViewcontactsComponent implements OnInit {
  eventsMembersData;
  firstName;
  lastName;
  email;
  primaryPhone;
  secondaryPhone;
  httpOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      'Access-Control-Allow-Origin': '*'
    }
  };

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.loadContact();
  }

  loadContact() {
    this.httpClient.get('/api/userEvents/userguestlist', this.httpOptions).subscribe(
      resp => {
        this.eventsMembersData = resp.data;
      }
    );
  }

  deleteContact(id) {
    this.httpClient.delete('/api/userEvents/userguest/' + id, this.httpOptions).subscribe(
      resp => {
        if (resp.data) {
          this.loadContact();
        }
      }
    );
  }

  addContact() {
    // tslint:disable-next-line:label-position
    var user = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      primaryPhone: this.primaryPhone,
      secondaryPhone: this.secondaryPhone
    }
    this.httpClient.post('/api/userEvents/userguest/0', user, this.httpOptions).subscribe(
      resp => {
        if (resp.data) {
          this.loadContact();
        }
      }
    );
  }
}
