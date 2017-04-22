import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavParams} from 'ionic-angular';

import {Visualize} from '../../services/visualize.service';

@Component({
  selector: 'page-viewer',
  templateUrl: 'viewer.html',
})
export class ViewerPage {

  selectedItem: any;
  @ViewChild('visualizationContainer') visualizationContainer: ElementRef;

  constructor(public params: NavParams,
              public vis: Visualize) {
    this.selectedItem = this.params.get('item');
  }

  ngAfterViewInit() {
    this.vis.login().then((v: any)=> {
      v.adhocView({
        container: '.visualization-container',
        resource: this.selectedItem.resource,
        success: ()=> {
          console.log('rendered');
        },
        error: (err)=> {
          console.log(err);
        }
      });
    });
  }
}