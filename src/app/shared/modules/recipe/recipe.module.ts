import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { RatingModule } from '../rating/rating.module';
import { TruncateModule } from '../../pipes/truncate/truncate.module';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    RatingModule,
    TruncateModule,
  ],
  exports: [
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeCardComponent
  ]
})
export class RecipeModule { }
