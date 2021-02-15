import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { RecipeService } from 'src/app/shared/modules/recipe/services/recipe.service';

import {
    ExploreActions,
    ExploreActionTypes,
    LoadRandomRecipesFailure,
    LoadRandomRecipesSuccess
} from './explore.actions';

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
                map((data) => new LoadRandomRecipesSuccess({ data })),
                catchError((error) => of(new LoadRandomRecipesFailure({ error })))
            )
        )
    );
}
