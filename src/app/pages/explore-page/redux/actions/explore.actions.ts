import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Recipe } from 'src/app/shared/models/recipe/recipe.model';

export enum ExploreActionTypes {
  LoadRandomRecipes = '[Explore] Load Random Recipes',
  LoadRandomRecipesSuccess = '[Explore] Load Recipes Random Success',
  LoadRandomRecipesFailure = '[Explore] Load Recipes Random Failure'
}

export class LoadRandomRecipes implements Action {
  readonly type = ExploreActionTypes.LoadRandomRecipes;
}

export class LoadRandomRecipesSuccess implements Action {
  readonly type = ExploreActionTypes.LoadRandomRecipesSuccess;
  constructor(public payload: { data: Recipe[] }) {}
}

export class LoadRandomRecipesFailure implements Action {
  readonly type = ExploreActionTypes.LoadRandomRecipesFailure;
  constructor(public payload: { error: HttpErrorResponse }) {}
}

export type ExploreActions =
  LoadRandomRecipes
  | LoadRandomRecipesSuccess
  | LoadRandomRecipesFailure;
