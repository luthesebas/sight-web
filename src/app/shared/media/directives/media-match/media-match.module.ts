import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaMatchDirective } from './media-match.directive';

@NgModule({
  declarations: [MediaMatchDirective],
  imports: [
    CommonModule
  ],
  exports: [MediaMatchDirective]
})
export class MediaMatchModule { }
