import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import {
    CarouselSlideComponent
} from './components/carousel-slide/carousel-slide.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
    declarations: [CarouselComponent, CarouselSlideComponent],
    imports: [CommonModule, MaterialModule],
    exports: [CarouselComponent, CarouselSlideComponent],
})
export class CarouselModule {}
