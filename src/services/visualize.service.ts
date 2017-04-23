import {Injectable} from '@angular/core';

@Injectable()
export class Visualize {
  visualize: any;

  adhocView(config) {
    return this.visualize.adhocView(config);
  }
}