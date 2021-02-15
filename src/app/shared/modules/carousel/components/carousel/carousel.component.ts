import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList
} from '@angular/core';

import { CarouselSlideComponent } from '../carousel-slide/carousel-slide.component';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements AfterViewInit {
    @Input()
    showControls: boolean = true;

    @Input()
    showIndicators: boolean = true;

    @ContentChildren(CarouselSlideComponent) slides: QueryList<CarouselSlideComponent> = new QueryList();

    private _selectedSlideIndex: number = 0;
    public get selectedSlideIndex() {
        return this._selectedSlideIndex;
    }

    constructor() {}

    ngAfterViewInit(): void {
        this.selectSlideByIndex(0);
    }

    previousSlide() {
        this.selectSlideByIndex(this.selectedSlideIndex - 1);
    }

    nextSlide() {
        this.selectSlideByIndex(this.selectedSlideIndex + 1);
    }

    selectSlideByIndex(index: number) {
        if (index >= this.slides.length) {
            index = 0;
        }
        if (index < 0) {
            index = this.slides.length - 1;
        }

        this._selectedSlideIndex = index;

        this.slides.forEach((slide, i) =>
            i === this.selectedSlideIndex ? slide.show() : slide.hide()
        );
    }
}
