import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe/recipe';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss']
})
export class RecipeListItemComponent implements OnInit {

  constructor() { }

  @Input()
  public recipe: Recipe;

  ngOnInit() {
  }

  public openDetailsOf(recipe: Recipe): void {
    // TODO Open recipe details
    console.log('Open recipe details...');
  }

}
