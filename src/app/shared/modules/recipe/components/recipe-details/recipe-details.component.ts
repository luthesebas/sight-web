import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Recipe } from 'src/app/shared/models/recipe/recipe.model';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailsComponent {
    @Input()
    public recipe: Recipe | null = null;
}
