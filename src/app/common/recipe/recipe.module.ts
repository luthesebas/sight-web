import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListItemComponent } from './recipe-list-item/recipe-list-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    RecipeListItemComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RecipeListComponent
  ]
})
export class RecipeModule { }
