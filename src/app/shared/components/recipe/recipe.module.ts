import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeListItemComponent } from './recipe-list-item/recipe-list-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RatingModule } from '../rating/rating.module';

@NgModule({
  declarations: [
    RecipeListItemComponent,
    RecipeListComponent,
  ],
  imports: [
    CommonModule,

    RatingModule,

    // Angular Material
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    RecipeListComponent
  ]
})
export class RecipeModule { }
