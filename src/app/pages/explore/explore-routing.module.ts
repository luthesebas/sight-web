import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreViewComponent } from './explore-view/explore-view.component';
import { RecipeDetailsComponent } from 'src/app/shared/components/recipe/recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path: 'explore',
    component: ExploreViewComponent
  },
  {
    path: 'recipe/:recipeId',
    component: RecipeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
