import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GlobalService} from '../global.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-createinvitation',
  templateUrl: './createinvitation.component.html',
  styleUrls: ['./createinvitation.component.scss']
})
export class CreateinvitationComponent implements OnInit {
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  minDate = {year: this.year - 100, month: this.month, day: this.day};
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
  httpOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      'Access-Control-Allow-Origin': '*'
    }
  };
  private eventId: string;
  private eventsData: any;

  constructor(public  router: Router, private globalService: GlobalService, private httpClient: HttpClient, private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.eventTypeVal = '0';
    this.eventId = this.route.snapshot.queryParamMap.get('eventId');

    this.httpClient.get<any[]>('/api/eventSystem/eventType', this.httpOptions).subscribe(result => {
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

    if (this.eventId != null) {
      this.httpClient.get('/api/userEvents/event/' + this.eventId, this.httpOptions).subscribe(
        resp1 => {
          this.eventsData = resp1.data;
          this.eventTitle = this.eventsData.eventtitle;
          this.eventTypeVal = this.eventsData.eventtype.eventtypeid;
          this.eventDate = this.eventsData.startdate;
          this.hostedBy = this.eventsData.hostedby;
          this.phone = this.eventsData.phone;
          this.address = this.eventsData.addresses.eventaddress;
          this.city = this.eventsData.addresses.eventcity;
          this.state = this.eventsData.addresses.eventstate;
          this.zip = this.eventsData.addresses.eventzip;
          this.message = this.eventsData.eventmessage;

        }
      );
    }
  }

  save() {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        'Access-Control-Allow-Origin': '*'
      }
    };
    //alert(this.eventDate);
    const user = {
      eventdetailsid: this.eventId,
      eventtitle: this.eventTitle,
      eventtype: {
        eventtypeid: this.eventTypeVal
      },
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
    if (this.eventId != null) {

      this.httpClient.post('api/userEvents/event', user, httpOptions).subscribe(
        data => {
          console.log(data);
          alert('Event Updated .');
          this.router.navigate(['viewEvents']);
        }
      );
    } else {
      this.httpClient.post('api/userEvents/event', user, httpOptions).subscribe(
        data => {
          console.log(data);
          alert('Event Created.');
          this.router.navigate(['viewEvents']);
        }
      );
    }

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
