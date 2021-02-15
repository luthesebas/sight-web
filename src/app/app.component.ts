import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { NAVIGATION_CONFIG, NavigationConfig } from './config/navigation.config';
import { SOCIAL_MEDIA_CONFIG, SocialMediaConfig } from './config/social-media.config';
import { MediaService } from './shared/media/services/media.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    constructor(
        @Inject(NAVIGATION_CONFIG) readonly navigationConfig: NavigationConfig,
        @Inject(SOCIAL_MEDIA_CONFIG) readonly socialMediaConfig: SocialMediaConfig,
        public mediaService: MediaService
    ) {}
}
