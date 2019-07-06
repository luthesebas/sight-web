import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Recipe } from 'src/app/shared/models/recipe/recipe';

export enum RecipeActionTypes {
  LoadRecipes = '[Recipe] Load Recipes',
  LoadRecipesSuccess = '[Recipe] Load Recipes Success',
  LoadRecipesFailure = '[Recipe] Load Recipes Failure'
}

export class LoadRecipes implements Action {
  readonly type = RecipeActionTypes.LoadRecipes;
}

export class LoadRecipesSuccess implements Action {
  readonly type = RecipeActionTypes.LoadRecipesSuccess;
  constructor(public payload: { data: Recipe[] }) {}
}

export class LoadRecipesFailure implements Action {
  readonly type = RecipeActionTypes.LoadRecipesFailure;
  constructor(public payload: { error: HttpErrorResponse }) {}
}

export type RecipeActions =
  LoadRecipes
  | LoadRecipesSuccess
  | LoadRecipesFailure;
