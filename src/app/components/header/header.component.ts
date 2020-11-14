import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { NavigationConfig } from 'src/app/shared/models/common/navigation-config.model';

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
  navigationConfig: NavigationConfig;

  @Output()
  toggleSideNavigation = new EventEmitter();

}
