import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import {
  ExploreActionTypes,
  ExploreActions,
  LoadRandomRecipesSuccess,
  LoadRandomRecipesFailure
} from '../actions/explore.actions';

import { RecipeService } from 'src/app/shared/modules/recipe/services/recipe.service';

@Injectable()
export class ExploreEffects {

  constructor(
    private actions$: Actions<ExploreActions>,
    private recipeService: RecipeService
  ) {}

  @Effect()
  loadRandomRecipes$ = this.actions$.pipe(
    ofType(ExploreActionTypes.LoadRandomRecipes),
    switchMap(() =>
      this.recipeService.getRandom().pipe(
        map(data => new LoadRandomRecipesSuccess({data})),
        catchError(error => of(new LoadRandomRecipesFailure({error})))
      )
    )
  );

}
