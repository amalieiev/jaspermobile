import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {ViewerPage} from '../viewer/viewer';
import {ResourceInfoPage} from "../resource-info/resource-info";


@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {

  items: Array<{thumbnail: string, title: string, description: string, resource: string}> = [];
  queryString: string = '';
  displayMode: string = 'list';

  constructor(public navCtrl: NavController) {
    this.loadItems();
  }

  loadItems() {
    for (let i = 0; i < 30; i++) {
      this.items.push({
        thumbnail: '',
        title: `Report ${this.items.length}`,
        description: 'Description of test report',
        resource: '/public/Samples/Ad_Hoc_Views/01__Geographic_Results_by_Segment'
      });
    }
  }

  toggleDisplayMode() {
    this.displayMode = this.displayMode == 'list' ? 'grid' : 'list';
  }

  updateQuery(event) {
    const value = event.target.value;
    this.queryString = value && value.toLowerCase().trim();
  }

  filterItems() {
    if (this.queryString && this.queryString !== '') {
      return this.items.filter((item)=> {
        return item.title.toLowerCase().indexOf(this.queryString) > -1;
      });
    } else {
      return this.items;
    }
  }

  doInfinite(infiniteScroll) {
    setTimeout(()=> {
      this.loadItems();
      infiniteScroll.complete();
    }, 500);
  }

  run(item) {
    this.navCtrl.push(ViewerPage, {item});
  }

  showInfo(event, item) {
    event.stopPropagation();
    this.navCtrl.push(ResourceInfoPage, {resource: item})
  }
}
