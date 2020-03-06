import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-viewinvitation',
  templateUrl: './viewinvitation.component.html',
  styleUrls: ['./viewinvitation.component.scss']
})
export class ViewinvitationComponent implements OnInit {
  eventsData;
  eventsMembersData;
  eventsTitle;
  httpOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      'Access-Control-Allow-Origin': '*'
    }
  };

  constructor(private  router: Router, private httpClient: HttpClient) {
  }

  ngOnInit() {
    console.log('localStorage.getItem(access_token) : ' + localStorage.getItem('access_token'));
    if (localStorage.getItem('access_token') === null) {
      this.router.navigate(['login']);
    } else {

      this.loadEventView();

    }
  }

  public deleteEvent(id) {
    this.httpClient.delete('/api/userEvents/event/' + id, this.httpOptions).subscribe(
      resp => {
        if (resp.data) {
          alert('Deleted Successfully');
          this.loadEventView();
        } else {
          alert('Failed to Delete');
        }

      }
    );

  }

  loadEventView() {
    this.httpClient.get('/api/userEvents/events', this.httpOptions).subscribe(
      resp => {
        this.eventsData = resp.data;

      }
    );
  }

  public listGuests(id, title) {
    this.eventsTitle = title;
    this.httpClient.get('/api/userEvents/guestlist/' + id, this.httpOptions).subscribe(
      resp => {
        this.eventsMembersData = resp.data;
      }
    );

  }
}
