import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreViewComponent } from './explore-view/explore-view.component';
import { RecipeModule } from 'src/app/shared/components/recipe/recipe.module';
import { ExploreService } from './service/explore.service';

@NgModule({
  declarations: [
    ExploreViewComponent
  ],
  imports: [
    CommonModule,
    RecipeModule,
    ExploreRoutingModule
  ],
  providers: [
    ExploreService
  ]
})
export class ExploreModule { }
