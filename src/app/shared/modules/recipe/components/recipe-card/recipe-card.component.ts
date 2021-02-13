import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Recipe } from 'src/app/shared/models/recipe/recipe.model';

@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipe-card.component.html',
    styleUrls: ['./recipe-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeCardComponent {
    @Input()
    recipe: Recipe;
}
