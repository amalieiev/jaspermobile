import {Component} from '@angular/core';
import {NavController, LoadingController, ToastController} from 'ionic-angular';

import {LibraryPage} from '../library/library';

import {Profile} from '../../services/profile.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username: string = '';
  password: string = '';
  server: string = '';

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public profile: Profile) {

  }

  login() {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.profile.login({
      username: this.username,
      password: this.password,
      server: this.server,
    }).then(()=> {
      loading.dismiss();
      this.navCtrl.setRoot(LibraryPage);
    }).catch((err)=> {
      loading.dismiss();
      this.toastCtrl.create({
        message: err.message,
        duration: 2000,
        position: 'top'
      }).present();
    });
  }

  tryDemo() {
    this.applyTestProfile();
    this.login();
  }

  applyTestProfile() {
    this.username = 'joeuser';
    this.password = 'joeuser';
    this.server = 'http://build-master-j8.jaspersoft.com:8980/jrs-pro-feature-embeddable-ahv2';
    // this.server = 'http://localhost:4040/jasperserver-pro';
  }
}
