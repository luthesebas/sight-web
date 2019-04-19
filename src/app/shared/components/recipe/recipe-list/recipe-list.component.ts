import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from 'src/app/shared/models/recipe/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  @Input()
  public recipes: Recipe[];

  ngOnInit() {
  }

}
