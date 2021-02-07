import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [
    trigger('fade', [
      state('false', style({
        opacity: 0.5
      })),
      state('true', style({
        opacity: 1
      })),
      transition('false => true', animate('0.3s ease-in')),
      transition('true => false', animate('0.3s ease-out'))
    ])
  ]
})
export class CarouselSlideComponent {

  @HostBinding('style.display') display = 'block';
  @HostBinding('@fade') isDisplayed = false;

  show() {
    this.display = 'block';
    this.isDisplayed = true;
  }

  hide() {
    this.display = 'none';
    this.isDisplayed = false;
  }

}
