import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromExplore from './redux/reducers/explore.reducer';
import { ExploreEffects } from './redux/effects/explore.effects';

import { ExplorePageRoutingModule } from './explore-page-routing.module';

import { RecipeModule } from './../../shared/modules/recipe/recipe.module';
import { ExploreViewComponent } from './explore-view/explore-view.component';

@NgModule({
  declarations: [
    ExploreViewComponent
  ],
  imports: [
    CommonModule,
    ExplorePageRoutingModule,
    RecipeModule,

    // NgRx
    StoreModule.forFeature('explore', fromExplore.reducer),
    EffectsModule.forFeature([ExploreEffects])
  ],
  providers: []
})
export class ExplorePageModule { }
