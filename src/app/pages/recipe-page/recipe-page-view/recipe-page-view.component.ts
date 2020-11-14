import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RouteParameterService } from 'src/app/shared/services/route-parameter.service';
import { RecipePageParameters } from '../recipe-page-routing.config';

import { Recipe } from 'src/app/shared/models/recipe/recipe.model';

@Component({
  selector: 'app-recipe-page-view',
  templateUrl: './recipe-page-view.component.html',
  styleUrls: ['./recipe-page-view.component.scss']
})
export class RecipePageViewComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private routeParameterService: RouteParameterService,
  ) { }

  ngOnInit(): void { }

}
