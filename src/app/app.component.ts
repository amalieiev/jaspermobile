import {Component, ViewChild} from '@angular/core';

import {Platform, MenuController, Nav} from 'ionic-angular';

import {LoginPage} from '../pages/login/login';
import {LibraryPage} from '../pages/library/library';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    // make HelloIonicPage the root (or first) page
    rootPage = LoginPage;

    pages: Array<{title: string, icon: string, component: any}> = [];
    modals: Array<{title: string, component: any}> = [];

    constructor(public platform: Platform,
                public menu: MenuController,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {

            this.pages = [
                {title: 'Library', icon: 'pie', component: LibraryPage},
                {title: 'Repository', icon: 'folder-open', component: null},
                {title: 'Recently Viewed', icon: 'open', component: null},
                {title: 'Saved Items', icon: 'cloud-download', component: null},
                {title: 'Favorites', icon: 'star', component: null},
                {title: 'Scheduled', icon: 'stopwatch', component: null}
            ];

            this.modals = [
                {title: 'About', component: null},
                {title: 'Settings', component: null},
                {title: 'Feedback by email', component: null}
            ];

            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(component) {
        this.menu.close();
        this.nav.setRoot(component);
    }

    openModal(component) {
        this.menu.close();
    }

    logOut() {
        this.menu.close();
        this.nav.setRoot(LoginPage);
    }
}
