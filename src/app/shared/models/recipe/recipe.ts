import { Rating } from '../rating';
import { RecipeDetails } from './recipe-details';

export class Recipe { // TODO: Change to an interface

  id: number;
  details = new RecipeDetails();
  rating = new Rating();
  imageSources: string[] = [];
  // TODO: Add property for recipe cover image
  // TODO: Rename imageSources to images

  // TODO: Extract into RecipeImagePipe
  public getCoverImageSource(): string {
    if (this.imageSources && this.imageSources.length > 0) {
      const img = this.imageSources[0];
      if (img && img.trim().length > 0) {
        return img;
      }
    }
    return '';
    // return 'assets/broken.png';
    // return null;
  }

}
