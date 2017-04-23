import {Component, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'resource-card',
  templateUrl: 'resource-card.html',
})
export class ResourceCard {
  @Input() title: string;
  @Input() description: string;

  constructor(public el: ElementRef) {
  }

  ngAfterViewInit() {
    this.el.nativeElement.style.height = this.el.nativeElement.offsetWidth + 'px';
  }
}
