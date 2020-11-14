import { Rating } from '../rating.model';
import { RecipeDetails } from './recipe-details.model';
import { Image } from '../common/image.model';

export interface Recipe {

  id: number;
  details: RecipeDetails;
  rating: Rating;
  coverImage?: Image;
  images: Image[];

}
