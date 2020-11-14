import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RECIPE_PAGE_PATHS } from 'src/app/pages/recipe-page/recipe-page-routing.config';
import { RecipePageViewComponent } from './recipe-page-view/recipe-page-view.component';

const routes: Routes = [
  {
    path: '',
    component: RecipePageViewComponent,
  },
  {
    path: RECIPE_PAGE_PATHS.one.path,
    component: RecipePageViewComponent,
    data: { pathConfig: RECIPE_PAGE_PATHS.one }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipePageRoutingModule { }
