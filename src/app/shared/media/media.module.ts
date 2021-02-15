import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaMatchModule } from './directives/media-match/media-match.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, MediaMatchModule],
    exports: [MediaMatchModule],
})
export class MediaModule {}
