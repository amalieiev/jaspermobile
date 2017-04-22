import {Injectable} from '@angular/core';
import {Profile} from './profile.service';

@Injectable()
export class Visualize {
  visualizePromise: Promise<any>;
  script: any;

  constructor(public profile: Profile) {
  }

  loadVisualize() {
    this.script = document.createElement('script');

    this.visualizePromise = new Promise((resolve, reject) => {
      this.script.setAttribute('src', `${this.profile.server}/client/visualize.js`);
      this.script.onload = () => {
        resolve(window['visualize']);
      };
      this.script.onerror = (err) => {
        reject(err);
      };
      document.body.appendChild(this.script);
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
        this.visualizePromise.then(auth.bind(this)).catch(reject);
      } else {
        this.loadVisualize().then(auth.bind(this)).catch(reject);
      }
    });
  }
}