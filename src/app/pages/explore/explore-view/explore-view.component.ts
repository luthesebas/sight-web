import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../redux/reducers/recipe.reducer';
import { getRecipesLoading, getRecipes } from '../redux/selectors/recipe.selectors';
import { LoadRecipes } from '../redux/actions/recipe.actions';
import { Recipe } from 'src/app/shared/models/recipe/recipe';

@Component({
  selector: 'app-explore-view',
  templateUrl: './explore-view.component.html',
  styleUrls: ['./explore-view.component.scss']
})
export class ExploreViewComponent implements OnInit {

  loading$: Observable<boolean> = this.store.select(getRecipesLoading);
  recipes$: Observable<Recipe[]> = this.store.select(getRecipes);

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadRecipes());
  }

}
