import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { RepeatModule } from '../../directives/repeat/repeat.module';

import { RatingComponent } from './components/rating/rating.component';
import { RatingStarIconPipe } from './pipes/rating-star-icon.pipe';

@NgModule({
  declarations: [
    RatingComponent,
    RatingStarIconPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RepeatModule
  ],
  exports: [
    RatingComponent
  ]
})
export class RatingModule { }
