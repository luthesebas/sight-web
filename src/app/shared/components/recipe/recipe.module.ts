import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeListItemComponent } from './recipe-list-item/recipe-list-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RatingModule } from '../rating/rating.module';
import { TruncateModule } from '../../pipes/truncate/truncate.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    RecipeListItemComponent,
    RecipeListComponent,
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
