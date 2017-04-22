import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {LibraryPage} from '../library/library';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.setRoot(LibraryPage);
  }

  tryDemo() {

  }
}
