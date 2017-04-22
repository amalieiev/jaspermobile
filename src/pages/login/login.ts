import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {LibraryPage} from '../library/library';

import {Profile} from '../../services/profile.service';
import {Visualize} from '../../services/visualize.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController,
              public vis: Visualize,
              public profile: Profile) {

  }

  login() {
    this.tryDemo();
  }

  tryDemo() {
    this.profile.login = 'joeuser';
    this.profile.password = 'joeuser';
    // this.profile.server = 'http://build-master-j8.jaspersoft.com:8980/jrs-pro-feature-embeddable-ahv2';
    this.profile.server = 'http://localhost:4040/jasperserver-pro';

    this.navCtrl.setRoot(LibraryPage);
  }
}
