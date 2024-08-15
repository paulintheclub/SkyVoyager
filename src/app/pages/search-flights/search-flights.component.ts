import {AfterViewInit, Component, ElementRef} from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrl: './search-flights.component.scss'
})
export class SearchFlightsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.initializeSwiper();
  }

  initializeSwiper() {
    const swiperEl = this.el.nativeElement.querySelector('swiper-container');
    const params = {
      injectStyles: [
        `
        :host(.custom-swiper) .swiper-wrapper {
          background-color: red;
        }
        `,
      ],
      injectStylesUrls: ['path/to/one.css', 'path/to/two.css'],
    };

    Object.assign(swiperEl, params);
    swiperEl.initialize();
  }
}
