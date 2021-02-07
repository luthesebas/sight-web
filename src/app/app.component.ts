import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { NAVIGATION_CONFIG, NavigationConfig } from './config/navigation.config';
import { SOCIAL_MEDIA_CONFIG, SocialMediaConfig } from './config/social-media.config';

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
