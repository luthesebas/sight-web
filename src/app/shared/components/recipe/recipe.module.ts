import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListItemComponent } from './recipe-list-item/recipe-list-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RecipeListItemComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule
  ],
  exports: [
    RecipeListComponent
  ]
})
export class RecipeModule { }
