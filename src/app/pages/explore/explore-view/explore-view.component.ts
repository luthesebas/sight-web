import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from 'src/app/shared/models/recipe/recipe';
import { ExploreService } from '../service/explore.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-explore-view',
  templateUrl: './explore-view.component.html',
  styleUrls: ['./explore-view.component.scss']
})
export class ExploreViewComponent implements OnInit, OnDestroy {

  constructor(
    private exploreService: ExploreService
  ) { }

  private destroyed$ = new Subject();
  public recipes: Recipe[];

  ngOnInit() {
    this.exploreService.getRecipes()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(items => this.recipes = items);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
