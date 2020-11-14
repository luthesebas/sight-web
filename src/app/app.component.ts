import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { NAVIGATION_CONFIG } from './config/navigation.config';
import { SOCIAL_MEDIA_CONFIG } from './config/social-media.config';
import { NavigationConfig } from './shared/models/common/navigation-config.model';
import { SocialMediaConfig } from './shared/models/common/social-media-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  isHandset$: Observable<boolean>;

  constructor(
    @Inject(NAVIGATION_CONFIG) readonly navigationConfig: NavigationConfig,
    @Inject(SOCIAL_MEDIA_CONFIG) readonly socialMediaConfig: SocialMediaConfig,
    private breakpointObserver: BreakpointObserver
  ) {
    this.isHandset$ = this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
      ])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

}
