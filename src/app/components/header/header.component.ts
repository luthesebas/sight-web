import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { NavigationConfig } from 'src/app/config/navigation.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input()
  showMainNavigation: boolean;

  @Input()
  showSideNavigation: boolean;

  @Input()
  navigationConfig: NavigationConfig;

  @Output()
  sideNavigationToggled = new EventEmitter();

}
