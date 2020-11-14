import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Rating } from 'src/app/shared/models/rating.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent {

  @Input() rating: Rating = {
    ratedByUser: 0,
    totalRatings: 0,
    averageScore: 0,
    maximumScore: 0
  };

}
