import { Component, OnInit, Input } from '@angular/core';

import { Rating } from '../../../models/rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Input() rating = new Rating();
  @Input() maximum = 5;

  ngOnInit() { }

  public getIconName(index: number): string {
    if (this.rating.averageScore >= index) {
      return 'star';
    }
    if (this.rating.averageScore >= index - 0.45) {
      return 'star_half';
    }
    return 'star_border';
  }

}
