import {Component} from '@angular/core';
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-resource-info',
  templateUrl: 'resource-info.html'
})
export class ResourceInfoPage {
  resource: any;

  constructor(public params: NavParams) {
    this.resource = params.get('resource');
  }
}