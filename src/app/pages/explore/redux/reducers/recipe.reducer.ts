
import { RecipeActions, RecipeActionTypes } from '../actions/recipe.actions';
import { Recipe } from 'src/app/shared/models/recipe/recipe';

export interface State {
  recipes: Recipe[];
  loading: boolean;
}

export const initialState: State = {
  recipes: [],
  loading: false
};

export function reducer(state = initialState, action: RecipeActions): State {
  switch (action.type) {

    case RecipeActionTypes.LoadRecipes: {
      return {
        ...state,
        loading: true
      };
    }

    case RecipeActionTypes.LoadRecipesSuccess: {
      const recipes = action.payload.data;
      return {
        ...state,
        loading: false,
        recipes
      };
    }

    case RecipeActionTypes.LoadRecipesFailure: {
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
