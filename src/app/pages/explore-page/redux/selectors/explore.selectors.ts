import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ExploreState } from '../reducers/explore.reducer';

export const getExploreState = createFeatureSelector<ExploreState>('explore');

export const getRandomRecipesLoading = createSelector(
    getExploreState,
    (state) => state.loading
);

export const getRandomRecipes = createSelector(getExploreState, (state) => state.recipes);
