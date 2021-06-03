import {
    animate,
    group,
    query,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component,
    TemplateRef,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-carousel-slide',
    templateUrl: './carousel-slide.component.html',
    styleUrls: ['./carousel-slide.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('fade', [
            state(
                'false',
                style({
                    opacity: 0.5,
                    transform: 'translateX(-100%)',
                })
            ),
            state(
                'true',
                style({
                    opacity: 1,
                    transform: 'translateX(0%)',
                })
            ),
            transition(
                'false => true',
                animate('0.3s ease-in', style({ transform: 'translateX(0%)' }))
            ),
            transition(
                'true => false',
                animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
            ),
        ]),
    ],
})
export class CarouselSlideComponent {
    @ViewChild(TemplateRef) public templateRef!: TemplateRef<any>;

    active: boolean = false;

    show() {
        this.active = true;
    }

    hide() {
        this.active = false;
    }
}
