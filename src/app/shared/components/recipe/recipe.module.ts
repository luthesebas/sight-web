import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RatingModule } from '../rating/rating.module';
import { TruncateModule } from '../../pipes/truncate/truncate.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    CommonModule,

    RatingModule,
    TruncateModule,

    // Angular Material
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    RecipeListComponent
  ]
})
export class RecipeModule { }
