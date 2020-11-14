import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipePageRoutingModule } from './recipe-page-routing.module';

import { RecipeModule } from '../../shared/modules/recipe/recipe.module';
import { RecipePageViewComponent } from './recipe-page-view/recipe-page-view.component';

@NgModule({
  declarations: [
    RecipePageViewComponent
  ],
  imports: [
    CommonModule,
    RecipePageRoutingModule,
    RecipeModule,

    // NgRx
  ]
})
export class RecipePageModule { }
