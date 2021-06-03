import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    Input,
    OnDestroy,
    QueryList
} from '@angular/core';

import { BehaviorSubject, combineLatest, interval, of, Subscription } from 'rxjs';
import { map, shareReplay, skip, startWith } from 'rxjs/operators';
import { modulo } from 'src/app/shared/utility/math';

import { CarouselSlideComponent } from '../carousel-slide/carousel-slide.component';

const leftToRight = [
    group([
        query(
            '.carousel-slide active',
            [
                style({ transform: 'translateX(-100%)' }),
                animate('.3s ease-out', style({ transform: 'translateX(0%)' })),
            ],
            { optional: true }
        ),
        query(
            '.carousel-slide',
            [
                style({ transform: 'translateX(0%)' }),
                animate('.3s ease-out', style({ transform: 'translateX(100%)' })),
            ],
            { optional: true }
        ),
    ]),
];

const rightToLeft = [
    group([
        query(
            '.carousel-slides',
            [
                style({ transform: 'translateX(100%)', display: 'block' }),
                animate(
                    '.3s ease-out',
                    style({ transform: 'translateX(0%)', display: 'block' })
                ),
            ],
            { optional: true }
        ),
        query(
            '.carousel-slides .active',
            [
                style({ transform: 'translateX(0%)', display: 'block' }),
                animate(
                    '.3s ease-out',
                    style({ transform: 'translateX(-100%)', display: 'block' })
                ),
            ],
            { optional: true }
        ),
    ]),
];
@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('slideInOut', [
            transition(':increment', rightToLeft),
            transition(':decrement', leftToRight),
        ]),
    ],
})
export class CarouselComponent implements AfterContentInit, OnDestroy {
    // Refactor:
    /*
        Rename 'indicators' to 'navigation'
        Refactor css

        carouselNavigation$   { numberOfSlides, selectedIndex }
    */

    @Input()
    showControls: boolean = true;

    @Input()
    showIndicators: boolean = true;

    @Input()
    public set loop(value: any) {
        const shouldLoop = coerceBooleanProperty(value);
        shouldLoop ? this.startLoop() : this.stopLoop();
    }
    private loopSubscription: Subscription | null = null;

    @Input()
    loopInterval: number = 3000;

    @ContentChildren(CarouselSlideComponent)
    private slideComponents = new QueryList<CarouselSlideComponent>();
    public slideComponents$ = of(this.slideComponents.toArray());

    public slideIndex$ = new BehaviorSubject<number>(0);
    private slideIndex = 0;

    ngAfterContentInit() {
        this.slideComponents$ = this.slideComponents.changes.pipe(
            map((queryList: QueryList<CarouselSlideComponent>) => queryList.toArray()),
            startWith(this.slideComponents.toArray()),
            shareReplay()
        );

        this.slideComponents$.pipe(skip(1)).subscribe(() => this.reset());

        combineLatest([
            this.slideIndex$,
            this.slideComponents$,
        ]).subscribe(([index, slides]) =>
            slides.forEach((slide, i) => (i === index ? slide.show() : slide.hide()))
        );
    }

    ngOnDestroy() {
        this.stopLoop();
        this.slideIndex$.complete();
    }

    public reset() {
        this.selectSlide(0);
    }

    public showNextSlide() {
        this.selectSlide(this.slideIndex + 1);
    }

    public showPreviousSlide() {
        this.selectSlide(this.slideIndex - 1);
    }

    public selectSlide(index: number = 0) {
        if (this.slideIndex !== index) {
            this.slideIndex = modulo(index, this.slideComponents.length);
            this.slideIndex$.next(this.slideIndex);
        }
    }

    public startLoop() {
        if (this.loopSubscription == null) {
            this.loopSubscription = interval(this.loopInterval).subscribe(() =>
                this.showNextSlide()
            );
        }
    }

    public stopLoop() {
        if (this.loopSubscription != null) {
            this.loopSubscription.unsubscribe();
        }
    }
}
