import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Recipe } from 'src/app/shared/models/recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent {

  @Input()
  public recipes: Recipe[];

  public trackRecipe(index: number, recipe: Recipe): number {
    return recipe ? recipe.id : null;
  }

}
