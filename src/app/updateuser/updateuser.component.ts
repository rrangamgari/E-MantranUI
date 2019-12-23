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

  private id: string;
  private usersData;
  private data;
  private firstName: string;
  private middleName: string;
  private lastName: string;
  private phone: string;
  private gender: any[];
  private roles: any[];
  private email: string;
  private genderVal: any;
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

  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get('userId');
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', '*');
    httpHeaders.append('Authorization', 'Basic ' + btoa('saikiran:password'));

    const httpOptions = {
      headers: httpHeaders
    };
    this.httpClient.get<any[]>('/api/MyReports/gender').subscribe(result => {
      this.gender = result.data;
    }, error => console.error(error));

    this.httpClient.get<any[]>('/api/MyReports/roles').subscribe(result => {
      this.roles = result.data;
    }, error => console.error(error));
    this.httpClient.get<any[]>('/api/MyReports/passwordQuestions').subscribe(result => {
      this.passwordQuestions = result.data;
    }, error => console.error(error));
    /*this.httpClient.get('/api/MyReports/gender', httpOptions).subscribe(
      data => {

        this.gender = data.data.gendername;

        //this.imageUrl = this.usersData.data.dbFile;
      }
    );*/
    this.httpClient.get('/api/UserDetails/user/' + this.id, httpOptions).subscribe(
      obj => {
        this.usersData = obj.data;

        this.firstName = this.usersData.givenname;
        this.middleName = this.usersData.middlename;
        this.lastName = this.usersData.familyname;
        this.email = this.usersData.email;

        this.genderVal = this.usersData.usergenderid;
        //this.rolesVal = this.usersData.usergenderid;
        console.log(this.usersData.usergenderid)
        this.phone = this.usersData.mobile;
        for (var k = 0; k < this.usersData.addresses.length; k++) {
          if (this.usersData.addresses[k].defaultaddress) {
            this.address1 = this.usersData.addresses[k].address1;
            this.address2 = this.usersData.addresses[k].address2;
            this.city = this.usersData.addresses[k].city;
            this.state = this.usersData.addresses[k].state;
            this.country = this.usersData.addresses[k].country;
            this.zip = this.usersData.addresses[k].zip;
          }
        }
        if (this.usersData.password != null) {
          console.log(this.usersData.password);
          /*this.password = this.usersData.password.password;*/
          this.passwordQuestionsVal = this.usersData.password.passwordQuestion.id;
          this.passwordAnswer = this.usersData.password.passwordanswer;

        }
        for (var k = 0; k < this.usersData.userRoles.length; k++) {
          this.rolesVal[k] = this.usersData.userRoles[k].userRoleId.userroleid;
        }
        for (var k = 0; k < this.usersData.userRoles.length; k++) {
          this.rolesVal[k] = this.usersData.userRoles[k].userRoleId.userroleid;
        }
        //this.imageUrl = this.usersData.data.dbFile;
      }
    );
  }

  saveUserDetails() {
    this.id = this.route.snapshot.queryParamMap.get('userId');
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', '*');
    httpHeaders.append('Authorization', 'Basic ' + btoa('saikiran:password'));

    const httpOptions = {
        headers: httpHeaders

      }
    ;
    const user = {
      "givenname": this.firstName,
      "middlename": this.middleName,
      "familyname": this.lastName,
      "email": this.email,
      "usergenderid": this.genderVal,
      "mobile": this.phone
    };
    this.httpClient.post('/api/UserDetails/userDetail/' + this.id, user, httpOptions).subscribe(
      data => {
        console.log(data);
        //this.imageUrl = this.usersData.data.dbFile;
      }
    );

  }

  saveUserAddress() {
    this.id = this.route.snapshot.queryParamMap.get('userId');
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', '*');
    httpHeaders.append('Authorization', 'Basic ' + btoa('saikiran:password'));

    const httpOptions = {
        headers: httpHeaders

      }
    ;
    const user = {
      "address1": this.address1,
      "address2": this.address2,
      "city": this.city,
      "state": this.state,
      "country": this.country,
      "zip": this.zip
    };
    this.httpClient.post('/api/UserDetails/address/' + this.id, user, httpOptions).subscribe(
      data => {
        console.log(data);
        //this.imageUrl = this.usersData.data.dbFile;
      }
    );

  }

  saveUserRole() {
    this.id = this.route.snapshot.queryParamMap.get('userId');
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', '*');
    httpHeaders.append('Authorization', 'Basic ' + btoa('saikiran:password'));

    const httpOptions = {
        headers: httpHeaders
      }
    ;
    console.log(this.rolesVal);
    this.httpClient.post('/api/UserDetails/roles/' + this.id, this.rolesVal, httpOptions).subscribe(
      data => {
        console.log(data);
        //this.imageUrl = this.usersData.data.dbFile;
      }
    );

  }
}
