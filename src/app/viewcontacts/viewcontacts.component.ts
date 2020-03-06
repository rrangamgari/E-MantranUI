import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-viewcontacts',
  templateUrl: './viewcontacts.component.html',
  styleUrls: ['./viewcontacts.component.scss']
})
export class ViewcontactsComponent implements OnInit {
  eventsMembersData;
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
    this.httpClient.get('/api/userEvents/userguestlist', this.httpOptions).subscribe(
      resp => {
        this.eventsMembersData = resp.data;
      }
    );
  }

}
