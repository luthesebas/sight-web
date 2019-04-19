import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe/recipe';

@Component({
  selector: 'app-explore-view',
  templateUrl: './explore-view.component.html',
  styleUrls: ['./explore-view.component.scss']
})
export class ExploreViewComponent implements OnInit {

  constructor() { }

  public recipes: Recipe[];

  ngOnInit() {
    const recipe0 = new Recipe();
    recipe0.id = 0;
    recipe0.details.title = 'Title 0';
    recipe0.details.description = 'Description of recipe 0';
    recipe0.rating.averageScore = 3;
    recipe0.rating.totalRatings = 7;
    recipe0.imageSources.push('assets/404.png');
    const recipe1 = new Recipe();
    recipe1.id = 1;
    recipe1.details.title = 'Title 1';
    recipe1.details.description = 'Description of recipe 1';
    recipe1.rating.averageScore = 2.6;
    recipe1.rating.totalRatings = 12;
    recipe1.imageSources.push('assets/404.png');
    const recipe2 = new Recipe();
    recipe2.id = 2;
    recipe2.details.title = 'Title 2';
    recipe2.details.description = 'Description of recipe 2';
    recipe2.rating.averageScore = 3.9;
    recipe2.rating.totalRatings = 10;
    recipe2.imageSources.push('assets/404.png');

    this.recipes = [recipe0, recipe1, recipe2];
  }

}
