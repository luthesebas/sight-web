import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TruncateModule } from '../../pipes/truncate/truncate.module';
import { MaterialModule } from '../material/material.module';
import { RatingModule } from '../rating/rating.module';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import {
    RecipeDetailsComponent
} from './components/recipe-details/recipe-details.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

@NgModule({
    declarations: [RecipeListComponent, RecipeDetailsComponent, RecipeCardComponent],
    imports: [CommonModule, RouterModule, MaterialModule, RatingModule, TruncateModule],
    exports: [RecipeListComponent, RecipeDetailsComponent, RecipeCardComponent],
})
export class RecipeModule {}
