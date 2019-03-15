import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreViewComponent } from './explore-view/explore-view.component';
import { RecipeModule } from 'src/app/components/recipe/recipe.module';

@NgModule({
  declarations: [
    ExploreViewComponent
  ],
  imports: [
    CommonModule,
    RecipeModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule { }
