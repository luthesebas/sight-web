import { Rating } from '../rating.model';
import { Image } from '../common/image.model';

export interface Recipe {
  id: number;
  details: {
    title: string;
    description: string;
  };
  rating: Rating;
  coverImage?: Image;
  images: Image[];
}
