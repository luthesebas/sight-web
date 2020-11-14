
import { ExploreActions, ExploreActionTypes } from '../actions/explore.actions';
import { Recipe } from 'src/app/shared/models/recipe/recipe.model';

export interface ExploreState {
  recipes: Recipe[];
  loading: boolean;
}

export const initialState: ExploreState = {
  recipes: [],
  loading: false
};

export function reducer(state = initialState, action: ExploreActions): ExploreState {
  switch (action.type) {

    case ExploreActionTypes.LoadRandomRecipes: {
      return {
        ...state,
        loading: true
      };
    }

    case ExploreActionTypes.LoadRandomRecipesSuccess: {
      const recipes = action.payload.data;
      return {
        ...state,
        loading: false,
        recipes
      };
    }

    case ExploreActionTypes.LoadRandomRecipesFailure: {
      return {
        ...state,
        loading: false,
        recipes: []
      };
    }

    default: {
      return state;
    }

  }// switch
}// reducer
