import { InjectionToken } from '@angular/core';

import { Link, LinkGroup } from '../shared/models/common/link.model';

import * as LINKS from './link.config';

export interface NavigationConfig {
  sideNavigation: Link[];
  mainNavigation: {
    explore: Link;
    cookBook: Menu;
  };
  allLinkGroups: LinkGroup[];
}

export interface Menu {
  id?: string;
  label: string;
  reference?: string;
  iconName?: string;
  subMenus?: Menu[];
}

export const NAVIGATION_CONFIG = new InjectionToken<NavigationConfig>('config:navigation');

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
