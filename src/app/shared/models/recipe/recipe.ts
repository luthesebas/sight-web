import { Rating } from '../rating';
import { RecipeDetails } from './recipe-details';

export class Recipe {

  id: number;
  details = new RecipeDetails();
  rating = new Rating();
  imageSources: string[] = [];

  public getCoverImageSource(): string {
    if (this.imageSources && this.imageSources.length >= 0) {
      return this.imageSources[0];
    } else {
      return undefined;
    }
  }

}
