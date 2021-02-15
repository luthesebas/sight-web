import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ExploreState } from '../redux/reducers/explore.reducer';
import {
    getRandomRecipesLoading,
    getRandomRecipes,
} from '../redux/selectors/explore.selectors';
import { LoadRandomRecipes } from '../redux/actions/explore.actions';

import { Recipe } from 'src/app/shared/models/recipe/recipe.model';

@Component({
    selector: 'app-explore-view',
    templateUrl: './explore-view.component.html',
    styleUrls: ['./explore-view.component.scss'],
})
export class ExploreViewComponent implements OnInit {
    loading$: Observable<boolean> = this.store.select(getRandomRecipesLoading);
    recipes$: Observable<Recipe[]> = this.store.select(getRandomRecipes);

    constructor(private store: Store<ExploreState>) {}

    ngOnInit() {
        this.store.dispatch(new LoadRandomRecipes());
    }
}
