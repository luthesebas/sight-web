import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselSlideComponent } from './components/carousel-slide/carousel-slide.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CarouselSlideComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CarouselComponent,
    CarouselSlideComponent
  ]
})
export class CarouselModule { }
