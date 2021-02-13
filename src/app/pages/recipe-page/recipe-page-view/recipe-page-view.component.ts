import { Component, OnInit } from '@angular/core';

import { RouteParameters } from 'src/app/shared/routing/services/route-parameter.service';
import { RecipePageParameters } from '../recipe-page-routing.config';

import { Recipe } from 'src/app/shared/models/recipe/recipe.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-recipe-page-view',
    templateUrl: './recipe-page-view.component.html',
    styleUrls: ['./recipe-page-view.component.scss'],
})
export class RecipePageViewComponent implements OnInit {
    private routeParameters$: Observable<RecipePageParameters>;

    constructor(private routeParameters: RouteParameters) {
        this.routeParameters$ = routeParameters.get<RecipePageParameters>();
    }

    ngOnInit(): void {
        this.routeParameters$.subscribe((x) => console.log(x.variables.recipeId));
    }
}
