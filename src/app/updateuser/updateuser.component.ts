import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
  }

  id;
  usersData;
  firstname;
  public lastname: string;
  email;

  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get('userId');
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', '*');
    httpHeaders.append('Authorization', 'Basic ' + btoa('saikiran:password'));

    const httpOptions = {
      headers: httpHeaders
    };
    this.httpClient.get('/MyReports/api/user/' + this.id, httpOptions).subscribe(
      data => {
        this.usersData = data;
        console.log(data);
        this.firstname = this.usersData.data.givenname;
        this.email = this.usersData.data.email;
        this.lastname = this.usersData.data.familyname;
      }
    );
  }

}
