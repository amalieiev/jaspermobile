import {Injectable} from '@angular/core';
import {Profile} from './profile.service';

@Injectable()
export class Visualize {
  visualizePromise: Promise<any>;

  constructor(public profile: Profile) {
  }

  loadVisualize() {
    var script = document.createElement('script');

    this.visualizePromise = new Promise((resolve, reject) => {
      script.setAttribute('src', `${this.profile.server}/client/visualize.js`);
      script.onload = () => {
        resolve(window['visualize']);
      };
      script.onerror = (err) => {
        reject(err);
      };
      document.body.appendChild(script);
    });

    return this.visualizePromise;
  }

  login() {
    return new Promise((resolve, reject)=> {
      function auth(visualize) {
        visualize({
          auth: {
            name: this.profile.login,
            password: this.profile.password
          }
        }, resolve, reject);
      }

      if (this.visualizePromise) {
        this.visualizePromise.then(auth.bind(this));
      } else {
        this.loadVisualize().then(auth.bind(this));
      }
    });
  }
}