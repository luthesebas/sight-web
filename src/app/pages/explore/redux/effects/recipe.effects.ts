import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  RecipeActionTypes,
  RecipeActions,
  LoadRecipesSuccess,
  LoadRecipesFailure
} from '../actions/recipe.actions';
import { ExploreService } from '../../service/explore.service';

@Injectable()
export class RecipeEffects {

  constructor(
    private actions$: Actions<RecipeActions>,
    private recipeStoreService: ExploreService
  ) {}

  @Effect()
  loadRecipes$ = this.actions$.pipe(
    ofType(RecipeActionTypes.LoadRecipes),
    switchMap(() =>
      this.recipeStoreService.getRecipes().pipe(
        map(data => new LoadRecipesSuccess({data})),
        catchError(error => of(new LoadRecipesFailure({error})))
      )
    )
  );

}
