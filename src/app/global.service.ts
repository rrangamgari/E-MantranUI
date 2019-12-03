import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {
    console.log('global' + this.passwordDetails);
  }

  public userDetails: FormGroup;
  public passwordDetails: FormGroup;

  getUserDetails() {
    return this.userDetails;
  }

  getPasswordDetails() {
    return this.passwordDetails;
  }
}

