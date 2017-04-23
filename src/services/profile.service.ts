import {Injectable} from '@angular/core';
import {Visualize} from './visualize.service';

@Injectable()
export class Profile {
  username: string;
  password: string;
  server: string;
  script: any;

  constructor(public vis: Visualize) {}

  login(data: any) {
    this.username = data.username;
    this.password = data.password;
    this.server = data.server;

    return this.authVisualize();
  }

  loadVisualize() {
    if (this.script) {
      document.body.removeChild(this.script);
    }

    this.script = document.createElement('script');

    return new Promise((resolve, reject) => {
      this.script.setAttribute('src', `${this.server}/client/visualize.js`);
      this.script.onload = () => {
        resolve(window['visualize']);
      };
      this.script.onerror = (err) => {
        reject({message: 'Server is not available'});
      };
      document.body.appendChild(this.script);
    });
  }

  authVisualize() {
    return new Promise((resolve, reject)=> {
      this.loadVisualize().then((visualize: any)=> {
        visualize({
          auth: {
            name: this.username,
            password: this.password
          }
        }, (v)=> {
          this.vis.visualize = v;
          resolve(v);
        }, reject);
      }).catch(reject);
    });
  }
}