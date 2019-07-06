import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input
} from '@angular/core';

import { Recipe } from 'src/app/shared/models/recipe/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  @Input()
  public recipes: Recipe[];

  ngOnInit() { }

  public openDetailsOf(recipe: Recipe): void {
    this.router.navigate(['/recipe', recipe.id]);
  }

  public trackRecipe(index: number, recipe: Recipe): number {
    return recipe ? recipe.id : undefined;
  }

}
