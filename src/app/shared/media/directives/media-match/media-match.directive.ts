import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

/**
 * Media Queries:
 * - https://material.angular.io/cdk/layout/overview
 * - https://github.com/angular/components/blob/master/src/cdk/layout/breakpoints.ts
 * - https://developer.mozilla.org/de/docs/Web/CSS/Media_Queries/Using_media_queries
 *
 * Usage:
 * ```html
 * <div *appMediaMatch="'(max-width: 500px)'">
 *     I only exist when media query matches
 * </div>
 * <div *appMediaMatch="['(min-width: 501px)', '(max-width: 1000px)']">
 *     I only exist when media query matches
 * </div>
 * ```
 */
@Directive({
  selector: '[appMediaMatch]'
})
export class MediaMatchDirective implements OnDestroy {

  private hasView: boolean = false;

  private mqList: MediaQueryList;
  private mqListener: (mql: MediaQueryList) => void;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private mediaMatcher: MediaMatcher
  ) {}

  public ngOnDestroy() {
    this.mqList.removeEventListener('change', () => this.mqListener, false);
    this.mqList = null;
    this.mqListener = null;
  }

  @Input()
  public set appMediaMatch(value: string | string[]) {
    this.mqList = Array.isArray(value)
      ? this.mediaMatcher.matchMedia(value.join(' or '))
      : this.mediaMatcher.matchMedia(value);

    this.mqListener = (query) => this.onMediaMatchChange(query.matches);
    this.mqList.addEventListener('change', () => this.mqListener, false);

    this.onMediaMatchChange(this.mqList.matches);
  }

  private onMediaMatchChange(matches: boolean) {
    if (matches && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!matches && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }

}
