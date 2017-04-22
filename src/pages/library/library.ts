import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';


@Component({
    selector: 'page-library',
    templateUrl: 'library.html'
})
export class LibraryPage {

    items: Array<{thumbnail: string, title: string, description: string}> = [];
    queryString: string = '';

    constructor(public navCtrl: NavController) {
        this.loadItems();
    }

    loadItems() {
        for (let i = 0; i < 30; i++) {
            this.items.push({
                thumbnail: '',
                title: `Report ${this.items.length}`,
                description: 'Description of test report'
            });
        }
    }

    updateQuery(event) {
        const value = event.target.value;
        this.queryString =  value && value.toLowerCase().trim();
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
        }, 500)
    }
}
