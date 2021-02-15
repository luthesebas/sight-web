import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RecipeModule } from '../../shared/modules/recipe/recipe.module';
import { ExplorePageRoutingModule } from './explore-page-routing.module';
import { ExploreViewComponent } from './explore-view/explore-view.component';
import { ExploreEffects } from './redux/explore.effects';
import * as fromExplore from './redux/explore.reducer';

@NgModule({
    declarations: [ExploreViewComponent],
    imports: [
        CommonModule,
        ExplorePageRoutingModule,
        RecipeModule,

        // NgRx
        StoreModule.forFeature('explore', fromExplore.reducer),
        EffectsModule.forFeature([ExploreEffects]),
    ],
    providers: [],
})
export class ExplorePageModule {}
