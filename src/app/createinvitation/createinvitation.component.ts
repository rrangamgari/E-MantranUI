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
  private eventTypeValues: string;
  private previewUrl: any;
  private message: string;
  private eventTitle: string;
  private hostedBy: string;
  private eventDate: string;
  private phone: string;
  private roles: any[];
  private address: string;
  private city: string;
  private state: string;
  private zip: string;


  constructor(public  router: Router, private globalService: GlobalService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.eventTypeVal = '0';

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
      console.log(r.data);

      // tslint:disable-next-line:prefer-for-of
      /*for (let i = 0; i < r.data.length; i++) {
        // @ts-ignore
        this.eventTypeValues[r.data[i].eventtypeid] = r.data[i].eventdescription;
        console.log(r.data[i].eventtypeid);
      }*/
    }, error => console.error(error));
  }

  save() {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        'Access-Control-Allow-Origin': '*'
      }
    };
    alert(this.eventDate);
    const user = {
      eventtitle: this.eventTitle,
      eventtype: this.eventTypeVal,
      hostedby: this.hostedBy,
      startdate: this.eventDate,
      enddate: this.eventDate,
      location: null,
      phone: this.phone,
      eventmessage: this.message,
      addresses: {
        eventaddressid: null,
        eventaddress: this.address,
        eventcity: this.city,
        eventstate: this.state,
        eventcountry: null,
        eventzip: this.zip
      },
      maxguests: 10,
      eventallowkids: true,
      attachmentlink: null,
      resharable: true
    };
    this.httpClient.post('api/userEvents/event', user, httpOptions).subscribe(
      data => {
        console.log(data);
        // tslint:disable-next-line:no-conditional-assignment
        alert('Event Created.');
        console.log(localStorage.getItem('passwordAnswer'));
        // this.imageUrl = this.usersData.data.dbFile;
      }
    );
  }


  back() {
  }

  public eventTypeSelected(value: string): void {
    if (this.eventType && value) {
      const status: ListItemSimplified = this.eventType.find(s => s.eventtypeid == value);
      if (status) {
        this.eventTypeValues = status.eventdescription;
      }
    } else {
      this.eventTypeValues = '';
    }
  }
}

export class ListItemSimplified {
  eventtypeid: string;
  eventdescription: string;
}
