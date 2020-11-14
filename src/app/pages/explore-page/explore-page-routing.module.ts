import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreViewComponent } from './explore-view/explore-view.component';

const routes: Routes = [
  {
    path: '',
    component: ExploreViewComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorePageRoutingModule { }
