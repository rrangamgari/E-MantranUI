import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {GlobalService} from '../global.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss'],
  providers: [GlobalService]
})
export class CreateuserComponent implements OnInit, OnDestroy {

  userDetails: FormGroup;

  constructor(public  router: Router, private globalService: GlobalService) {
  }

  ngOnInit() {
    console.log(this.globalService);
    if (this.globalService.userDetails) {
      this.userDetails = this.globalService.userDetails;
    }
  }

  ngOnDestroy() {
    this.globalService.userDetails = this.userDetails;
  }

  back() {
    this.router.navigate(['createNewUser']);
  }
}
