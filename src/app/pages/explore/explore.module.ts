import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreViewComponent } from './explore-view/explore-view.component';
import { RecipeModule } from 'src/app/shared/components/recipe/recipe.module';
import { ExploreService } from './service/explore.service';
import * as fromRecipe from './redux/reducers/recipe.reducer';
import { RecipeEffects } from './redux/effects/recipe.effects';

@NgModule({
  declarations: [
    ExploreViewComponent
  ],
  imports: [
    CommonModule,
    RecipeModule,
    ExploreRoutingModule,
    StoreModule.forFeature('recipe', fromRecipe.reducer),
    EffectsModule.forFeature([RecipeEffects])
  ],
  providers: [
    ExploreService
  ]
})
export class ExploreModule { }
