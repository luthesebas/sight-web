import { Pipe, PipeTransform } from '@angular/core';
import { Rating } from 'src/app/shared/models/rating.model';

@Pipe({
    name: 'ratingStarIcon',
})
export class RatingStarIconPipe implements PipeTransform {
    readonly ICON_FULL_STAR: string = 'star';
    readonly ICON_HALF_STAR: string = 'star_half';
    readonly ICON_EMPTY_STAR: string = 'star_border';

    readonly HALF_STAR_THRESHOLD: number = 0.45;

    transform(index: number, rating: Rating): string {
        if (rating) {
            if (rating.averageScore >= index) {
                return this.ICON_FULL_STAR;
            }
            if (rating.averageScore >= index - this.HALF_STAR_THRESHOLD) {
                return this.ICON_HALF_STAR;
            }
        }
        return this.ICON_EMPTY_STAR;
    }
}
