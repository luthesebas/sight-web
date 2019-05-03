import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,

    // Angular Material
    MatIconModule
  ],
  exports: [
    RatingComponent
  ]
})
export class RatingModule { }
