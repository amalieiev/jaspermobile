import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {ViewerPage} from "../pages/viewer/viewer";
import {LoginPage} from '../pages/login/login';
import {LibraryPage} from '../pages/library/library';
import {AboutPage} from '../pages/about/about';
import {SettingsPage} from "../pages/settings/settings";
import {ResourceInfoPage} from '../pages/resource-info/resource-info';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Profile} from '../services/profile.service';
import {Visualize} from '../services/visualize.service';

@NgModule({
  declarations: [
    MyApp,
    ViewerPage,
    LoginPage,
    LibraryPage,
    ResourceInfoPage,
    AboutPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ViewerPage,
    LoginPage,
    LibraryPage,
    ResourceInfoPage,
    AboutPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Profile,
    Visualize,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
