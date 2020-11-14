import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    // TODO: Show landing page (!= explore)
    path: '',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  },
  {
    path: 'explore',
    loadChildren: () => import('./pages/explore-page/explore-page.module').then(m => m.ExplorePageModule)
  },
  {
    path: 'recipe',
    loadChildren: () => import('./pages/recipe-page/recipe-page.module').then(m => m.RecipePageModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
