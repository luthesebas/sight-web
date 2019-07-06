import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State as RecipeState } from '../reducers/recipe.reducer';

export const getRecipeState = createFeatureSelector<RecipeState>('recipe');

export const getRecipesLoading = createSelector(
  getRecipeState,
  state => state.loading
);

export const getRecipes = createSelector(
  getRecipeState,
  state => state.recipes
);
