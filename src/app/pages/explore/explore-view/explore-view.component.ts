import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe/recipe';
import { ExploreService } from '../service/explore.service';

@Component({
  selector: 'app-explore-view',
  templateUrl: './explore-view.component.html',
  styleUrls: ['./explore-view.component.scss']
})
export class ExploreViewComponent implements OnInit {

  constructor(private exploreService: ExploreService) { }

  public recipes: Recipe[];

  ngOnInit() {
    this.recipes = this.exploreService.getRecipes();
  }

}
