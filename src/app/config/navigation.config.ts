import { InjectionToken } from '@angular/core';

import { NavigationConfig } from '../shared/models/common/navigation-config.model';
import * as LINKS from './link.config';

export const NAVIGATION_CONFIG = new InjectionToken<NavigationConfig>('navigation.config');

export const NAVIGATION_CONFIG_VALUE: NavigationConfig = {
  sideNavigation: [
    LINKS.explore,
    LINKS.cookBook
  ],
  mainNavigation: {
    explore: LINKS.explore,
    cookBook: {
      id: 'cookbookMenu',
      label: 'Kochbuch',
      iconName: 'book',
      subMenus: [
        { ...LINKS.cookBook },
      ]
    }
  },
  allLinkGroups: [
    LINKS.recipeLinkGroup,
    LINKS.enterpriseLinkGroup
  ]
}
